import { useState } from "react";
import { Link } from "react-router-dom";

import CreateTask from "./CreateTask";
import CreateEmployee from "./CreateEmployee";

const AllTabs = ({ loggedInUserData }) => {
  const [activeTab, setActiveTab] = useState("task");

  const username = loggedInUserData?.username;

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-purple-400">Admin Actions</p>

            <h1 className="mt-1 text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
              Manage Your Team
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
              Create new tasks or add employees to your team from one place.
            </p>
          </div>

          {/* Back to Profile */}
          <Link
            to={`/${username}`}
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-purple-500/50 hover:bg-zinc-800 hover:text-purple-400"
          >
            <span className="text-base transition-transform group-hover:-translate-x-1">
              ←
            </span>

            <span>Back to Profile</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 shadow-xl sm:p-6">
          {/* Tabs */}
          <div className="flex w-full rounded-xl border border-zinc-800 bg-zinc-950 p-1.5">
            {/* Create Task Tab */}
            <button
              onClick={() => setActiveTab("task")}
              className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                activeTab === "task"
                  ? "bg-purple-500/15 text-purple-400 shadow-sm"
                  : "text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300"
              }`}
            >
              <span className="text-base">+</span>
              <span>Create Task</span>
            </button>

            {/* Create Employee Tab */}
            <button
              onClick={() => setActiveTab("employee")}
              className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                activeTab === "employee"
                  ? "bg-purple-500/15 text-purple-400 shadow-sm"
                  : "text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300"
              }`}
            >
              <span className="text-base">+</span>
              <span>Add Employee</span>
            </button>
          </div>

          {/* Active Tab Indicator */}
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-zinc-800"></div>

            <span className="text-xs font-medium uppercase tracking-wider text-zinc-600">
              {activeTab === "task" ? "Create New Task" : "Add New Employee"}
            </span>

            <div className="h-px flex-1 bg-zinc-800"></div>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === "task" && (
              <CreateTask loggedInUserData={loggedInUserData} />
            )}

            {activeTab === "employee" && (
              <CreateEmployee loggedInUserData={loggedInUserData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTabs;
