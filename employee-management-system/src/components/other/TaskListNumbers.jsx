const TaskListNumbers = ({ loggedInUserData }) => {
  return (
    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {/* New Task */}
      <div className="relative overflow-hidden rounded-2xl border border-blue-500/30 bg-linear-to-br from-blue-900/30 via-zinc-900 to-zinc-900 p-6 shadow-xl backdrop-blur-md">
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-500/10 blur-xl"></div>
        <h2 className="text-4xl font-extrabold text-blue-400">
          {loggedInUserData.taskCounts.active}
        </h2>
        <h3 className="mt-2 text-base font-semibold text-zinc-200">
          Active Task
        </h3>
      </div>

      {/* Completed Task */}
      <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-linear-to-br from-emerald-900/30 via-zinc-900 to-zinc-900 p-6 shadow-xl backdrop-blur-md">
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-500/10 blur-xl"></div>
        <h2 className="text-4xl font-extrabold text-emerald-400">
          {loggedInUserData.taskCounts.completed}
        </h2>
        <h3 className="mt-2 text-base font-semibold text-zinc-200">
          Completed Task
        </h3>
      </div>

      {/* Accepted Task */}
      <div className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-linear-to-br from-purple-900/30 via-zinc-900 to-zinc-900 p-6 shadow-xl backdrop-blur-md">
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-purple-500/10 blur-xl"></div>
        <h2 className="text-4xl font-extrabold text-purple-400">
          {loggedInUserData.taskCounts.newTask}
        </h2>
        <h3 className="mt-2 text-base font-semibold text-zinc-200">
          Accepted Task
        </h3>
      </div>

      {/* Failed Task */}
      <div className="relative overflow-hidden rounded-2xl border border-red-500/30 bg-linear-to-br from-red-900/30 via-zinc-900 to-zinc-900 p-6 shadow-xl backdrop-blur-md">
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-red-500/10 blur-xl"></div>
        <h2 className="text-4xl font-extrabold text-red-400">
          {loggedInUserData.taskCounts.failed}
        </h2>
        <h3 className="mt-2 text-base font-semibold text-zinc-200">
          Failed Task
        </h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
