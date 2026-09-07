import { Link } from "react-router-dom";

const AdminProfile = ({ loggedInUserData }) => {
  const admin = loggedInUserData;

  if (!admin) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-zinc-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-100">Admin not found</h1>

          <p className="mt-2 text-sm text-zinc-500">
            The administrator profile you are looking for does not exist.
          </p>

          <Link
            to="/"
            className="mt-6 inline-block rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
          >
            Back to Login
          </Link>
        </div>
      </div>
    );
  }

  const initials = admin.name
    ?.split(" ")
    .map((name) => name.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Profile Card */}
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-xl">
          {/* Top Banner */}
          <div className="h-32 bg-linear-to-r from-purple-950 via-zinc-900 to-zinc-950"></div>

          <div className="px-6 pb-8 sm:px-8">
            {/* Profile Header */}
            <div className="-mt-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-end gap-4">
                {/* Avatar */}
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border-4 border-zinc-900 bg-purple-600 text-2xl font-bold text-white shadow-xl">
                  {initials}
                </div>

                {/* Name */}
                <div className="pb-1">
                  <p className="text-sm font-medium text-purple-400">
                    Administrator Profile
                  </p>

                  <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
                    {admin.name}
                  </h1>

                  <p className="mt-1 text-sm text-zinc-500">
                    @{admin.username}
                  </p>
                </div>
              </div>

              {/* Admin Badge */}
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs font-semibold text-purple-400">
                <span className="h-2 w-2 rounded-full bg-purple-400"></span>
                Administrator
              </div>
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-zinc-800"></div>

            {/* Account Information */}
            <div>
              <h2 className="text-lg font-semibold text-zinc-100">
                Account Information
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {/* Full Name */}
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Full Name
                  </p>

                  <p className="mt-2 text-sm font-semibold text-zinc-200">
                    {admin.name}
                  </p>
                </div>

                {/* Username */}
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Username
                  </p>

                  <p className="mt-2 text-sm font-semibold text-zinc-200">
                    @{admin.username}
                  </p>
                </div>

                {/* Email */}
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Email Address
                  </p>

                  <p className="mt-2 break-all text-sm font-semibold text-zinc-200">
                    {admin.email}
                  </p>
                </div>

                {/* Designation */}
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Designation
                  </p>

                  <p className="mt-2 text-sm font-semibold text-zinc-200">
                    {admin.designation}
                  </p>
                </div>
              </div>
            </div>

            {/* Admin Tools */}
            <div className="mt-10">
              <div>
                <p className="text-sm font-medium text-purple-400">
                  Administration
                </p>

                <h2 className="mt-1 text-lg font-semibold text-zinc-100">
                  Admin Tools
                </h2>

                <p className="mt-1 text-sm text-zinc-500">
                  Manage your team and handle day-to-day task assignments.
                </p>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {/* Admin Dashboard */}
                <Link
                  to={`/${admin.username}/taskboard`}
                  className="group rounded-xl border border-zinc-800 bg-zinc-950/50 p-5 transition duration-200 hover:border-purple-500/40 hover:bg-zinc-900"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-zinc-100">
                        Admin Taskboard
                      </p>

                      <p className="mt-1 text-sm leading-5 text-zinc-500">
                        View and manage employee tasks, assignments and
                        progress.
                      </p>
                    </div>

                    <span className="shrink-0 text-xl text-purple-400 transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>

                {/* Team & Task Management */}
                <Link
                  to="/addemployee"
                  className="group rounded-xl border border-zinc-800 bg-zinc-950/50 p-5 transition duration-200 hover:border-purple-500/40 hover:bg-zinc-900"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-zinc-100">
                        Team & Task Management
                      </p>

                      <p className="mt-1 text-sm leading-5 text-zinc-500">
                        Add employees to your team or create new tasks for them.
                      </p>
                    </div>

                    <span className="shrink-0 text-xl text-purple-400 transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Admin ID */}
            <div className="mt-8 border-t border-zinc-800 pt-5">
              <p className="text-xs text-zinc-600">
                Administrator ID #{admin.id}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
