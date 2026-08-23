import "./App.css";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Login from "./components/Auth/Login";
import { useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

function App() {
  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  }, []);
  return (
    <>
      <Login />
      <EmployeeDashboard />
      <AdminDashboard />
    </>
  );
}

export default App;
