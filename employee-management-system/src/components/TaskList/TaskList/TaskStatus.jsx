const TaskStatus = ({ task, onTaskDetails }) => {
  return (
    <div className="mt-6 border-t border-zinc-800/80 pt-4">
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
  );
};

export default TaskStatus;
