const Loading = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-zinc-950 text-zinc-100">
      {/* Background Ambient Glow */}
      <div className="absolute h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Main Loader Container */}
      <div className="relative flex flex-col items-center space-y-8">
        {/* Ring & Pulse Container */}
        <div className="relative flex items-center justify-center">
          {/* Subtle Outer Pulsing Halo */}
          <div className="absolute h-32 w-32 animate-ping rounded-full bg-emerald-500/10 duration-1000" />

          {/* Background Outer Ring */}
          <div className="h-28 w-28 rounded-full border-4 border-zinc-800/80" />

          {/* Active Gradient Spinner */}
          <div className="absolute h-28 w-28 animate-spin rounded-full border-4 border-transparent border-t-emerald-500 border-r-emerald-400" />

          {/* Center Glowing Core */}
          <div className="absolute h-8 w-8 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.7)] animate-pulse" />
        </div>

        {/* Dynamic Text Section */}
        <div className="flex flex-col items-center space-y-2 text-center">
          <h2 className="text-xl font-medium tracking-wider text-zinc-200">
            Loading System
          </h2>

          {/* Skeleton/Progress Dots */}
          <div className="flex space-x-1.5">
            <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-500 [animation-delay:-0.3s]" />
            <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-500 [animation-delay:-0.15s]" />
            <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
