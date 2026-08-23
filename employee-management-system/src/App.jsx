import "./App.css";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Login from "./components/Auth/Login";

function App() {
  return (
    <>
      <Login />
      <EmployeeDashboard />
      <AdminDashboard />
    </>
  );
}

export default App;
