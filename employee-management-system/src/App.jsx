import "./App.css";

import { useContext, useEffect, useState } from "react";

import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Login from "./components/Auth/Login";
import Header from "./components/layout/Header";

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
    }, 1000);
  };

  // Update Task Status
  const handleTaskStatus = (taskId, status) => {
    if (!loggedInUserData) return;

    const updatedEmployee = updateTaskStatus(loggedInUserData, taskId, status);

    if (!updatedEmployee) return;

    // Update React state
    setLoggedInUserData(updatedEmployee);

    // Update localStorage
    updateEmployeeInLocalStorage(updatedEmployee);
  };

  // Add Comment
  const handleAddComment = (taskId, comment) => {
    const updatedEmployee = addCommentToTask(loggedInUserData, taskId, comment);

    if (!updatedEmployee) return;

    // Update React state
    setLoggedInUserData(updatedEmployee);

    // Update localStorage
    updateEmployeeInLocalStorage(updatedEmployee);
  };

  // Delete Comment
  const handleDeleteComment = (taskId, commentIndex) => {
    const updatedEmployee = deleteCommentFromTask(
      loggedInUserData,
      taskId,
      commentIndex,
    );

    if (!updatedEmployee) return;

    // Update React state
    setLoggedInUserData(updatedEmployee);

    // Update localStorage
    updateEmployeeInLocalStorage(updatedEmployee);
  };

  // Loading screen
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header loggedInUserData={loggedInUserData} />

      {/* Login */}
      {!user && <Login handleLogin={handleLogin} />}

      {/* Admin Dashboard */}
      {user === "admin" && (
        <AdminDashboard loggedInUserData={loggedInUserData} />
      )}

      {/* Employee Dashboard */}
      {user === "employee" && (
        <EmployeeDashboard
          loggedInUserData={loggedInUserData}
          onTaskStatus={handleTaskStatus}
          onAddComment={handleAddComment}
          onDeleteComment={handleDeleteComment}
        />
      )}
    </>
  );
}

export default App;
