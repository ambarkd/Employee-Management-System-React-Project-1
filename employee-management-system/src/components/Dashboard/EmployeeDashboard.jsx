import { useState } from "react";
import TaskListNumbers from "../TaskList/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
import TaskDetails from "../TaskList/TaskDetails";

const EmployeeDashboard = ({ loggedInUserData }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskDetails = (task) => {
    setSelectedTask(task);
  };

  const handleBackToTasks = () => {
    setSelectedTask(null);
  };

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-360 px-6 py-4">
        {selectedTask ? (
          <TaskDetails task={selectedTask} onBack={handleBackToTasks} />
        ) : (
          <>
            <TaskListNumbers loggedInUserData={loggedInUserData} />

            <TaskList
              loggedInUserData={loggedInUserData}
              onTaskDetails={handleTaskDetails}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
