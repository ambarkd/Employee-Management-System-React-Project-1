import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-zinc-100">
      <div className="w-full max-w-lg text-center h-full">
        {/* 404 */}
        <p className="text-8xl font-black tracking-tight text-purple-500 sm:text-9xl">
          404
        </p>

        <h2 className="mt-8 text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
          Page Not Found
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-500 sm:text-base">
          Sorry, the page you're looking for doesn't exist or the URL is
          incorrect.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-500 active:scale-[0.98]"
        >
          <span>←</span>
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
