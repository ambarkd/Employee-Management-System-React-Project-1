import { useState, useEffect } from "react";
import TaskDetails from "../TaskList/TaskDetails/TaskDetails";

const AllTask = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [openEmployee, setOpenEmployee] = useState(null);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];

    setEmployees(storedEmployees);
  }, []);

  const getTaskStatus = (task) => {
    if (task.completed) return "completed";
    if (task.failed) return "failed";
    if (task.newTask) return "newTask";

    return "active";
  };

  const statusConfig = {
    active: {
      label: "Active",
      border: "border-amber-500/30",
      background: "bg-amber-500/5",
      badge: "border-amber-500/30 bg-amber-500/10 text-amber-400",
      dot: "bg-amber-400",
    },

    newTask: {
      label: "New Task",
      border: "border-purple-500/30",
      background: "bg-purple-500/5",
      badge: "border-purple-500/30 bg-purple-500/10 text-purple-400",
      dot: "bg-purple-400",
    },

    completed: {
      label: "Completed",
      border: "border-emerald-500/30",
      background: "bg-emerald-500/5",
      badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
      dot: "bg-emerald-400",
    },

    failed: {
      label: "Failed",
      border: "border-red-500/30",
      background: "bg-red-500/5",
      badge: "border-red-500/30 bg-red-500/10 text-red-400",
      dot: "bg-red-400",
    },
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

  // Open Task Details
  if (selectedTask) {
    return (
      <TaskDetails
        task={selectedTask}
        onBack={() => setSelectedTask(null)}
        userType="admin"
      />
    );
  }

  // Open / Close Employee
  const handleEmployeeToggle = (employeeId) => {
    setOpenEmployee((prev) => (prev === employeeId ? null : employeeId));
  };

  return (
    <section className="mt-8">
      {/* Section Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
          Team Tasks
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Monitor tasks assigned to each team member.
        </p>
      </div>

      {/* Employees */}
      <div className="space-y-3">
        {employees.map((employee, i) => {
          const tasks = employee.tasks || [];
          const isOpen = openEmployee === employee.id;

          return (
            <div
              key={employee.id}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "border-zinc-700 bg-zinc-900/80 shadow-xl"
                  : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
              }`}
            >
              {/* Employee Accordion Header */}
              <button
                onClick={() => handleEmployeeToggle(employee.id)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-zinc-800/40"
              >
                {/* Employee Information */}
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    {/* Name */}
                    <h3 className="truncate text-base font-semibold text-zinc-100 sm:text-lg">
                      {i + 1}. {employee.name}
                    </h3>

                    {/* Designation */}
                    <span className="hidden rounded-md border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 text-xs font-semibold text-purple-400 sm:inline-block">
                      {employee.designation || "Team Member"}
                    </span>
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex shrink-0 items-center gap-4">
                  {/* Task Count */}
                  <span className="hidden text-xs text-zinc-500 sm:block">
                    {tasks.length} {tasks.length === 1 ? "Task" : "Tasks"}
                  </span>

                  {/* Arrow */}
                  <span
                    className={`text-lg text-zinc-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </div>
              </button>

              {/* Mobile Designation */}
              <div className="border-t border-zinc-800/70 px-6 py-2 sm:hidden">
                <span className="inline-block rounded-md border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 text-xs font-semibold text-purple-400">
                  {employee.designation || "Team Member"}
                </span>
              </div>

              {/* Accordion Content */}
              {isOpen && (
                <div className="border-t border-zinc-800 px-5 pb-5 pt-5">
                  {/* Status Columns */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {Object.entries(statusConfig).map(
                      ([statusType, config]) => {
                        const statusTasks = tasks.filter(
                          (task) => getTaskStatus(task) === statusType,
                        );

                        return (
                          <div
                            key={statusType}
                            className={`rounded-xl border ${config.border} ${config.background} p-4`}
                          >
                            {/* Status Header */}
                            <div className="mb-4 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`h-2 w-2 rounded-full ${config.dot}`}
                                />

                                <span className="text-xs font-semibold text-zinc-300">
                                  {config.label}
                                </span>
                              </div>

                              <span className="text-xs text-zinc-600">
                                {statusTasks.length}
                              </span>
                            </div>

                            {/* Tasks */}
                            <div className="max-h-72 space-y-3 overflow-y-auto pr-1 [scrollbar-width:thin] [scrollbar-color:#3f3f46_transparent]">
                              {statusTasks.length > 0 ? (
                                statusTasks.map((task) => (
                                  <div
                                    key={task.id}
                                    className="rounded-lg border border-zinc-800/80 bg-zinc-950/50 p-3 transition hover:border-zinc-700 hover:bg-zinc-950/80"
                                  >
                                    {/* Date */}
                                    <p className="text-[11px] text-zinc-600">
                                      {task.taskDate}
                                    </p>

                                    {/* Title */}
                                    <h4 className="mt-1 line-clamp-2 text-sm font-semibold text-zinc-200">
                                      {task.taskTitle}
                                    </h4>

                                    {/* Category */}
                                    <p className="mt-2 truncate text-xs text-zinc-500">
                                      {task.category}
                                    </p>

                                    {/* Priority */}
                                    {statusType !== "completed" &&
                                      statusType !== "failed" && (
                                        <span
                                          className={`mt-3 inline-block rounded-md border px-2 py-1 text-[10px] font-semibold ${getPriorityStyles(
                                            task.priority,
                                          )}`}
                                        >
                                          {task.priority} Priority
                                        </span>
                                      )}

                                    {/* View Task */}
                                    <button
                                      onClick={() => setSelectedTask(task)}
                                      className={`mt-3 w-full cursor-pointer rounded-md border px-2 py-1.5 text-[11px] font-medium transition ${config.badge} hover:brightness-125`}
                                    >
                                      View Task →
                                    </button>
                                  </div>
                                ))
                              ) : (
                                <div className="flex min-h-20 items-center justify-center rounded-lg border border-dashed border-zinc-800">
                                  <p className="text-xs text-zinc-600">
                                    No {config.label.toLowerCase()} tasks
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      },
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* No Employees */}
      {employees.length === 0 && (
        <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/40 p-10 text-center">
          <p className="text-sm text-zinc-500">No employees found.</p>
        </div>
      )}
    </section>
  );
};

export default AllTask;
