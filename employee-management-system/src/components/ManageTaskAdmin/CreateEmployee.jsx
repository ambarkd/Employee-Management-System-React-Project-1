const CreateEmployee = ({ loggedInUserData }) => {
  return (
    <div>
      {" "}
      <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
        <h2 className="mb-6 text-xl font-semibold text-zinc-100">
          Create New Task
        </h2>

        <form className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left Column: Form Controls */}
          <div className="space-y-5">
            <div>
              <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
                Task Title
              </h3>
              <input
                type="text"
                placeholder="Make a UI Design"
                className="w-full rounded-xl border border-zinc-700/80 bg-zinc-800/50 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition duration-200 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400"
              />
            </div>

            <div>
              <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
                Date
              </h3>
              <input
                type="date"
                className="w-full rounded-xl border border-zinc-700/80 bg-zinc-800/50 px-4 py-3 text-sm text-zinc-100 outline-none transition duration-200 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 scheme-dark"
              />
            </div>

            <div>
              <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
                Assign to
              </h3>
              <input
                type="text"
                placeholder="Employee name"
                className="w-full rounded-xl border border-zinc-700/80 bg-zinc-800/50 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition duration-200 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400"
              />
            </div>

            <div>
              <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
                Category
              </h3>
              <input
                type="text"
                placeholder="design, dev, etc"
                className="w-full rounded-xl border border-zinc-700/80 bg-zinc-800/50 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition duration-200 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400"
              />
            </div>
          </div>

          {/* Right Column: Description & Submit */}
          <div className="flex flex-col justify-between space-y-5">
            <div className="flex flex-1 flex-col">
              <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
                Description
              </h3>
              <textarea
                placeholder="Provide detailed instructions..."
                className="w-full flex-1 min-h-45 resize-none rounded-xl border border-zinc-700/80 bg-zinc-800/50 p-4 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition duration-200 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full rounded-xl bg-emerald-600 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-emerald-500 active:scale-[0.98]"
              >
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployee;
