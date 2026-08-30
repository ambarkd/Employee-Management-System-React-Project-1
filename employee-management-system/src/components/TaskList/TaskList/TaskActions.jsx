const TaskActions = ({ task, onTaskDetails, onTaskStatus }) => {
  return (
    <div className="mt-6 border-t border-zinc-800/80 pt-4">
      <div className="flex gap-2">
        {/* Failed */}
        <button
          onClick={() => onTaskStatus(task.id, "failed")}
          className="flex-1 cursor-pointer rounded-lg border border-red-500/30 bg-red-500/10 px-1 py-2 text-[11px] font-medium text-red-400 transition hover:bg-red-500 hover:text-white sm:text-xs"
        >
          Failed
        </button>

        {/* Complete */}
        <button
          onClick={() => onTaskStatus(task.id, "completed")}
          className="flex-1 cursor-pointer rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-1 py-2 text-[11px] font-medium text-emerald-400 transition hover:bg-emerald-500 hover:text-white sm:text-xs"
        >
          Complete
        </button>

        {/* Details */}
        <button
          onClick={() => onTaskDetails(task)}
          className="flex-1 cursor-pointer rounded-lg border border-sky-500/30 bg-sky-500/10 px-1 py-2 text-[11px] font-medium text-sky-400 transition hover:bg-sky-500 hover:text-white sm:text-xs"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default TaskActions;
