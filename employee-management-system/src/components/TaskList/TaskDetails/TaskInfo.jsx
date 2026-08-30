const TaskInfo = ({ task }) => {
  const getStatus = () => {
    if (task.completed) {
      return {
        label: "Completed",
        dot: "bg-emerald-400",
      };
    }

    if (task.failed) {
      return {
        label: "Failed",
        dot: "bg-red-400",
      };
    }

    if (task.newTask) {
      return {
        label: "New Task",
        dot: "bg-purple-400",
      };
    }

    return {
      label: "Active",
      dot: "bg-amber-400",
    };
  };

  const status = getStatus();

  return (
    <div className="px-6 py-6 sm:px-8">
      {/* Task Information */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Task Title */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Task Title
          </p>

          <p className="mt-2 text-sm font-medium text-zinc-200">
            {task.taskTitle}
          </p>
        </div>

        {/* Category */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Category
          </p>

          <p className="mt-2 text-sm font-medium text-zinc-200">
            {task.category}
          </p>
        </div>

        {/* Assigned Date */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Assigned Date
          </p>

          <p className="mt-2 text-sm font-medium text-zinc-200">
            {task.taskDate}
          </p>
        </div>

        {/* Priority */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Priority
          </p>

          <div className="mt-2">
            <span
              className={`inline-flex rounded-md border px-3 py-1 text-xs font-semibold ${
                task.priority === "High"
                  ? "border-red-500/30 bg-red-500/10 text-red-400"
                  : task.priority === "Medium"
                    ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
                    : task.priority === "Low"
                      ? "border-sky-500/30 bg-sky-500/10 text-sky-400"
                      : "border-zinc-700 bg-zinc-800 text-zinc-400"
              }`}
            >
              {task.priority} Priority
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8 border-t border-zinc-800 pt-6">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
          Description
        </p>

        <div className="mt-3 rounded-xl border border-zinc-800 bg-zinc-950/40 p-5">
          <p className="max-w-4xl text-sm leading-7 text-zinc-400">
            {task.taskDescription}
          </p>
        </div>
      </div>

      {/* Current Status */}
      <div className="mt-8 border-t border-zinc-800 pt-6">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
          Current Status
        </p>

        <div className="mt-3 flex items-center gap-3">
          <span className={`h-2.5 w-2.5 rounded-full ${status.dot}`} />

          <span className="text-sm font-medium text-zinc-300">
            {status.label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskInfo;
