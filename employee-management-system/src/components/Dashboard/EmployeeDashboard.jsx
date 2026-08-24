import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ loggedInUserData }) => {
  console.log(loggedInUserData);
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-360 px-6 py-4">
        <TaskListNumbers loggedInUserData={loggedInUserData} />
        <TaskList loggedInUserData={loggedInUserData} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
