import TaskDetailsHeader from "./TaskDetailsHeader";
import TaskInfo from "./TaskInfo";
import TaskActions from "./TaskActions";
import TaskComments from "./TaskComments";

const TaskDetails = ({
  task,
  onBack,
  onTaskStatus,
  onAddComment,
  onDeleteComment,
  userType = "employee",
}) => {
  const isAdmin = userType === "admin";

  return (
    <section className="mt-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="group mb-6 inline-flex cursor-pointer items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm font-medium text-zinc-300 shadow-sm transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-800 hover:text-zinc-100 active:scale-[0.98]"
      >
        <span className="text-base transition-transform duration-200 group-hover:-translate-x-1">
          ←
        </span>

        <span>{isAdmin ? "Back to Admin Board" : "Back to Task List"}</span>
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
        <TaskDetailsHeader task={task} />

        <TaskInfo task={task} />

        {/* Only Employee can modify task */}
        {!isAdmin && <TaskActions task={task} onTaskStatus={onTaskStatus} />}

        <TaskComments
          task={task}
          onAddComment={onAddComment}
          onDeleteComment={onDeleteComment}
        />
      </div>
    </section>
  );
};

export default TaskDetails;
