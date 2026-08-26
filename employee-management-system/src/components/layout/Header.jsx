const Header = ({ loggedInUserData, setUser, setLoggedInUserData }) => {
  if (!loggedInUserData) return;

  console.log(loggedInUserData);

  const firstName = loggedInUserData.name.split(" ")[0];

  const handleLogout = () => {
    localStorage.clear();

    setUser(null);
    setLoggedInUserData(null);
  };

  return (
    <header className="border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex min-h-20 max-w-360 items-center justify-between px-6 py-4">
        {/* Greeting */}
        {loggedInUserData.role === "employee" ? (
          <h2 className="text-sm font-normal text-zinc-400">
            Hello
            <br />
            <span className="text-2xl font-semibold tracking-tight text-zinc-100">
              {firstName} 👋🏻
            </span>
          </h2>
        ) : (
          <h2 className="text-sm font-normal text-zinc-400">
            Welcome back
            <br />
            <span className="text-2xl font-semibold tracking-tight text-zinc-100">
              {firstName} 👨🏻‍💼
            </span>
          </h2>
        )}

        {/* Title */}
        <h1 className="hidden text-xl font-bold tracking-tight text-zinc-100 sm:block">
          Employee Management System
        </h1>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="cursor-pointer rounded-lg border border-red-500/20 bg-red-600/10 px-4 py-2 text-sm font-medium text-red-500 transition duration-200 hover:bg-red-600 hover:text-white active:scale-[0.98]"
        >
          Log Out
        </button>
      </div>
    </header>
  );
};

export default Header;
