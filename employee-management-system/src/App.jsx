import "./App.css";

import { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Login from "./components/Auth/Login";
import Header from "./components/layout/Header";
import EmployeeProfile from "./components/EmployeeProfile/EmployeeProfile";

import { AuthContext } from "./context/AuthProvider";

import Loading from "./utils/Loading";

import { loginUser, restoreLoggedInUser } from "./utils/auth";

import {
  updateTaskStatus,
  addCommentToTask,
  deleteCommentFromTask,
  updateEmployeeInLocalStorage,
} from "./utils/taskHandlers";

function App() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const authData = useContext(AuthContext);

  // Restore logged-in user after page refresh
  useEffect(() => {
    if (!authData) return;

    const restoredUser = restoreLoggedInUser(authData);

    if (restoredUser) {
      setUser(restoredUser.role);
      setLoggedInUserData(restoredUser.userData);
    }

    setIsLoading(false);
  }, [authData]);

  // Login
  const handleLogin = (email, password) => {
    if (!authData) return;

    const loggedUser = loginUser(authData, email, password);

    if (!loggedUser) {
      alert("Invalid Credentials");
      return;
    }

    // Show loading for 1 second
    setIsLoading(true);

    setTimeout(() => {
      setUser(loggedUser.role);
      setLoggedInUserData(loggedUser.userData);

      setIsLoading(false);

      // Navigate based on user role
      if (loggedUser.role === "employee") {
        navigate(`/${loggedUser.userData.username}`);
      } else {
        navigate("/");
      }
    }, 1000);
  };

  // Update Task Status
  const handleTaskStatus = (taskId, status) => {
    if (!loggedInUserData) return;

    const updatedEmployee = updateTaskStatus(loggedInUserData, taskId, status);

    if (!updatedEmployee) return;

    setLoggedInUserData(updatedEmployee);

    updateEmployeeInLocalStorage(updatedEmployee);
  };

  // Add Comment
  const handleAddComment = (taskId, comment) => {
    if (!loggedInUserData) return;

    const updatedEmployee = addCommentToTask(loggedInUserData, taskId, comment);

    if (!updatedEmployee) return;

    setLoggedInUserData(updatedEmployee);

    updateEmployeeInLocalStorage(updatedEmployee);
  };

  // Delete Comment
  const handleDeleteComment = (taskId, commentIndex) => {
    if (!loggedInUserData) return;

    const updatedEmployee = deleteCommentFromTask(
      loggedInUserData,
      taskId,
      commentIndex,
    );

    if (!updatedEmployee) return;

    setLoggedInUserData(updatedEmployee);

    updateEmployeeInLocalStorage(updatedEmployee);
  };

  // Loading screen
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header loggedInUserData={loggedInUserData} />

      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            !user ? (
              <Login handleLogin={handleLogin} />
            ) : user === "admin" ? (
              <AdminDashboard loggedInUserData={loggedInUserData} />
            ) : (
              <Navigate to={`/${loggedInUserData?.username}`} replace />
            )
          }
        />

        {/* Employee Landing Page */}
        <Route path="/:username" element={<EmployeeProfile />} />

        {/* Employee Tasks */}
        <Route
          path="/:username/tasks"
          element={
            <EmployeeDashboard
              loggedInUserData={loggedInUserData}
              onTaskStatus={handleTaskStatus}
              onAddComment={handleAddComment}
              onDeleteComment={handleDeleteComment}
            />
          }
        />

        {/* Employee Profile */}
        <Route path="/:username/profile" element={<EmployeeProfile />} />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
