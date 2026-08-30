import TaskCard from "./TaskCard";

const TaskList = ({
  loggedInUserData,
  onTaskDetails,
  taskFilter,
  onTaskStatus,
}) => {
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
        {filteredTasks?.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onTaskDetails={onTaskDetails}
            onTaskStatus={onTaskStatus}
          />
        ))}
      </div>

      {/* No Tasks */}
      {filteredTasks?.length === 0 && (
        <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/40 p-10 text-center">
          <p className="text-sm text-zinc-500">
            No tasks found for this filter.
          </p>
        </div>
      )}
    </section>
  );
};

export default TaskList;
