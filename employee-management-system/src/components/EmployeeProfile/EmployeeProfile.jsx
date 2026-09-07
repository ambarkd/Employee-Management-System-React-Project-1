import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const EmployeeProfile = () => {
  const { username } = useParams();

  const authData = useContext(AuthContext);

  const employee = authData?.employees?.find(
    (employee) => employee.username === username,
  );

  if (!employee) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-zinc-100">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-8 py-10 text-center">
          <h2 className="text-xl font-semibold">Employee not found</h2>

          <p className="mt-2 text-sm text-zinc-400">
            The employee profile you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  // Create initials from employee name
  const initials = employee.name
    .split(" ")
    .map((name) => name.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
          {/* Top Banner */}
          <div className="h-28 border-b border-zinc-800 bg-zinc-900/50 sm:h-36" />

          <div className="px-5 pb-6 sm:px-8">
            <div className="-mt-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                {/* Avatar */}
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border-4 border-zinc-900 bg-amber-500 text-2xl font-bold text-zinc-950 shadow-lg">
                  {initials}
                </div>

                {/* Name */}
                <div className="pb-1">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    {employee.name}
                  </h2>

                  <p className="mt-1 text-sm text-zinc-400">
                    {employee.designation}
                  </p>

                  <div className="mt-3 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300">
                    @{employee.username}
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Active Employee
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Employee Information */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 lg:col-span-2">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-5">
              <div>
                <h2 className="text-lg font-semibold">Personal Information</h2>

                <p className="mt-1 text-sm text-zinc-400">
                  Employee account details.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {/* Full Name */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Full Name
                </p>

                <p className="mt-2 font-medium text-zinc-100">
                  {employee.name}
                </p>
              </div>

              {/* Username */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Username
                </p>

                <p className="mt-2 font-medium text-zinc-100">
                  @{employee.username}
                </p>
              </div>

              {/* Email */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Email Address
                </p>

                <p className="mt-2 break-all font-medium text-zinc-100">
                  {employee.email}
                </p>
              </div>

              {/* Designation */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Designation
                </p>

                <p className="mt-2 font-medium text-zinc-100">
                  {employee.designation}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Action */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm font-medium text-amber-400">Quick Access</p>

            <h2 className="mt-2 text-xl font-bold">Manage Your Tasks</h2>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              View your assigned tasks, check their status, and manage your work
              from your employee dashboard.
            </p>

            <Link
              to={`/${employee.username}/taskboard`}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-semibold text-zinc-950 transition hover:bg-amber-400 active:scale-[0.98]"
            >
              View Tasks
              <span>→</span>
            </Link>

            <div className="mt-6 border-t border-zinc-800 pt-5">
              <p className="text-xs text-zinc-500">Employee ID</p>

              <p className="mt-1 text-sm font-medium text-zinc-300">
                #{employee.id}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
