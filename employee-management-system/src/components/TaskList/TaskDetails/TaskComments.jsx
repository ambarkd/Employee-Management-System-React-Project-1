import { useState } from "react";

const TaskComments = ({ task, onAddComment, onDeleteComment }) => {
  const [showForm, setShowForm] = useState(false);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedComment = comment.trim();

    if (!trimmedComment) return;

    onAddComment(task.id, trimmedComment);

    setComment("");
    setShowForm(false);
  };

  const handleCancel = () => {
    setComment("");
    setShowForm(false);
  };

  return (
    <div className="mt-8 border-t border-zinc-800 px-6 pb-6 pt-6 sm:px-8">
      {/* Notes Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Task Notes
          </p>

          <p className="mt-1 text-xs text-zinc-600">
            Notes and updates related to this task.
          </p>
        </div>

        <button
          onClick={() => setShowForm((prev) => !prev)}
          className="shrink-0 cursor-pointer text-xs font-medium text-purple-400 transition hover:text-purple-300"
        >
          {showForm ? "Cancel" : "+ Add Comment"}
        </button>
      </div>

      {/* Add Comment Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mt-4 rounded-xl border border-purple-500/20 bg-purple-500/5 p-4"
        >
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment or update..."
            rows="3"
            className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-950/70 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 outline-none transition focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30"
          />

          <div className="mt-3 flex justify-end gap-2">
            <button
              type="button"
              onClick={handleCancel}
              className="cursor-pointer rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-400 transition hover:bg-zinc-800 hover:text-zinc-200"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={!comment.trim()}
              className="cursor-pointer rounded-lg border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-medium text-purple-400 transition hover:bg-purple-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              Add Comment
            </button>
          </div>
        </form>
      )}

      {/* Comments */}
      <div className="mt-4 space-y-3">
        {task.comments && task.comments.length > 0 ? (
          task.comments.map((comment, index) => (
            <div
              key={index}
              className="flex items-start justify-between gap-4 rounded-xl border border-zinc-700/80 bg-zinc-800/60 p-4 shadow-sm"
            >
              <div className="min-w-0">
                <p className="text-sm leading-relaxed text-zinc-300">
                  {comment}
                </p>
              </div>

              {/* Delete Comment */}
              <button
                onClick={() => onDeleteComment(task.id, index)}
                className="shrink-0 cursor-pointer text-lg leading-none text-zinc-500 transition hover:text-red-400"
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
  );
};

export default TaskComments;
