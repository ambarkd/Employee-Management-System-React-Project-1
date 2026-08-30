import "./App.css";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Login from "./components/Auth/Login";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProvider";
import Header from "./components/layout/Header";
import Loading from "./utils/Loading";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const authData = useContext(AuthContext);

  // Restore logged-in user after page reload
  useEffect(() => {
    if (!authData) return;

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
      setIsLoading(false);
      return;
    }

    // Restore Admin
    if (loggedInUser.role === "admin") {
      const admin = authData.admin?.find(
        (admin) => admin.email === loggedInUser.email,
      );

      if (admin) {
        setUser("admin");
        setLoggedInUserData(admin);
      }
    }

    // Restore Employee
    if (loggedInUser.role === "employee") {
      const employee = authData.employees.find(
        (employee) => employee.email === loggedInUser.email,
      );

      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
      }
    }

    setIsLoading(false);
  }, [authData]);

  // Login
  const handleLogin = (email, password) => {
    if (!authData) return;

    const admin = authData.admin.find(
      (admin) => admin.email === email && admin.password === password,
    );

    const employee = authData.employees.find(
      (employee) => employee.email === email && employee.password === password,
    );

    if (!admin && !employee) {
      alert("Invalid Credentials");
      return;
    }

    const loggedUser = admin || employee;
    const role = admin ? "admin" : "employee";

    // Show loading for 1 second after successful login
    setIsLoading(true);

    setTimeout(() => {
      setUser(role);
      setLoggedInUserData(loggedUser);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role,
          email: loggedUser.email,
        }),
      );

      setIsLoading(false);
    }, 1000);
  };

  // Update task status
  const handleTaskStatus = (taskId, status) => {
    if (!loggedInUserData) return;

    const updatedTasks = loggedInUserData.tasks.map((task) => {
      if (task.id !== taskId) {
        return task;
      }

      return {
        ...task,
        active: status === "active",
        newTask: false,
        completed: status === "completed",
        failed: status === "failed",
      };
    });

    // Recalculate task counts
    const updatedTaskCounts = {
      active: updatedTasks.filter((task) => task.active).length,
      newTask: updatedTasks.filter((task) => task.newTask).length,
      completed: updatedTasks.filter((task) => task.completed).length,
      failed: updatedTasks.filter((task) => task.failed).length,
    };

    // Create updated employee object
    const updatedEmployee = {
      ...loggedInUserData,
      tasks: updatedTasks,
      taskCounts: updatedTaskCounts,
    };

    // Update React state
    setLoggedInUserData(updatedEmployee);

    // Update employee data in localStorage
    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    const updatedEmployees = employees.map((employee) =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee,
    );

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  const handleAddComment = (taskId, comment) => {
    setLoggedInUserData((prevUser) => {
      if (!prevUser) return prevUser;

      const updatedTasks = prevUser.tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            comments: [...(task.comments || []), comment],
          };
        }

        return task;
      });

      const updatedUser = {
        ...prevUser,
        tasks: updatedTasks,
      };

      // Update employee data in localStorage
      const employees = JSON.parse(localStorage.getItem("employees")) || [];

      const updatedEmployees = employees.map((employee) => {
        if (employee.id === updatedUser.id) {
          return updatedUser;
        }

        return employee;
      });

      localStorage.setItem("employees", JSON.stringify(updatedEmployees));

      return updatedUser;
    });
  };

  const handleDeleteComment = (taskId, commentIndex) => {
    setLoggedInUserData((prevUser) => {
      if (!prevUser) return prevUser;

      const updatedTasks = prevUser.tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            comments: task.comments.filter(
              (_, index) => index !== commentIndex,
            ),
          };
        }

        return task;
      });

      const updatedUser = {
        ...prevUser,
        tasks: updatedTasks,
      };

      // Update employee data in localStorage
      const employees = JSON.parse(localStorage.getItem("employees")) || [];

      const updatedEmployees = employees.map((employee) => {
        if (employee.id === updatedUser.id) {
          return updatedUser;
        }

        return employee;
      });

      localStorage.setItem("employees", JSON.stringify(updatedEmployees));

      return updatedUser;
    });
  };

  // Show loading screen
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header
        loggedInUserData={loggedInUserData}
        setUser={setUser}
        setLoggedInUserData={setLoggedInUserData}
      />

      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && (
        <AdminDashboard loggedInUserData={loggedInUserData} />
      )}

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
