const EmployeeAdded = () => {
  return (
    <div className="mt-8 flex min-h-70 items-center justify-center rounded-2xl border border-emerald-500/20 bg-zinc-900 p-8 shadow-2xl">
      <div className="text-center">
        {/* Success Icon */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10">
          <span className="text-2xl font-bold text-emerald-400">✓</span>
        </div>

        {/* Message */}
        <h2 className="mt-5 text-xl font-semibold text-zinc-100">
          Employee Added Successfully
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          The new employee has been added to the team.
        </p>

        {/* Small Loading Message */}
        <p className="mt-5 text-xs text-zinc-600">Updating dashboard...</p>
      </div>
    </div>
  );
};

export default EmployeeAdded;
