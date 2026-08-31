import AllTask from "../ManageTaskAdmin/AllTask";
import CreateEmployee from "../ManageTaskAdmin/CreateEmployee";
import CreateTask from "../ManageTaskAdmin/CreateTask";

const AdminDashboard = ({ loggedInUserData }) => {
  const firstName = loggedInUserData?.name?.split(" ")[0];

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-360 px-6 py-8">
        {/* Dashboard Heading */}
        <div className="mb-8">
          <p className="text-sm font-medium text-purple-400">Admin Dashboard</p>

          <h2 className="mt-1 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            {firstName}'s <span className="text-purple-400">Admin Board</span>
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-zinc-400">
            Manage your team, monitor assigned tasks, and keep track of
            everyone's progress.
          </p>
        </div>

        <AllTask loggedInUserData={loggedInUserData} />

        <CreateTask loggedInUserData={loggedInUserData} />

        <CreateEmployee loggedInUserData={loggedInUserData} />
      </div>
    </div>
  );
};

export default AdminDashboard;
