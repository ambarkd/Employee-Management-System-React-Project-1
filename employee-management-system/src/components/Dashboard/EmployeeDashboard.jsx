import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import TaskListNumbers from "../TaskList/TaskListNumbers";
import TaskList from "../TaskList/TaskList/TaskList";
import TaskDetails from "../TaskList/TaskDetails/TaskDetails";

const EmployeeDashboard = ({
  loggedInUserData,
  onTaskStatus,
  onAddComment,
  onDeleteComment,
}) => {
  const { username } = useParams();

  // Store only the selected task ID
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  // null means show all tasks
  const [taskFilter, setTaskFilter] = useState(null);

  const handleTaskDetails = (task) => {
    setSelectedTaskId(task.id);
  };

  const handleBackToTasks = () => {
    setSelectedTaskId(null);
  };

  // Find the latest version of the selected task
  const selectedTask = loggedInUserData?.tasks?.find(
    (task) => task.id === selectedTaskId,
  );

  // Handle task status change from Task Details
  const handleTaskStatus = (taskId, status) => {
    onTaskStatus(taskId, status);

    setSelectedTaskId(null);
    setTaskFilter(null);
  };

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-360 px-6 py-4">
        {/* Dashboard Header */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-amber-400">
              Employee Dashboard
            </p>
          </div>

          {/* Back to Profile */}
          <Link
            to={`/${username}`}
            className="group inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-amber-500/50 hover:bg-zinc-800 hover:text-amber-400"
          >
            <span className="text-base transition-transform group-hover:-translate-x-1">
              ←
            </span>

            <span>Back to Profile</span>
          </Link>
        </div>

        {selectedTask ? (
          <TaskDetails
            task={selectedTask}
            onBack={handleBackToTasks}
            onTaskStatus={handleTaskStatus}
            onAddComment={onAddComment}
            onDeleteComment={onDeleteComment}
          />
        ) : (
          <>
            <TaskListNumbers
              loggedInUserData={loggedInUserData}
              taskFilter={taskFilter}
              setTaskFilter={setTaskFilter}
            />

            <TaskList
              loggedInUserData={loggedInUserData}
              onTaskDetails={handleTaskDetails}
              taskFilter={taskFilter}
              onTaskStatus={onTaskStatus}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
