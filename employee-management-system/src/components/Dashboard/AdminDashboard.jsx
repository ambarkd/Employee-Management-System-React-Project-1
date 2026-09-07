import { Link } from "react-router-dom";

import AllTask from "../ManageTaskAdmin/AllTask";

const AdminDashboard = ({
  loggedInUserData,
  onAddComment,
  onDeleteComment,
}) => {
  const firstName = loggedInUserData?.name?.split(" ")[0];
  const username = loggedInUserData?.username;

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-360 px-6 py-4">
        {/* Dashboard Header */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-purple-400">
              Admin Dashboard
            </p>

            <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-100">
              {firstName}'s Admin Board
            </h1>

            <p className="mt-2 text-sm text-zinc-500">
              Manage your team, tasks and assignments from one place.
            </p>
          </div>

          {/* Back to Profile */}
          <Link
            to={`/${username}`}
            className="group inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-purple-500/50 hover:bg-zinc-800 hover:text-purple-400"
          >
            <span className="text-base transition-transform group-hover:-translate-x-1">
              ←
            </span>

            <span>Back to Profile</span>
          </Link>
        </div>

        {/* All Tasks */}
        <AllTask
          loggedInUserData={loggedInUserData}
          onAddComment={onAddComment}
          onDeleteComment={onDeleteComment}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
