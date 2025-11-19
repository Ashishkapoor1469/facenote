"use client";
import Link from "next/link";
export default function ProfilePage() {
  return (
    <div className="min-h-screen w-full bg-[#F5F5F7] text-gray-900 font-sans">
      {/* Top Header */}
      <header className="flex items-center justify-between px-4 py-4">
       <Link href={"/"}> <button className="text-gray-600 text-xl">
          ←
        </button></Link>

        <h1 className="text-lg font-bold">Profile</h1>

        <button className="text-[#7B50FF] text-sm font-semibold">
          Settings
        </button>
      </header>

      {/* Main */}
      <main className="flex flex-col items-center gap-6 px-4 pb-10">

        {/* Profile Avatar */}
        <div className="flex flex-col items-center mt-2">
          <div
            className="h-32 w-32 rounded-full bg-cover bg-center ring-4 ring-[#7B50FF]/20"
            style={{
              backgroundImage: `url("https://cdn-icons-png.flaticon.com/512/3177/3177440.png")`,
            }}
          ></div>

          <div className="text-center mt-4">
            <p className="text-xl font-bold">Alex Johnson</p>
            <p className="text-gray-500 text-sm">@alexj</p>
          </div>
        </div>

        {/* Edit Profile Button */}
        <button className="w-full max-w-[480px] bg-[#7B50FF] text-white font-semibold py-3 rounded-xl hover:opacity-90 transition">
          Edit Profile
        </button>

        {/* Share Profile Section */}
        <div className="w-full max-w-[480px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] rounded-xl p-4">
          <p className="font-bold text-[15px] mb-3">Share Your Profile Link</p>

          <div className="flex items-center justify-between bg-[#F5F5F7] rounded-lg px-3 py-2">
            <p className="text-gray-500 text-sm truncate">
              anon-reviews.app/alexj
            </p>

            <button className="bg-[#EDE6FF] text-[#7B50FF] text-sm font-semibold px-3 py-1 rounded-md hover:opacity-90">
              Copy
            </button>
          </div>
        </div>

        {/* Reviews */}
        <div className="w-full max-w-[480px]">
          <p className="font-bold text-[15px] mb-3">Reviews of Other People</p>

          <div className="flex flex-col gap-3">
            {[
              { name: "Sarah K.", review: `"You're so creative!"` },
              { name: "Mike P.", review: `"Great sense of humor."` },
              { name: "Jordan T.", review: `"Always inspiring."` },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-full bg-gray-300"
                    style={{
                      backgroundImage:
                        "url('https://cdn-icons-png.flaticon.com/512/3177/3177440.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>

                  <div>
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-gray-500 text-xs">{item.review}</p>
                  </div>
                </div>

                <span className="text-gray-400 text-lg">›</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
