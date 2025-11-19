"use client";

import { useState } from "react";

export default function LoginPage() {
const [showPassword, setShowPassword] = useState(false);

return ( <div className="font-display min-h-screen flex flex-col items-center justify-center bg-background-light dark:bg-background-dark relative overflow-hidden">
{/* Background Blurs */} <div className="absolute inset-0 z-0"> <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[#E0F7FA]/50 opacity-50 blur-[120px] dark:bg-[#308ce8]/20" /> <div className="absolute right-[-20%] top-[-20%] h-[500px] w-[500px] rounded-full bg-[#E1D5E7]/50 opacity-50 blur-[120px] dark:bg-[#308ce8]/20" /> <div className="absolute bottom-[-10%] left-[20%] h-[500px] w-[500px] rounded-full bg-[#FFE4E1]/50 opacity-50 blur-[120px] dark:bg-[#308ce8]/20" /> </div>

  {/* Login Card */}
  <main className="relative z-10 w-full max-w-md p-4 sm:p-6 md:p-8">
    <div className="glass-effect rounded-xl p-6 sm:p-8">
      <div className="flex flex-col items-center gap-6">
        {/* Icon + Heading */}
        <div className="text-center flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-primary/20 flex items-center justify-center rounded-full mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">
              lock
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-[#0e141b] dark:text-white">
            Welcome Back
          </h1>
          <p className="text-sm text-[#4e7397] dark:text-slate-400">
            Log in to continue to your account.
          </p>
        </div>

        {/* Login Form */}
        <div className="w-full space-y-4">
          {/* Email */}
          <div>
            <label className="flex flex-col">
              <p className="text-sm font-medium pb-2 text-[#0e141b] dark:text-slate-300">
                Email or Username
              </p>
              <input
                placeholder="Enter your email or username"
                className="form-input w-full rounded-lg border border-slate-300/70 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 h-12 px-4 py-2 text-base text-[#0e141b] dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-0 focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
            </label>
          </div>

          {/* Password */}
          <div>
            <label className="flex flex-col">
              <div className="flex items-center justify-between pb-2">
                <p className="text-sm font-medium text-[#0e141b] dark:text-slate-300">
                  Password
                </p>
                <a href="#" className="text-sm font-medium text-primary hover:underline">
                  Forgot Password?
                </a>
              </div>

              <div className="relative flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="form-input w-full rounded-lg border border-slate-300/70 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 h-12 px-4 py-2 pr-10 text-base text-[#0e141b] dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-0 focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />

                {/* Toggle visibility */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 dark:text-slate-400"
                >
                  <span className="material-symbols-outlined">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </label>
          </div>

          {/* Login Button */}
          <button className="w-full rounded-lg bg-primary h-12 text-base font-semibold text-white transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background-dark">
            Login
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 w-full">
          <div className="h-px flex-1 bg-slate-300/70 dark:bg-slate-700" />
          <p className="text-sm text-slate-500 dark:text-slate-400">OR</p>
          <div className="h-px flex-1 bg-slate-300/70 dark:bg-slate-700" />
        </div>

        {/* OAuth Buttons */}
        <div className="grid grid-cols-2 gap-4 w-full">
          {/* Google */}
          <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-300/70 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 h-12 text-sm font-medium text-[#0e141b] dark:text-white hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.578 12.245c0-.82-.073-1.613-.213-2.373h-10.14v4.482h5.71a4.846 4.846 0 0 1-2.102 3.18v2.909h3.727c2.18-2.005 3.43-4.962 3.43-8.198Z" />
              <path fill="#34A853" d="M12.225 23c2.977 0 5.466-0.982 7.288-2.66l-3.727-2.909c-.982.658-2.235 1.047-3.56 1.047-2.744 0-5.065-1.858-5.895-4.364H2.71v2.99C4.542 20.472 8.11 23 12.225 23Z" />
              <path fill="#FBBC04" d="M6.33 14.114a6.37 6.37 0 0 1 0-4.228V6.896H2.71a11.12 11.12 0 0 0 0 10.208L6.33 14.114Z" />
              <path fill="#EA4335" d="M12.225 5.556c1.613 0 3.065.548 4.205 1.625l3.297-3.296C17.682 2.21 15.202 1 12.225 1 8.11 1 4.542 3.528 2.71 6.897L6.33 9.886c.83-2.506 3.151-4.33 5.895-4.33Z" />
            </svg>
            <span>Google</span>
          </button>

          {/* Apple */}
          <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-300/70 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 h-12 text-sm font-medium text-[#0e141b] dark:text-white hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 00-2.047 15.65A7.95 7.95 0 008 16a7.92 7.92 0 004.953-1.745 8.01 8.01 0 002.825-4.076 8.05 8.05 0 00.122-1.258A7.97 7.97 0 0016 8a8 8 0 00-8-8zm-1.094 13.992a5.4 5.4 0 01-1.422-3.832 5.31 5.31 0 013.131-4.885 5.21 5.21 0 014.288 1.488 1.13 1.13 0 01-.016 1.638 3.52 3.52 0 01-2.484.975c-.85.016-1.898-.242-2.485-1.023A1.13 1.13 0 016.906 7.22a5.3 5.3 0 011.01-1.547 5.43 5.43 0 013.881-1.579 5.32 5.32 0 015.063 5.21c-.016 1.145-.306 2.29-.863 3.323a5.35 5.35 0 01-3.13 2.227 5.28 5.28 0 01-5.064-.863zm2.5-6.32c.242 0 .468-.097.629-.274a.89.89 0 00.274-.645c0-.242-.097-.468-.274-.629a.92.92 0 00-.63-.274.89.89 0 00-.645.274.89.89 0 00-.274.63c0 .242.097.468.274.645a.89.89 0 00.645.274z" />
            </svg>
            <span>Apple</span>
          </button>
        </div>

        {/* Signup Link */}
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Don’t have an account?{" "}
          <a href="/signin" className="font-semibold text-primary hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  </main>
</div>
);
}
