import { useState } from "react";
import TaskListNumbers from "../TaskList/TaskListNumbers";
import TaskList from "../TaskList/TaskList/TaskList";
import TaskDetails from "../TaskList/TaskDetails/TaskDetails";

const EmployeeDashboard = ({
  loggedInUserData,
  onTaskStatus,
  onAddComment,
  onDeleteComment,
}) => {
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
