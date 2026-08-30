const TaskDetailsHeader = ({ task }) => {
  const getStatus = () => {
    if (task.completed) {
      return {
        label: "Completed",
        icon: "✓",
        styles: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
      };
    }

    if (task.failed) {
      return {
        label: "Failed",
        icon: "✕",
        styles: "border-red-500/30 bg-red-500/10 text-red-400",
      };
    }

    if (task.newTask) {
      return {
        label: "New Task",
        icon: "•",
        styles: "border-purple-500/30 bg-purple-500/10 text-purple-400",
      };
    }

    return {
      label: "Active",
      icon: "•",
      styles: "border-amber-500/30 bg-amber-500/10 text-amber-400",
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

  const status = getStatus();

  return (
    <>
      {/* Card Header */}
      <div className="border-b border-zinc-800 bg-zinc-900/60 px-6 py-5 sm:px-8">
        <div className="flex flex-wrap items-center gap-3">
          {/* Status */}
          <span
            className={`rounded-md border px-3 py-1.5 text-xs font-semibold ${status.styles}`}
          >
            {status.icon} {status.label}
          </span>

          {/* Priority */}
          {!task.completed && !task.failed && (
            <span
              className={`rounded-md border px-3 py-1.5 text-xs font-semibold ${getPriorityStyles(
                task.priority,
              )}`}
            >
              {task.priority} Priority
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default TaskDetailsHeader;
