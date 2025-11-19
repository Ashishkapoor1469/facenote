"use client";

import { useState } from "react";

export default function Page() {
const [open, setOpen] = useState(false);

const reviews = [
{
text: "This is an amazing and well-thought-out product! Keep up the great work, you're doing great things for the community.",
time: "2h ago",
emoji: "🎉",
},
{
text: "I love the new feature you added last week. It's so intuitive and has already saved me a ton of time.",
time: "1d ago",
emoji: "💡",
},
{
text: "Honestly, one of the best user experiences I've had in a while. The design is clean and everything just works.",
time: "3d ago",
emoji: null,
},
{
text: "A quick suggestion: it would be cool to add a dark mode. But other than that, it's perfect!",
time: "1w ago",
emoji: "👍",
},
];

return (
   <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200">
{/* Top Bar */} <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between border-b border-slate-200/80 bg-background-light/80 px-4 backdrop-blur-sm dark:border-slate-800/80 dark:bg-background-dark/80"> <div className="flex size-12 shrink-0 items-center justify-start">
<div
className="size-10 rounded-full bg-cover bg-center"
style={{
backgroundImage:
`url("https://lh3.googleusercontent.com/aida-public/AB6AXuBNVT9GXViG8M2-u7ql9tBdWAoc3XTyn02zZ006NCSzOzK6niNqL2htdTnSgGU5bhEXohcdai8i-DTXJBWfCjFd7ohGtrHSMTEnaR61dp07aP6rJWKYx5erahINDuQ8fuYJ5UUNXIKA-enS6EWXOPYqIBMhxh1th_AqXVdR4FBFAJUPYyR8KeNFYADYKbQY58uiUI5qf8E1g8lJjA3BkXoLX8AdZYh9RFI3HAL9TapXh0yX__SX71TUzW02-Xw3Aw6LTVPpqwXo6W4")`
}}
/> </div>

```
    <h1 className="flex-1 text-center text-lg font-bold tracking-tight">
      Anonymous Reviews
    </h1>

    <div className="w-12" />
  </header>

  {/* Main Content */}
  <main className="flex-1 px-4 py-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {reviews.map((r, i) => (
        <div
          key={i}
          className="flex flex-col items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-transform duration-200 ease-in-out hover:shadow-lg hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/50"
        >
          <p className="text-base font-medium leading-relaxed">
            {r.text}
          </p>

          <div className="flex w-full items-center justify-between">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {r.time}
            </p>
            {r.emoji && (
              <div className="flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-800">
                <span className="text-lg">{r.emoji}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </main>

  {/* Floating Add Button */}
  <button
    onClick={() => setOpen(true)}
    className="fixed bottom-6 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-110"
  >
    <span className="material-symbols-outlined text-3xl">add</span>
  </button>

  {/* Add Review Modal */}
  {open && (
    <div className="fixed inset-0 z-30 flex items-end justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-t-xl bg-background-light p-6 shadow-2xl dark:bg-background-dark">
        <div className="flex items-center justify-between pb-4">
          <h2 className="text-xl font-bold">Add a review</h2>
          <button
            onClick={() => setOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200/80 text-slate-600 hover:bg-slate-300/80 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <textarea
          className="h-32 w-full rounded-lg border border-slate-300 bg-slate-50 p-3 text-base placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-500"
          placeholder="Write an anonymous review..."
        />

        <button
          onClick={() => setOpen(false)}
          className="mt-4 flex h-12 border w-full items-center justify-center rounded-lg bg-primary text-base font-semibold text-white transition-colors hover:bg-primary/90"
        >
          Submit Review
        </button>
      </div>
    </div>
  )}
</div>
);
}
