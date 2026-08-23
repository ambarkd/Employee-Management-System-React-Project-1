const AllTask = () => {
  return (
    <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">
      <h2 className="mb-4 text-xl font-semibold text-zinc-100">All Tasks</h2>

      {/* Header Row */}
      <div className="mb-3 flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/60 px-6 py-3 text-xs font-medium uppercase tracking-wider text-zinc-400">
        <h2 className="w-1/4">Employee</h2>
        <h3 className="w-1/2">Task Title</h3>
        <h5 className="w-1/4 text-right">Status</h5>
      </div>

      {/* Scrollable Task Items */}
      <div className="flex max-h-52 flex-col space-y-2.5 overflow-y-auto pr-1 [scrollbar-width:thin] [scrollbar-color:#3f3f46_transparent]">
        <div className="flex items-center justify-between rounded-xl border border-zinc-800/80 bg-zinc-800/40 px-6 py-3.5 transition duration-200 hover:border-zinc-700 hover:bg-zinc-800">
          <h2 className="w-1/4 text-sm font-medium text-zinc-200">Ambar</h2>
          <h3 className="w-1/2 text-sm text-zinc-300">Make a UI design</h3>
          <div className="w-1/4 text-right">
            <span className="inline-block rounded-md border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
              In Progress
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-zinc-800/80 bg-zinc-800/40 px-6 py-3.5 transition duration-200 hover:border-zinc-700 hover:bg-zinc-800">
          <h2 className="w-1/4 text-sm font-medium text-zinc-200">Ambar</h2>
          <h3 className="w-1/2 text-sm text-zinc-300">Make a UI design</h3>
          <div className="w-1/4 text-right">
            <span className="inline-block rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
              Completed
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-zinc-800/80 bg-zinc-800/40 px-6 py-3.5 transition duration-200 hover:border-zinc-700 hover:bg-zinc-800">
          <h2 className="w-1/4 text-sm font-medium text-zinc-200">Ambar</h2>
          <h3 className="w-1/2 text-sm text-zinc-300">Make a UI design</h3>
          <div className="w-1/4 text-right">
            <span className="inline-block rounded-md border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
              New Task
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-zinc-800/80 bg-zinc-800/40 px-6 py-3.5 transition duration-200 hover:border-zinc-700 hover:bg-zinc-800">
          <h2 className="w-1/4 text-sm font-medium text-zinc-200">Ambar</h2>
          <h3 className="w-1/2 text-sm text-zinc-300">Make a UI design</h3>
          <div className="w-1/4 text-right">
            <span className="inline-block rounded-md border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400">
              Failed
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-zinc-800/80 bg-zinc-800/40 px-6 py-3.5 transition duration-200 hover:border-zinc-700 hover:bg-zinc-800">
          <h2 className="w-1/4 text-sm font-medium text-zinc-200">Ambar</h2>
          <h3 className="w-1/2 text-sm text-zinc-300">Make a UI design</h3>
          <div className="w-1/4 text-right">
            <span className="inline-block rounded-md border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
              In Progress
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
