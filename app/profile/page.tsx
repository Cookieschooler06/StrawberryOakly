import Link from 'next/link';
import { playerProfile } from '@/lib/data';
import LocalPlayerStats from '@/components/local-player-stats';

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div><p className="text-sm uppercase tracking-[0.2em] text-pink-300">Player profile</p><h1 className="mt-2 text-4xl font-black">{playerProfile.username}</h1></div>
          <Link href="/" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold hover:border-cyan-400 hover:text-cyan-200">Back home</Link>
        </div>
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 md:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-pink-500 via-violet-500 to-cyan-500 p-6 text-center">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-slate-950/50 text-3xl font-black">{playerProfile.username.slice(0, 2).toUpperCase()}</div>
            <h2 className="text-2xl font-black">Arcade Explorer</h2><p className="mt-2 text-sm text-white/80">Your local player profile</p>
          </div>
          <div className="space-y-6">
            <LocalPlayerStats mode="profile" />
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Your achievements</p>
              <p className="mt-3 text-slate-300">Play Candy Clash to set a score and start building your arcade record.</p>
              <Link href="/game/candy-clash" className="mt-4 inline-block rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 py-3 font-bold">Play Candy Clash</Link>
            </div>
          </div>
        </div>
        <p className="mt-5 text-xs text-slate-500">Profile stats are stored locally in this browser. Clearing browser data will reset them.</p>
      </div>
    </main>
  );
}
