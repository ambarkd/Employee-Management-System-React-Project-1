const TaskList = ({ loggedInUserData }) => {
  const getTaskStyles = (task) => {
    if (task.failed) {
      return {
        border: "border-red-500/30",
        background: "from-red-500/10",
        hover: "hover:border-red-500/50",
        date: "text-red-400/80",
      };
    }

    if (task.completed) {
      return {
        border: "border-emerald-500/30",
        background: "from-emerald-500/10",
        hover: "hover:border-emerald-500/50",
        date: "text-emerald-400/80",
      };
    }

    if (task.newTask) {
      return {
        border: "border-purple-500/30",
        background: "from-purple-500/10",
        hover: "hover:border-purple-500/50",
        date: "text-purple-400/80",
      };
    }

    return {
      border: "border-amber-500/30",
      background: "from-amber-500/10",
      hover: "hover:border-amber-500/50",
      date: "text-amber-400/80",
    };
  };

  const getStatusLabel = (task) => {
    if (task.failed) return "Failed";
    if (task.completed) return "Completed";
    if (task.newTask) return "New Task";
    if (task.active) return "Active";

    return "Task";
  };

  return (
    <div className="mt-8 flex flex-col">
      <div className="flex max-h-125 w-full flex-wrap gap-5 overflow-y-auto px-1 py-2 scrollbar-thin [scrollbar-color:#3f3f46_transparent]">
        {loggedInUserData.tasks.map((task, index) => {
          const styles = getTaskStyles(task);

          return (
            <div
              key={index}
              className={`flex h-70 w-full shrink-0 flex-col justify-between rounded-2xl border bg-linear-to-b via-zinc-900 to-zinc-900 p-6 shadow-xl transition-all duration-200 hover:-translate-y-1 sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] ${styles.border} ${styles.background} ${styles.hover}`}
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`rounded-md border px-3 py-1 text-xs font-semibold ${
                      task.failed
                        ? "border-red-500/40 bg-red-500/20 text-red-400"
                        : task.completed
                          ? "border-emerald-500/40 bg-emerald-500/20 text-emerald-400"
                          : task.newTask
                            ? "border-purple-500/40 bg-purple-500/20 text-purple-400"
                            : "border-amber-500/40 bg-amber-500/20 text-amber-400"
                    }`}
                  >
                    {task.category}
                  </span>

                  <span className={`text-xs font-medium ${styles.date}`}>
                    {task.taskDate}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-zinc-100">
                  {task.taskTitle}
                </h3>

                <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-zinc-400">
                  {task.taskDescription}
                </p>
              </div>

              {/* Buttons only for active/new tasks */}
              {(task.active || task.newTask) && (
                <div className="mt-5 flex gap-3">
                  <button className="flex-1 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500 hover:text-white">
                    Failed
                  </button>

                  <button className="flex-1 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 transition hover:bg-emerald-500 hover:text-white">
                    Completed
                  </button>
                </div>
              )}

              {/* Status for completed/failed tasks */}
              {task.completed && (
                <div className="mt-5 text-sm font-medium text-emerald-400">
                  ✓ Task Completed
                </div>
              )}

              {task.failed && (
                <div className="mt-5 text-sm font-medium text-red-400">
                  ✕ Task Failed
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
