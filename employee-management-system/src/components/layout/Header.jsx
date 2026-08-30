import { resetLocalStorage } from "../../utils/LocalStorage";

const Header = ({ loggedInUserData }) => {
  if (!loggedInUserData) return;

  const firstName = loggedInUserData.name.split(" ")[0];

  // Logout only
  // Keep all changes made to tasks/comments
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");

    // Reload the application
    window.location.reload();
  };

  // Reset all employee/admin data
  // Then logout
  const handleReset = () => {
    resetLocalStorage();

    localStorage.removeItem("loggedInUser");

    // Reload the application
    window.location.reload();
  };

  return (
    <header className="border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex min-h-20 max-w-360 items-center justify-between px-6 py-4">
        {/* Greeting */}
        {loggedInUserData.role === "employee" ? (
          <h2 className="text-sm font-normal text-zinc-400">
            Hello
            <span className="text-2xl font-semibold tracking-tight text-zinc-100 pl-3">
              {firstName} 👋🏻
            </span>
          </h2>
        ) : (
          <h2 className="text-sm font-normal text-zinc-400">
            Welcome back
            <span className="text-2xl font-semibold tracking-tight text-zinc-100 pl-3">
              {firstName} 👨🏻‍💼
            </span>
          </h2>
        )}

        {/* Title */}
        <h1 className="hidden cursor-default bg-linear-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-xl font-extrabold tracking-tight text-transparent transition duration-300 hover:from-purple-400 hover:via-cyan-400 hover:to-emerald-400 sm:block">
          Employee Management System
        </h1>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Reset Data */}
          <button
            onClick={handleReset}
            className="cursor-pointer rounded-lg border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400 transition duration-200 hover:border-amber-500/40 hover:bg-amber-500 hover:text-white active:scale-[0.98]"
          >
            Reset Data
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="cursor-pointer rounded-lg border border-red-500/20 bg-red-600/10 px-4 py-2 text-sm font-medium text-red-500 transition duration-200 hover:bg-red-600 hover:text-white active:scale-[0.98]"
          >
            Log Out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
