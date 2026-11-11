import Link from 'next/link';
import { playerProfile } from '@/lib/data';

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-pink-300">Player profile</p>
            <h1 className="mt-2 text-4xl font-black">{playerProfile.username}</h1>
          </div>
          <Link href="/" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:border-cyan-400 hover:text-cyan-200">
            Back home
          </Link>
        </div>

        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 md:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-pink-500 via-violet-500 to-cyan-500 p-6 text-center">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-slate-950/50 text-3xl font-black">
              {playerProfile.username.slice(0, 2).toUpperCase()}
            </div>
            <h2 className="text-2xl font-black">{playerProfile.title}</h2>
            <p className="mt-2 text-sm text-white/80">Level {playerProfile.level}</p>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Games played</p>
                <p className="mt-2 text-3xl font-black">{playerProfile.totalGamesPlayed}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Playtime</p>
                <p className="mt-2 text-3xl font-black">{playerProfile.totalPlaytime}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Favorite</p>
                <p className="mt-2 text-xl font-black">{playerProfile.favoriteGame}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Achievements</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {playerProfile.achievements.map((achievement) => (
                  <span key={achievement} className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-2 text-sm font-semibold text-cyan-200">
                    {achievement}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-pink-300">Badges</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {playerProfile.recentBadges.map((badge) => (
                  <span key={badge} className="rounded-full border border-pink-400/30 bg-pink-500/10 px-3 py-2 text-sm font-semibold text-pink-200">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
