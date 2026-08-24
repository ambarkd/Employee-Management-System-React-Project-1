const Header = ({ loggedInUserData }) => {
  if (!loggedInUserData) return;
  return (
    <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-6 py-4">
      <h2 className="text-sm font-normal text-zinc-400">
        hello <br />
        <span className="text-2xl font-semibold text-zinc-100">
          {loggedInUserData.name.split(" ")[0]} 👋🏻
        </span>
      </h2>
      <button className="rounded-lg bg-red-600/10 px-4 py-2 text-sm font-medium text-red-500 border border-red-500/20 transition duration-200 hover:bg-red-600 hover:text-white active:scale-[0.98]">
        Log Out
      </button>
    </div>
  );
};

export default Header;
