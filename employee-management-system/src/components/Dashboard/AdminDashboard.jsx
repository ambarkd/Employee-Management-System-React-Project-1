// import Header from "../layout/Header";
import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";

const AdminDashboard = ({ loggedInUserData }) => {
  console.log(loggedInUserData);
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-360 px-6 py-4">
        {/* <Header /> */}
        <CreateTask loggedInUserData={loggedInUserData} />
        <AllTask loggedInUserData={loggedInUserData} />
      </div>
    </div>
  );
};

export default AdminDashboard;
