import { useState } from "react";
import { toast } from "sonner";

const CreateEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    designation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, username, email, password, designation } = formData;

    // Basic validation
    if (!name || !username || !email || !password || !designation) {
      return;
    }

    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    // Generate new employee ID
    const newId =
      employees.length > 0
        ? Math.max(...employees.map((employee) => employee.id)) + 1
        : 1;

    const newEmployee = {
      id: newId,
      name,
      username,
      email,
      password,
      role: "employee",
      designation,

      taskCounts: {
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 0,
      },

      tasks: [],
    };

    // Add employee to existing employees
    const updatedEmployees = [...employees, newEmployee];

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    // Show success toast
    toast.success("Employee added successfully");

    // Reload after 5 seconds
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
      <h2 className="mb-6 text-xl font-semibold text-zinc-100">
        Create New Employee
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 lg:grid-cols-2"
      >
        {/* Name */}
        <div>
          <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
            Name
          </h3>

          <input
            type="text"
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Arjun Roy"
            className="w-full rounded-xl border border-zinc-700/80 bg-zinc-800/50 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition duration-200 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400"
          />
        </div>

        {/* Username */}
        <div>
          <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
            Username
          </h3>

          <input
            type="text"
            name="username"
            required
            value={formData.username}
            onChange={handleChange}
            placeholder="arjunroy"
            className="w-full rounded-xl border border-zinc-700/80 bg-zinc-800/50 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition duration-200 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400"
          />
        </div>

        {/* Email */}
        <div>
          <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
            Email
          </h3>

          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="arjun@gmail.com"
            className="w-full rounded-xl border border-zinc-700/80 bg-zinc-800/50 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition duration-200 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400"
          />
        </div>

        {/* Password */}
        <div>
          <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
            Password
          </h3>

          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            placeholder="123"
            className="w-full rounded-xl border border-zinc-700/80 bg-zinc-800/50 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition duration-200 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400"
          />
        </div>

        {/* Designation */}
        <div className="lg:col-span-2">
          <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
            Designation
          </h3>

          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
            placeholder="Frontend Developer"
            className="w-full rounded-xl border border-zinc-700/80 bg-zinc-800/50 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition duration-200 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400"
          />
        </div>

        {/* Submit */}
        <div className="lg:col-span-2">
          <button
            type="submit"
            className="w-full cursor-pointer rounded-xl bg-emerald-600 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-emerald-500 active:scale-[0.98]"
          >
            Create Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEmployee;
