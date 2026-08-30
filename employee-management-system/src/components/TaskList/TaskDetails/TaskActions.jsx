const TaskActions = ({ task, onTaskStatus }) => {
  if (!task.active && !task.newTask) {
    return null;
  }

  return (
    <div className="mt-8 border-t border-zinc-800 px-6 pt-6 sm:px-8">
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
        Task Actions
      </p>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        {/* Get Started - New Task Only */}
        {task.newTask && (
          <button
            onClick={() => onTaskStatus(task.id, "active")}
            className="flex-1 cursor-pointer rounded-lg border border-purple-500/30 bg-purple-500/10 px-3 py-2.5 text-xs font-medium text-purple-400 transition hover:bg-purple-500 hover:text-white"
          >
            Get Started →
          </button>
        )}

        {/* Mark Failed */}
        <button
          onClick={() => onTaskStatus(task.id, "failed")}
          className="flex-1 cursor-pointer rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2.5 text-xs font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          Mark Failed
        </button>

        {/* Mark Completed */}
        <button
          onClick={() => onTaskStatus(task.id, "completed")}
          className="flex-1 cursor-pointer rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2.5 text-xs font-medium text-emerald-400 transition hover:bg-emerald-500 hover:text-white"
        >
          Mark Completed
        </button>
      </div>
    </div>
  );
};

export default TaskActions;
