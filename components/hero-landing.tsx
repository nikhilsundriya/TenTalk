"use client"

import { useRouter } from "next/navigation"
import { GitHubStarButton } from "@/components/github-star-button"

export function HeroLanding() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6">
      <div className="max-w-6xl mx-auto w-full">

        {/* Title */}
        <div className="mb-10 sm:mb-14 md:mb-20">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[14rem] 2xl:text-[16rem] font-black tracking-tighter leading-[1.1] mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
              TenTalk
            </span>
          </h1>

          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-thin text-indigo-200/90 tracking-[0.2em] uppercase">
              Brief · Secure · Private
            </h2>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent mx-auto"></div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <p className="text-base sm:text-lg md:text-xl text-indigo-100/60 font-light max-w-3xl mx-auto leading-relaxed">
            Private, self-destructing chat rooms that disappear after 10 minutes.
            No accounts, no history — just secure conversations.
          </p>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">

          <button
  onClick={() => router.push("/create")}
  className="group relative w-full h-[70px] flex items-center justify-center bg-transparent border border-indigo-500/30 hover:border-indigo-400 text-indigo-200 hover:text-white font-medium tracking-wider uppercase transition-all duration-500 overflow-hidden hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]"
>
  <span className="relative z-10">Create Room</span>

  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 via-indigo-500/20 to-indigo-600/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
</button>

          <button
            onClick={() => router.push("/join")}
            className="group relative px-10 py-4 bg-transparent border border-indigo-500/30 hover:border-indigo-400 text-indigo-200 hover:text-white font-medium tracking-wider uppercase transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">Join Room</span>

            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 via-indigo-500/20 to-indigo-600/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>

          <GitHubStarButton variant="hero" />

        </div>

        {/* Features */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 pb-20 border-t border-indigo-500/20">

  {/* Feature 1 */}
  <div className="group p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(99,102,241,0.25)]">

    <div className="mb-3 text-indigo-400 text-xl">⚡</div>

    <h3 className="font-semibold text-base text-indigo-200 mb-2">
      Self-Destructing
    </h3>

    <p className="text-sm text-indigo-100/60 leading-relaxed">
      Rooms automatically expire after 10 minutes to keep conversations temporary and private.
    </p>

  </div>

  {/* Feature 2 */}
  <div className="group p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(139,92,246,0.25)]">

    <div className="mb-3 text-purple-400 text-xl">🔒</div>

    <h3 className="font-semibold text-base text-indigo-200 mb-2">
      No Accounts
    </h3>

    <p className="text-sm text-indigo-100/60 leading-relaxed">
      Start chatting instantly without registration. Just create a room and share the link.
    </p>

  </div>

  {/* Feature 3 */}
  <div className="group p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)]">

    <div className="mb-3 text-blue-400 text-xl">💬</div>

    <h3 className="font-semibold text-base text-indigo-200 mb-2">
      Real-Time
    </h3>

    <p className="text-sm text-indigo-100/60 leading-relaxed">
      Messages appear instantly with live updates for a smooth real-time conversation experience.
    </p>

  </div>

</div>

      </div>
    </div>
  )
}