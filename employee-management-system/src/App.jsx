import "./App.css";

import { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Login from "./components/Auth/Login";
import Header from "./components/layout/Header";
import EmployeeProfile from "./components/EmployeeProfile/EmployeeProfile";
import AdminProfile from "./components/AdminProfile/AdminProfile";
import AllTabs from "./components/ManageTaskAdmin/AllTabs";

import { Toaster, toast } from "sonner";

import { AuthContext } from "./context/AuthProvider";

import Loading from "./utils/Loading";

import { loginUser, restoreLoggedInUser } from "./utils/auth";

import {
  updateTaskStatus,
  updateEmployeeInLocalStorage,
} from "./utils/taskHandlers";

import {
  handleEmployeeAddComment,
  handleEmployeeDeleteComment,
  handleAdminAddComment as addAdminComment,
  handleAdminDeleteComment as deleteAdminComment,
} from "./utils/commentHandlers";

function App() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const authData = useContext(AuthContext);

  // =========================================
  // Restore logged-in user after page refresh
  // =========================================

  useEffect(() => {
    if (!authData) return;

    const restoredUser = restoreLoggedInUser(authData);

    if (restoredUser) {
      setUser(restoredUser.role);
      setLoggedInUserData(restoredUser.userData);
    }

    setIsLoading(false);
  }, [authData]);

  // =========================================
  // Login
  // =========================================

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

      // Dynamic route based on username
      navigate(`/${loggedUser.userData.username}`);
    }, 1000);
  };

  // =========================================
  // Employee - Update Task Status
  // =========================================

  const handleTaskStatus = (taskId, status) => {
    if (!loggedInUserData) return;

    const updatedEmployee = updateTaskStatus(loggedInUserData, taskId, status);

    if (!updatedEmployee) return;

    setLoggedInUserData(updatedEmployee);

    updateEmployeeInLocalStorage(updatedEmployee);
  };

  // =========================================
  // Employee - Add Comment
  // =========================================

  const handleAddComment = (taskId, comment) => {
    const updatedEmployee = handleEmployeeAddComment(
      loggedInUserData,
      taskId,
      comment,
    );

    if (!updatedEmployee) return;

    setLoggedInUserData(updatedEmployee);
  };

  // =========================================
  // Employee - Delete Comment
  // =========================================

  const handleDeleteComment = (taskId, commentIndex) => {
    const updatedEmployee = handleEmployeeDeleteComment(
      loggedInUserData,
      taskId,
      commentIndex,
    );

    if (!updatedEmployee) return;

    setLoggedInUserData(updatedEmployee);
  };

  // =========================================
  // Admin - Add Comment
  // =========================================

  const handleAdminAddComment = (employeeId, taskId, comment) => {
    const updatedEmployee = addAdminComment(employeeId, taskId, comment);

    if (!updatedEmployee) return;

    // Green success toast
    toast.success("Admin comment added successfully");

    // Refresh after 5 seconds
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  // =========================================
  // Admin - Delete Comment
  // =========================================

  const handleAdminDeleteComment = (employeeId, taskId, commentIndex) => {
    const updatedEmployee = deleteAdminComment(
      employeeId,
      taskId,
      commentIndex,
    );

    if (!updatedEmployee) return;

    // Red error toast
    toast.error("Admin comment deleted successfully");

    // Refresh after 5 seconds
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  // =========================================
  // Loading Screen
  // =========================================

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* Sonner Toast */}
      <Toaster position="top-right" theme="dark" richColors />

      <Header loggedInUserData={loggedInUserData} />

      <Routes>
        {/* ========================================= */}
        {/* Login Route */}
        {/* ========================================= */}

        <Route
          path="/"
          element={
            !user ? (
              <Login handleLogin={handleLogin} />
            ) : (
              <Navigate to={`/${loggedInUserData?.username}`} replace />
            )
          }
        />

        {/* ========================================= */}
        {/* Admin - All Tabs / Add Employee */}
        {/* /addemployee */}
        {/* ========================================= */}

        <Route
          path="/addemployee"
          element={
            user === "admin" ? (
              <AllTabs loggedInUserData={loggedInUserData} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* ========================================= */}
        {/* Dynamic User Landing Page */}
        {/* Employee: /pallavidey */}
        {/* Admin: /ambaradmin */}
        {/* ========================================= */}

        <Route
          path="/:username"
          element={
            user === "employee" ? (
              <EmployeeProfile loggedInUserData={loggedInUserData} />
            ) : user === "admin" ? (
              <AdminProfile loggedInUserData={loggedInUserData} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* ========================================= */}
        {/* Dynamic User Taskboard */}
        {/* Employee: /pallavidey/taskboard */}
        {/* Admin: /ambaradmin/taskboard */}
        {/* ========================================= */}

        <Route
          path="/:username/taskboard"
          element={
            user === "employee" ? (
              <EmployeeDashboard
                loggedInUserData={loggedInUserData}
                onTaskStatus={handleTaskStatus}
                onAddComment={handleAddComment}
                onDeleteComment={handleDeleteComment}
              />
            ) : user === "admin" ? (
              <AdminDashboard
                loggedInUserData={loggedInUserData}
                onAddComment={handleAdminAddComment}
                onDeleteComment={handleAdminDeleteComment}
              />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* ========================================= */}
        {/* Unknown Routes */}
        {/* ========================================= */}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
