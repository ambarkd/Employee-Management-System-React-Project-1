const FooterAppInfo = () => {
  const employees = [
    {
      name: "Pallavi",
      email: "pallavi@gmail.com",
      password: "123",
    },
    {
      name: "Priya",
      email: "priya@gmail.com",
      password: "123",
    },
    {
      name: "Arjun",
      email: "arjun@gmail.com",
      password: "123",
    },
    {
      name: "Sourav",
      username: "souravsen",
      email: "sourav.sen@gmail.com",
      password: "123",
    },
  ];

  const admin = {
    username: "ambaradmin",
    email: "ambaradmin@gmail.com",
    password: "123",
  };

  return (
    <footer className="absolute bottom-0 left-0 w-full border-t border-zinc-700 bg-zinc-900/95 px-5 py-5 backdrop-blur-md sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Important Notice */}
        <div className="mb-5 text-center">
          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="text-base">🔑</span>

            <h3 className="text-base font-bold text-zinc-100">
              Demo Login Credentials
            </h3>
          </div>

          <p className="text-sm text-zinc-400">
            This demo includes{" "}
            <span className="font-semibold text-zinc-200">4 Employees</span> and{" "}
            <span className="font-semibold text-purple-400">1 Admin</span>.
          </p>

          <p className="mx-auto mt-2 max-w-3xl text-sm leading-6 text-zinc-400">
            <span className="font-semibold text-purple-400">Admin</span> can add
            employees and create tasks, while{" "}
            <span className="font-semibold text-emerald-400">Employees</span>{" "}
            can manage their assigned tasks, update task status and add
            comments.
          </p>
        </div>

        {/* Credentials */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {employees.map((employee) => (
            <div
              key={employee.email}
              className="rounded-xl border border-zinc-700 bg-zinc-800/80 px-4 py-3"
            >
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-semibold text-zinc-200">
                  {employee.name}
                </p>

                <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-[11px] font-medium text-emerald-400">
                  Employee
                </span>
              </div>

              <p className="truncate text-xs text-zinc-400">{employee.email}</p>

              <p className="mt-1 text-xs text-zinc-400">
                Password:{" "}
                <span className="font-medium text-zinc-200">
                  {employee.password}
                </span>
              </p>
            </div>
          ))}

          {/* Admin */}
          <div className="rounded-xl border border-purple-500/30 bg-purple-500/10 px-4 py-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold text-purple-300">Admin</p>

              <span className="rounded-md bg-purple-500/20 px-2 py-1 text-[11px] font-medium text-purple-300">
                Admin
              </span>
            </div>

            <p className="truncate text-xs text-zinc-400">{admin.email}</p>

            <p className="mt-1 text-xs text-zinc-400">
              Password:{" "}
              <span className="font-medium text-zinc-200">
                {admin.password}
              </span>
            </p>
          </div>
        </div>

        {/* Usernames */}
        <div className="mt-4 text-center text-xs text-zinc-500">
          Employee username:{" "}
          <span className="font-medium text-zinc-300">souravsen</span>
          <span className="mx-2 text-zinc-700">•</span>
          Admin username:{" "}
          <span className="font-medium text-zinc-300">ambaradmin</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterAppInfo;
