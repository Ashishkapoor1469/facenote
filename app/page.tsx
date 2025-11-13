"use client";

import { motion } from "framer-motion";
import Image from "next/image";
export default function HomePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden p-4 bg-background-light dark:bg-background-dark font-display bg-purple-500/20">
      {/* ===== HEADER ===== */}
      <header className="absolute top-0 right-0 z-30 p-4">
        <div className="flex items-center gap-2">
          <button className="rounded-full bg-black/5 px-4 py-2 text-sm font-bold text-black/70 transition-colors hover:bg-black/10 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20">
            Login
          </button>
          <button className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-white shadow-[0_0_15px_theme(colors.primary/0.4)] transition-shadow hover:shadow-[0_0_25px_theme(colors.primary/0.6)]">
            Sign Up
          </button>
        </div>
      </header>

      {/* ===== BACKGROUND BLOBS ===== */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-1/4 -left-1/4 h-1/2 w-1/2 rounded-full bg-[#E6E6FA]/30 blur-3xl dark:bg-[#E6E6FA]/10"></div>
        <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-[#FFC0CB]/30 blur-3xl dark:bg-[#FFC0CB]/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 w-1/2 rounded-full bg-[#A7C7E7]/30 blur-3xl dark:bg-[#A7C7E7]/10"></div>
      </div>

      {/* ===== FLOATING MESSAGES ===== */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <motion.div
          className="absolute top-[10%] left-[5%] flex w-fit max-w-[180px] -rotate-12 items-center gap-2 rounded-lg bg-white/20 p-3 shadow-lg backdrop-blur-md dark:bg-white/10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm text-black/70 dark:text-white/80">You{"'"}re awesome!</p>
          <span className="text-lg">💖</span>
        </motion.div>

        <motion.div
          className="absolute top-[25%] right-[8%] flex w-fit max-w-[180px] rotate-6 items-center gap-2 rounded-lg bg-white/20 p-3 shadow-lg backdrop-blur-md dark:bg-white/10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-lg">💬</span>
          <p className="text-sm text-black/70 dark:text-white/80">Great job today!</p>
        </motion.div>

        <motion.div
          className="absolute bottom-[20%] left-[10%] flex w-fit max-w-[180px] rotate-3 items-center gap-2 rounded-lg bg-white/20 p-3 shadow-lg backdrop-blur-md dark:bg-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-black/70 dark:text-white/80">Guess who? 😉</p>
          <span className="text-lg">🤫</span>
        </motion.div>

        <motion.div
          className="absolute bottom-[8%] right-[5%] flex w-fit max-w-[180px] -rotate-6 items-center gap-2 rounded-lg bg-white/20 p-3 shadow-lg backdrop-blur-md dark:bg-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <span className="text-lg">😎</span>
          <p className="text-sm text-black/70 dark:text-white/80">Your secret admirer</p>
        </motion.div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <main className="relative z-20 flex w-full max-w-md flex-col items-center justify-center text-center">
        <h1 className="text-black text-[32px] font-bold leading-tight dark:text-white">
          WhisperBox
        </h1>
        <p className="text-black/80 text-base font-normal leading-normal pt-1 pb-8 dark:text-white/80">
          Get honest messages from your friends — totally anonymous.
        </p>

        <div className="w-full max-w-xs">
          <button className="flex w-full items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-primary text-white text-base font-bold shadow-[0_0_20px_theme(colors.primary/0.5)] transition-shadow hover:shadow-[0_0_30px_theme(colors.primary/0.7)]">
            <span className="truncate px-8 py-2 bg-purple-600 hover:bg-purple-500 cursor-pointer border-black rounded-2xl">Share Your Link</span>
          </button>
        </div>

        <p className="text-black/60 text-sm font-normal pt-8 dark:text-white/50">
          Join 1M+ users sharing anonymous thoughts.
        </p>
      </main>

      <motion.main  initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}   className="absolute h-screen w-screen top-0 left-0">
 <Image
        src="/images/1.png"
        alt="Phone Mockup"
        height={50}
        width={50}
        className="object-contain absolute top-24 right-20 object-center pointer-events-none select-none opacity-90"
      />

      <Image
        src="/images/4.png"
        alt="Phone Mockup"
        height={50}
        width={50}
        className="object-contain absolute bottom-10 left-22 object-center pointer-events-none select-none opacity-90"
      />
      <Image
        src="/images/2.png"
        alt="Phone Mockup"
        height={50}
        width={50}
        className="object-contain absolute top-44 left-20 object-center pointer-events-none select-none opacity-90"
      />
      <Image
        src="/images/3.png"
        alt="Phone Mockup"
        height={50}
        width={50}
        className="object-contain absolute bottom-38 right-20 object-center pointer-events-none select-none opacity-90"
      />
      </motion.main>
      
    </div>
  );
}
