import { useRef } from "react";

const TaskList = () => {
  const scrollRef = useRef(null);

  return (
    <div className="mt-8 flex flex-col">
      {/* Scrollable Container with Padding to prevent edge clipping */}
      <div
        ref={scrollRef}
        className="flex max-h-[500px] w-full flex-wrap gap-5 overflow-y-auto px-1 py-2 [scrollbar-width:thin] [scrollbar-color:#3f3f46_transparent]"
      >
        {/* Task Card Item */}
        <div className="flex h-[280px] w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] flex-shrink-0 flex-col justify-between rounded-2xl border border-amber-500/30 bg-gradient-to-b from-amber-500/10 via-zinc-900 to-zinc-900 p-6 shadow-xl transition-all duration-200 hover:-translate-y-1 hover:border-amber-500/50">
          <div>
            <div className="flex items-center justify-between">
              <span className="rounded-md border border-red-500/40 bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-400">
                High
              </span>
              <span className="text-xs font-medium text-amber-400/80">
                20 Feb 2026
              </span>
            </div>
            <h3 className="mt-5 text-xl font-bold text-zinc-100">
              Make a youtube Video
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 line-clamp-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              sit veniam dicta nam perspiciatis ipsum autem, ducimus
              voluptatibus eaque illum explicabo. Iusto mollitia velit itaque
              facilis ullam iste rem odit.
            </p>
          </div>
        </div>

        <div className="flex h-[280px] w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] flex-shrink-0 flex-col justify-between rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 via-zinc-900 to-zinc-900 p-6 shadow-xl transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500/50">
          <div>
            <div className="flex items-center justify-between">
              <span className="rounded-md border border-red-500/40 bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-400">
                High
              </span>
              <span className="text-xs font-medium text-emerald-400/80">
                20 Feb 2026
              </span>
            </div>
            <h3 className="mt-5 text-xl font-bold text-zinc-100">
              Make a youtube Video
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 line-clamp-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              sit veniam dicta nam perspiciatis ipsum autem, ducimus
              voluptatibus eaque illum explicabo. Iusto mollitia velit itaque
              facilis ullam iste rem odit.
            </p>
          </div>
        </div>

        <div className="flex h-[280px] w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] flex-shrink-0 flex-col justify-between rounded-2xl border border-red-500/30 bg-gradient-to-b from-red-500/10 via-zinc-900 to-zinc-900 p-6 shadow-xl transition-all duration-200 hover:-translate-y-1 hover:border-red-500/50">
          <div>
            <div className="flex items-center justify-between">
              <span className="rounded-md border border-red-500/40 bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-400">
                High
              </span>
              <span className="text-xs font-medium text-red-400/80">
                20 Feb 2026
              </span>
            </div>
            <h3 className="mt-5 text-xl font-bold text-zinc-100">
              Make a youtube Video
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 line-clamp-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              sit veniam dicta nam perspiciatis ipsum autem, ducimus
              voluptatibus eaque illum explicabo. Iusto mollitia velit itaque
              facilis ullam iste rem odit.
            </p>
          </div>
        </div>

        <div className="flex h-[280px] w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] flex-shrink-0 flex-col justify-between rounded-2xl border border-purple-500/30 bg-gradient-to-b from-purple-500/10 via-zinc-900 to-zinc-900 p-6 shadow-xl transition-all duration-200 hover:-translate-y-1 hover:border-purple-500/50">
          <div>
            <div className="flex items-center justify-between">
              <span className="rounded-md border border-red-500/40 bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-400">
                High
              </span>
              <span className="text-xs font-medium text-purple-400/80">
                20 Feb 2026
              </span>
            </div>
            <h3 className="mt-5 text-xl font-bold text-zinc-100">
              Make a youtube Video
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 line-clamp-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              sit veniam dicta nam perspiciatis ipsum autem, ducimus
              voluptatibus eaque illum explicabo. Iusto mollitia velit itaque
              facilis ullam iste rem odit.
            </p>
          </div>
        </div>

        <div className="flex h-[280px] w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] flex-shrink-0 flex-col justify-between rounded-2xl border border-amber-500/30 bg-gradient-to-b from-amber-500/10 via-zinc-900 to-zinc-900 p-6 shadow-xl transition-all duration-200 hover:-translate-y-1 hover:border-amber-500/50">
          <div>
            <div className="flex items-center justify-between">
              <span className="rounded-md border border-red-500/40 bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-400">
                High
              </span>
              <span className="text-xs font-medium text-amber-400/80">
                20 Feb 2026
              </span>
            </div>
            <h3 className="mt-5 text-xl font-bold text-zinc-100">
              Make a youtube Video
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 line-clamp-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              sit veniam dicta nam perspiciatis ipsum autem, ducimus
              voluptatibus eaque illum explicabo. Iusto mollitia velit itaque
              facilis ullam iste rem odit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
