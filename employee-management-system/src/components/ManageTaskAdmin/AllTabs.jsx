import { useState } from "react";
import CreateTask from "./CreateTask";
import CreateEmployee from "./CreateEmployee";

const AllTabs = ({ loggedInUserData }) => {
  const [activeTab, setActiveTab] = useState("task");

  return (
    <div className="mt-8">
      {/* Heading */}
      <div className="mb-4">
        <h2 className="text-xl font-bold tracking-tight text-zinc-100">
          Admin Actions
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Create new tasks or add employees to your team.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex w-full rounded-xl border border-zinc-800 bg-zinc-900 p-1.5">
        {/* Create Task Tab */}
        <button
          onClick={() => setActiveTab("task")}
          className={`flex-1 cursor-pointer rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
            activeTab === "task"
              ? "bg-purple-500/15 text-purple-400"
              : "text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300"
          }`}
        >
          + Create Task
        </button>

        {/* Create Employee Tab */}
        <button
          onClick={() => setActiveTab("employee")}
          className={`flex-1 cursor-pointer rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
            activeTab === "employee"
              ? "bg-purple-500/15 text-purple-400"
              : "text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300"
          }`}
        >
          + Add Employee
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-5">
        {activeTab === "task" && (
          <CreateTask loggedInUserData={loggedInUserData} />
        )}

        {activeTab === "employee" && (
          <CreateEmployee loggedInUserData={loggedInUserData} />
        )}
      </div>
    </div>
  );
};

export default AllTabs;
