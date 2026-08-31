import AllTask from "../ManageTaskAdmin/AllTask";
import AllTabs from "../ManageTaskAdmin/AllTabs";

const AdminDashboard = ({ loggedInUserData }) => {
  const firstName = loggedInUserData?.name?.split(" ")[0];

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-360 px-6 py-4">
        {/* Admin Heading */}
        <div className="mt-6">
          <p className="text-sm font-medium text-purple-400">Admin Dashboard</p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-100">
            {firstName}'s Admin Board
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Manage your team, tasks and assignments from one place.
          </p>
        </div>

        <AllTask loggedInUserData={loggedInUserData} />

        <AllTabs loggedInUserData={loggedInUserData} />
      </div>
    </div>
  );
};

export default AdminDashboard;
