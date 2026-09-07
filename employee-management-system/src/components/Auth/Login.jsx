import { useState } from "react";
import FooterAppInfo from "../layout/FooterAppInfo";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-zinc-950 px-5 py-8 pb-72 sm:px-6 sm:pb-60">
      {/* Background Glow Accents */}
      <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-emerald-500/15 blur-[120px]"></div>

      <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
        {/* Subtle Top Border Highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent"></div>

        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
            Welcome Back
          </h2>

          <p className="mt-2 text-xs text-zinc-400">
            Please enter your credentials to log in
          </p>
        </div>

        <form className="flex flex-col space-y-5" onSubmit={submitHandler}>
          <div>
            <input
              required
              type="email"
              placeholder="Enter Your Email"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3.5 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition duration-200 focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/80"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              required
              type="password"
              placeholder="Enter Password"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3.5 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition duration-200 focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/80"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="mt-2 w-full cursor-pointer rounded-xl bg-emerald-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition duration-200 hover:bg-emerald-500 active:scale-[0.98]">
            Log in
          </button>
        </form>
      </div>

      {/* Demo Credentials / App Information */}
      <FooterAppInfo />
    </div>
  );
}

export default Login;
