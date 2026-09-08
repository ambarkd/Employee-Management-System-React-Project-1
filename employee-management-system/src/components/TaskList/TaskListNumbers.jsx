const TaskListNumbers = ({ loggedInUserData, taskFilter, setTaskFilter }) => {
  const handleFilter = (filter) => {
    setTaskFilter(filter);
  };

  const handleViewAllTasks = () => {
    setTaskFilter(null);
  };

  return (
    <div className="mt-8">
      <h1 className="mb-10 font-semibold text-zinc-200 text-4xl text-center">
        {loggedInUserData.name.split(" ")[0]}'s Task Board
      </h1>
      {/* Task Numbers */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Active Task */}
        <button
          onClick={() => handleFilter("active")}
          className={`relative cursor-pointer overflow-hidden rounded-2xl border p-6 text-left shadow-xl backdrop-blur-md transition duration-200 hover:-translate-y-1 ${
            taskFilter === "active"
              ? "border-amber-400/60 bg-amber-900/30"
              : "border-blue-500/30 bg-linear-to-br from-blue-900/30 via-zinc-900 to-zinc-900"
          }`}
        >
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-500/10 blur-xl"></div>

          <h2 className="text-4xl font-extrabold text-blue-400">
            {loggedInUserData.taskCounts.active}
          </h2>

          <h3 className="mt-2 text-base font-semibold text-zinc-200">
            Active Task
          </h3>
        </button>

        {/* Completed Task */}
        <button
          onClick={() => handleFilter("completed")}
          className={`relative cursor-pointer overflow-hidden rounded-2xl border p-6 text-left shadow-xl backdrop-blur-md transition duration-200 hover:-translate-y-1 ${
            taskFilter === "completed"
              ? "border-emerald-400/60 bg-emerald-900/30"
              : "border-emerald-500/30 bg-linear-to-br from-emerald-900/30 via-zinc-900 to-zinc-900"
          }`}
        >
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-500/10 blur-xl"></div>

          <h2 className="text-4xl font-extrabold text-emerald-400">
            {loggedInUserData.taskCounts.completed}
          </h2>

          <h3 className="mt-2 text-base font-semibold text-zinc-200">
            Completed Task
          </h3>
        </button>

        {/* New Task */}
        <button
          onClick={() => handleFilter("newTask")}
          className={`relative cursor-pointer overflow-hidden rounded-2xl border p-6 text-left shadow-xl backdrop-blur-md transition duration-200 hover:-translate-y-1 ${
            taskFilter === "newTask"
              ? "border-purple-400/60 bg-purple-900/30"
              : "border-purple-500/30 bg-linear-to-br from-purple-900/30 via-zinc-900 to-zinc-900"
          }`}
        >
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-purple-500/10 blur-xl"></div>

          <h2 className="text-4xl font-extrabold text-purple-400">
            {loggedInUserData.taskCounts.newTask}
          </h2>

          <h3 className="mt-2 text-base font-semibold text-zinc-200">
            New Task
          </h3>
        </button>

        {/* Failed Task */}
        <button
          onClick={() => handleFilter("failed")}
          className={`relative cursor-pointer overflow-hidden rounded-2xl border p-6 text-left shadow-xl backdrop-blur-md transition duration-200 hover:-translate-y-1 ${
            taskFilter === "failed"
              ? "border-red-400/60 bg-red-900/30"
              : "border-red-500/30 bg-linear-to-br from-red-900/30 via-zinc-900 to-zinc-900"
          }`}
        >
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-red-500/10 blur-xl"></div>

          <h2 className="text-4xl font-extrabold text-red-400">
            {loggedInUserData.taskCounts.failed}
          </h2>

          <h3 className="mt-2 text-base font-semibold text-zinc-200">
            Failed Task
          </h3>
        </button>
      </div>

      {/* View All Tasks */}
      {taskFilter && (
        <div className="mt-5 flex justify-center">
          <button
            onClick={handleViewAllTasks}
            className="cursor-pointer rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300 transition duration-200 hover:border-zinc-600 hover:bg-zinc-800 hover:text-zinc-100"
          >
            ← View All Tasks
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskListNumbers;
