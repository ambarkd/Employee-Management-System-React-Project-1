const TaskList = ({
  loggedInUserData,
  onTaskDetails,
  taskFilter,
  onTaskStatus,
}) => {
  const getTaskStyles = (task) => {
    if (task.failed) {
      return {
        border: "border-red-500/30",
        background: "bg-red-500/5",
        hover: "hover:border-red-500/50",
        date: "text-red-400/80",
      };
    }

    if (task.completed) {
      return {
        border: "border-emerald-500/30",
        background: "bg-emerald-500/5",
        hover: "hover:border-emerald-500/50",
        date: "text-emerald-400/80",
      };
    }

    if (task.newTask) {
      return {
        border: "border-purple-500/30",
        background: "bg-purple-500/5",
        hover: "hover:border-purple-500/50",
        date: "text-purple-400/80",
      };
    }

    return {
      border: "border-amber-500/30",
      background: "bg-amber-500/5",
      hover: "hover:border-amber-500/50",
      date: "text-amber-400/80",
    };
  };

  const getPriorityStyles = (priority) => {
    switch (priority) {
      case "High":
        return "border-red-500/30 bg-red-500/10 text-red-400";

      case "Medium":
        return "border-amber-500/30 bg-amber-500/10 text-amber-400";

      case "Low":
        return "border-sky-500/30 bg-sky-500/10 text-sky-400";

      default:
        return "border-zinc-700 bg-zinc-800 text-zinc-400";
    }
  };

  // Filter tasks
  const filteredTasks = loggedInUserData?.tasks?.filter((task) => {
    if (!taskFilter) {
      return true;
    }

    return task[taskFilter];
  });

  // Heading
  const getTaskHeading = () => {
    switch (taskFilter) {
      case "active":
        return "Assigned Tasks (Active Task)";

      case "completed":
        return "Assigned Tasks (Completed Task)";

      case "newTask":
        return "Assigned Tasks (New Task)";

      case "failed":
        return "Assigned Tasks (Failed Task)";

      default:
        return "Assigned Tasks";
    }
  };

  return (
    <section className="mt-8">
      {/* Section Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
          {getTaskHeading()}
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Track your assigned tasks and monitor their current progress.
        </p>
      </div>

      {/* Task Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTasks?.map((task, index) => {
          const styles = getTaskStyles(task);

          // Hide priority for completed and failed tasks
          const showPriority = !task.completed && !task.failed;

          return (
            <div
              key={index}
              className={`flex flex-col rounded-2xl border bg-zinc-900/90 p-6 shadow-xl transition-all duration-200 hover:-translate-y-1 ${styles.border} ${styles.background} ${styles.hover}`}
            >
              {/* Main Content */}
              <div className="flex flex-1 flex-col">
                {/* Priority & Date */}
                <div className="flex items-center justify-between gap-3">
                  {showPriority ? (
                    <span
                      className={`rounded-md border px-3 py-1 text-xs font-semibold ${getPriorityStyles(
                        task.priority,
                      )}`}
                    >
                      {task.priority} Priority
                    </span>
                  ) : (
                    <span />
                  )}

                  <span className={`text-xs font-medium ${styles.date}`}>
                    {task.taskDate}
                  </span>
                </div>

                {/* Task Title */}
                <h3 className="mt-4 text-xl font-bold text-zinc-100">
                  {task.taskTitle}
                </h3>

                {/* Task Description */}
                <div className="task-description-scroll mt-3 max-h-30 overflow-y-auto pr-2">
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {task.taskDescription}
                  </p>
                </div>

                {/* Category */}
                <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                  <div className="flex min-w-0 items-center gap-2 text-sm">
                    <span className="shrink-0 font-medium text-zinc-300">
                      Category:
                    </span>

                    <span className="truncate rounded-md border border-zinc-700 bg-zinc-800/80 px-2.5 py-1 text-xs font-medium text-zinc-400">
                      {task.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions & Status */}
              <div className="mt-6 border-t border-zinc-800/80 pt-4">
                {/* Active / New Task Actions */}
                {(task.active || task.newTask) && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => onTaskStatus(task.id, "failed")}
                      className="flex-1 cursor-pointer rounded-lg border border-red-500/30 bg-red-500/10 px-1 py-2 text-[11px] font-medium text-red-400 transition hover:bg-red-500 hover:text-white sm:text-xs"
                    >
                      Failed
                    </button>

                    <button
                      onClick={() => onTaskStatus(task.id, "completed")}
                      className="flex-1 cursor-pointer rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-1 py-2 text-[11px] font-medium text-emerald-400 transition hover:bg-emerald-500 hover:text-white sm:text-xs"
                    >
                      Complete
                    </button>

                    <button
                      onClick={() => onTaskDetails(task)}
                      className="flex-1 cursor-pointer rounded-lg border border-sky-500/30 bg-sky-500/10 px-1 py-2 text-[11px] font-medium text-sky-400 transition hover:bg-sky-500 hover:text-white sm:text-xs"
                    >
                      Details
                    </button>
                  </div>
                )}

                {/* Completed */}
                {task.completed && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                      <span>✓</span>
                      Task Completed
                    </div>

                    <button
                      onClick={() => onTaskDetails(task)}
                      className="cursor-pointer text-xs font-medium text-emerald-400 transition hover:text-emerald-300"
                    >
                      See Details →
                    </button>
                  </div>
                )}

                {/* Failed */}
                {task.failed && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold text-red-400">
                      <span>✕</span>
                      Task Failed
                    </div>

                    <button
                      onClick={() => onTaskDetails(task)}
                      className="cursor-pointer text-xs font-medium text-red-400 transition hover:text-red-300"
                    >
                      See Details →
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* No Tasks */}
      {filteredTasks?.length === 0 && (
        <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/40 p-10 text-center">
          <p className="text-sm text-zinc-500">
            No tasks found for this filter.
          </p>
        </div>
      )}

      {/* Description Scrollbar */}
      <style>
        {`
          .task-description-scroll {
            scrollbar-width: thin;
            scrollbar-color: #52525b transparent;
          }

          .task-description-scroll::-webkit-scrollbar {
            width: 4px;
          }

          .task-description-scroll::-webkit-scrollbar-track {
            background: transparent;
          }

          .task-description-scroll::-webkit-scrollbar-thumb {
            background: #52525b;
            border-radius: 9999px;
          }

          .task-description-scroll::-webkit-scrollbar-thumb:hover {
            background: #71717a;
          }
        `}
      </style>
    </section>
  );
};

export default TaskList;
