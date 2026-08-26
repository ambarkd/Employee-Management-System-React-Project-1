const TaskDetails = ({ task, onBack }) => {
  const getStatus = () => {
    if (task.completed) {
      return {
        label: "Completed",
        icon: "✓",
        styles: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
        dot: "bg-emerald-400",
      };
    }

    if (task.failed) {
      return {
        label: "Failed",
        icon: "✕",
        styles: "border-red-500/30 bg-red-500/10 text-red-400",
        dot: "bg-red-400",
      };
    }

    if (task.newTask) {
      return {
        label: "New Task",
        icon: "•",
        styles: "border-purple-500/30 bg-purple-500/10 text-purple-400",
        dot: "bg-purple-400",
      };
    }

    return {
      label: "Active",
      icon: "•",
      styles: "border-amber-500/30 bg-amber-500/10 text-amber-400",
      dot: "bg-amber-400",
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
    <section className="mt-8">
      {/* Back to Task List */}
      <button
        onClick={onBack}
        className="group mb-6 flex cursor-pointer items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-zinc-100"
      >
        <span className="transition-transform duration-200 group-hover:-translate-x-1">
          ←
        </span>
        Back to Task List
      </button>

      {/* Header */}
      <div className="mb-6">
        <p className="text-sm font-medium text-purple-400">Task Details</p>

        <h2 className="mt-1 text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
          {task.taskTitle}
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          Review task information, status and notes.
        </p>
      </div>

      {/* Main Card */}
      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/90 shadow-2xl">
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

        {/* Task Information */}
        <div className="px-6 py-6 sm:px-8">
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

              <p className="mt-2 text-sm font-medium text-zinc-200">
                {task.priority}
              </p>
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

          {/* Task Actions */}
          {(task.active || task.newTask) && (
            <div className="mt-8 border-t border-zinc-800 pt-6">
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                Task Actions
              </p>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                {/* Get Started - New Task Only */}
                {task.newTask && (
                  <button className="flex-1 cursor-pointer rounded-lg border border-purple-500/30 bg-purple-500/10 px-3 py-2.5 text-xs font-medium text-purple-400 transition hover:bg-purple-500 hover:text-white">
                    Get Started →
                  </button>
                )}

                {/* Mark Failed */}
                <button className="flex-1 cursor-pointer rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2.5 text-xs font-medium text-red-400 transition hover:bg-red-500 hover:text-white">
                  Mark Failed
                </button>

                {/* Mark Completed */}
                <button className="flex-1 cursor-pointer rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2.5 text-xs font-medium text-emerald-400 transition hover:bg-emerald-500 hover:text-white">
                  Mark Completed
                </button>
              </div>
            </div>
          )}

          {/* Task Notes */}
          <div className="mt-8 border-t border-zinc-800 pt-6">
            {/* Notes Header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  Task Notes
                </p>

                <p className="mt-1 text-xs text-zinc-600">
                  Notes and updates related to this task.
                </p>
              </div>

              <button className="cursor-pointer text-xs font-medium text-purple-400 transition hover:text-purple-300">
                Add Comment
              </button>
            </div>

            {/* Comments */}
            <div className="mt-4 space-y-3">
              {task.comments && task.comments.length > 0 ? (
                task.comments.map((comment, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-950/40 p-4"
                  >
                    <p className="text-sm leading-relaxed text-zinc-400">
                      {comment}
                    </p>

                    {/* Delete Comment */}
                    <button
                      className="shrink-0 cursor-pointer text-lg leading-none text-zinc-600 transition hover:text-red-400"
                      aria-label="Delete comment"
                    >
                      ×
                    </button>
                  </div>
                ))
              ) : (
                <div className="rounded-xl border border-dashed border-zinc-700 bg-zinc-950/40 p-5">
                  <p className="text-sm leading-relaxed text-zinc-500">
                    No notes have been added for this task yet.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskDetails;
