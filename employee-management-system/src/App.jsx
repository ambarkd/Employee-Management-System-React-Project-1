import "./App.css";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Login from "./components/Auth/Login";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "123") {
      setUser("admin");
    } else if (email === "user@gmail.com" && password === "123") {
      setUser("employee");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : ""}
      {user == "employee" ? <EmployeeDashboard /> : ""}
    </>
  );
}

export default App;
