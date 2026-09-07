import { useState } from "react";
import { toast } from "sonner";

const CreateTask = () => {
  const [formData, setFormData] = useState({
    taskTitle: "",
    taskDescription: "",
    taskDate: "",
    employeeId: "",
    category: "",
    priority: "Medium",
  });

  const employees = JSON.parse(localStorage.getItem("employees")) || [];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      taskTitle,
      taskDescription,
      taskDate,
      employeeId,
      category,
      priority,
    } = formData;

    // Basic validation
    if (
      !taskTitle ||
      !taskDescription ||
      !taskDate ||
      !employeeId ||
      !category ||
      !priority
    ) {
      return;
    }

    const selectedEmployee = employees.find(
      (employee) => employee.id === Number(employeeId),
    );

    if (!selectedEmployee) {
      return;
    }

    // Generate task ID
    const allTasks = employees.flatMap((employee) => employee.tasks || []);

    const newTaskId =
      allTasks.length > 0
        ? Math.max(...allTasks.map((task) => task.id)) + 1
        : 1;

    const newTask = {
      id: newTaskId,

      active: false,
      newTask: true,
      completed: false,
      failed: false,

      taskTitle,
      taskDescription,
      taskDate,
      category,
      priority,
    };

    // Add task to selected employee
    const updatedEmployees = employees.map((employee) => {
      if (employee.id !== selectedEmployee.id) {
        return employee;
      }

      const updatedTasks = [...(employee.tasks || []), newTask];

      return {
        ...employee,

        tasks: updatedTasks,

        taskCounts: {
          active: updatedTasks.filter((task) => task.active).length,
          newTask: updatedTasks.filter((task) => task.newTask).length,
          completed: updatedTasks.filter((task) => task.completed).length,
          failed: updatedTasks.filter((task) => task.failed).length,
        },
      };
    });

    // Save to localStorage
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    // Show success toast
    toast.success("Task created successfully");

    // Reload after 5 seconds
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
      <h2 className="mb-6 text-xl font-semibold text-zinc-100">
        Create New Task
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 lg:grid-cols-2"
      >
        {/* Left Column */}
        <div className="space-y-5">
          {/* Task Title */}
          <div>
            <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
              Task Title
            </h3>

            <input
              type="text"
              name="taskTitle"
              value={formData.taskTitle}
              onChange={handleChange}
              required
              placeholder="Make a UI Design"
              className="w-full rounded-xl border border-zinc-700/80 bg-zinc-800/50 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition duration-200 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400"
            />
          </div>

          {/* Date */}
          <div>
            <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
              Date
            </h3>

            <input
              type="date"
              name="taskDate"
              required
              value={formData.taskDate}
              onChange={handleChange}
              className="scheme-dark w-full rounded-xl border border-zinc-700/80 bg-zinc-800/50 px-4 py-3 text-sm text-zinc-100 outline-none transition duration-200 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400"
            />
          </div>

          {/* Assign To */}
          <div>
            <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
              Assign to
            </h3>

            <select
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-zinc-700/80 bg-zinc-800/50 px-4 py-3 text-sm text-zinc-100 outline-none transition duration-200 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400"
            >
              <option value="">Select Employee</option>

              {employees.map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employee.name}
                </option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div>
            <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
              Category
            </h3>

            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              placeholder="Design, Development, Testing..."
              className="w-full rounded-xl border border-zinc-700/80 bg-zinc-800/50 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition duration-200 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400"
            />
          </div>

          {/* Priority */}
          <div>
            <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
              Priority
            </h3>

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-zinc-700/80 bg-zinc-800/50 px-4 py-3 text-sm text-zinc-100 outline-none transition duration-200 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between space-y-5">
          {/* Description */}
          <div className="flex flex-1 flex-col">
            <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
              Description
            </h3>

            <textarea
              name="taskDescription"
              value={formData.taskDescription}
              onChange={handleChange}
              required
              placeholder="Provide detailed instructions..."
              className="min-h-45 w-full flex-1 resize-none rounded-xl border border-zinc-700/80 bg-zinc-800/50 p-4 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition duration-200 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400"
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full cursor-pointer rounded-xl bg-emerald-600 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-emerald-500 active:scale-[0.98]"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
