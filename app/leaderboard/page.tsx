import Link from 'next/link';
import { leaderboard } from '@/lib/data';

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Leaderboard</p>
            <h1 className="mt-2 text-4xl font-black">Top players</h1>
          </div>
          <Link href="/" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:border-pink-400 hover:text-pink-200">
            Back home
          </Link>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80">
          <div className="grid grid-cols-[0.6fr_1.5fr_1fr_1fr_1.2fr] border-b border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-slate-300">
            <span>Rank</span>
            <span>Player</span>
            <span>Games</span>
            <span>Playtime</span>
            <span>Current streak</span>
          </div>

          {leaderboard.map((player) => (
            <div key={player.rank} className="grid grid-cols-[0.6fr_1.5fr_1fr_1fr_1.2fr] items-center border-b border-white/10 px-5 py-4 text-sm text-slate-200 last:border-b-0">
              <span className="text-lg font-black text-white">#{player.rank}</span>
              <span className="font-semibold">{player.name}</span>
              <span>{player.gamesPlayed}</span>
              <span>{player.playtime}</span>
              <span className="text-cyan-300">{player.streak}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
