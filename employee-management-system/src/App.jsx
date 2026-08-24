import "./App.css";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Login from "./components/Auth/Login";
import { useContext, useState } from "react";
import { AuthContext } from "./context/AuthProvider";
import Header from "./components/layout/Header";

// import { useEffect } from "react";
// import { setLocalStorage } from "./utils/LocalStorage";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  // useEffect(() => {
  //   setLocalStorage();
  // }, []);

  const authData = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (!authData) return;

    const admin = authData.admin.find(
      (admin) => admin.email === email && admin.password === password,
    );

    if (admin) {
      setUser("admin");

      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));

      setLoggedInUserData(admin);
      return;
    }

    const employee = authData.employees.find(
      (employee) => employee.email === email && employee.password === password,
    );

    if (employee) {
      setUser("employee");

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee" }),
      );

      setLoggedInUserData(employee);
      return;
    }

    alert("Invalid Credentials");
  };

  return (
    <>
      <Header loggedInUserData={loggedInUserData} />
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard loggedInUserData={loggedInUserData} />
      ) : (
        ""
      )}
      {user == "employee" ? (
        <EmployeeDashboard loggedInUserData={loggedInUserData} />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
