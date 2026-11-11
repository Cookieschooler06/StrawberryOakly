import Link from 'next/link';
import LocalPlayerStats from '@/components/local-player-stats';

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div><p className="text-sm uppercase tracking-[0.2em] text-violet-300">Leaderboard</p><h1 className="mt-2 text-4xl font-black">Your arcade record</h1></div>
          <Link href="/" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold hover:border-pink-400 hover:text-pink-200">Back home</Link>
        </div>
        <div className="mb-6 rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-5">
          <h2 className="font-bold text-cyan-200">A friendly, private-first arcade</h2>
          <p className="mt-2 text-sm text-slate-300">Right now, scores stay in your browser and are not sent to a server. That means this version cannot rank players across different devices or accounts.</p>
        </div>
        <LocalPlayerStats mode="leaderboard" />
      </div>
    </main>
  );
}
