import TaskActions from "./TaskActions";
import TaskStatus from "./TaskStatus";

const TaskCard = ({ task, onTaskDetails, onTaskStatus }) => {
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

  const styles = getTaskStyles(task);

  const showPriority = !task.completed && !task.failed;

  return (
    <div
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

      {/* Actions / Status */}
      {task.active || task.newTask ? (
        <TaskActions
          task={task}
          onTaskDetails={onTaskDetails}
          onTaskStatus={onTaskStatus}
        />
      ) : (
        <TaskStatus task={task} onTaskDetails={onTaskDetails} />
      )}
    </div>
  );
};

export default TaskCard;
