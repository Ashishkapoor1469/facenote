"use client";
import { useState } from "react";
import Image from "next/image";

export default function AnonymousPage() {
  const [messages, setMessages] = useState([
    {
      title: "You're so cool! ✨",
      text: "Is it true you're a designer? That's awesome! 🎨",
    },
    {
      title: "Hey! 👋",
      text: "Just wanted to send some good vibes your way. Keep being you! 😊",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages([
      { title: "Anonymous 😶", text: newMessage.trim() },
      ...messages,
    ]);
    setNewMessage("");
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden font-display  overflow-hidden p-4 bg-background-light dark:bg-background-dark font-display bg-purple-500/20">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
        <div className="absolute bottom-[-10%] right-[-20%] top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(148,0,255,.15),rgba(255,255,255,0))]" />
        <div className="absolute bottom-[-40%] left-[20%] top-auto h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,153,255,.15),rgba(255,255,255,0))]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center bg-transparent p-4 pb-2">
        <div className="flex size-12 shrink-0 items-center" />
        <h2 className="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em] text-black dark:text-white">
          @ashish
        </h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex h-12 max-w-[480px] cursor-pointer items-center justify-center rounded-full bg-transparent text-black dark:text-white p-0">
          </button>
        </div>
      </header>

      {/* Messages */}
      <main className="py-6 px-4 pb-32 grid md:grid-cols-2 gap-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className="glassmorphic flex flex-col items-stretch justify-end rounded-xl p-4 border border-black/10 dark:border-white/10 shadow-md shadow-black/5 dark:shadow-white/5"
          >
            <div className="flex w-full flex-col gap-4 ">
              <div className="flex flex-1 flex-col gap-1">
                <p className="text-2xl font-bold leading-tight text-black dark:text-white">
                  {msg.title}
                </p>
                <p className="text-base font-medium leading-normal text-black/80 dark:text-white/80">
                  {msg.text}
                </p>
              </div>
              <button className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center self-end rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-4 text-sm font-bold text-white">
                Reply
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* Input Box */}
      <div className="fixed bottom-0 left-0 right-0 z-20 flex flex-col items-center gap-3 bg-background-light/70 dark:bg-background-dark/70 backdrop-blur-lg px-5 pb-5 pt-2">
        <div className="flex w-full max-w-[480px] items-center gap-2 glassmorphic rounded-full px-4 py-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Send an anonymous message..."
            className="flex-1 bg-transparent text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50 focus:outline-none text-sm font-medium"
          />
          <button
            onClick={handleSend}
            className="flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-4 text-sm font-bold text-white shadow-lg shadow-pink-500/30"
          >
            Send
          </button>
        </div>

        <button className="flex h-14 max-w-[480px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-6 text-base font-bold text-white shadow-lg shadow-pink-500/30">
          <span className="material-symbols-outlined text-2xl">share</span>
          <span>Share Your Link</span>
        </button>
      </div>
    </div>
  );
}
