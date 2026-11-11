import Link from 'next/link';
import { featuredGames } from '@/lib/data';

export default function GamePage({ params }: { params: { slug: string } }) {
  const game = featuredGames.find((item) => item.slug === params.slug) ?? featuredGames[0];

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white lg:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/games" className="mb-6 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:border-pink-400 hover:text-pink-200">
          ← Back to games
        </Link>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80">
          <div className={`h-56 bg-gradient-to-br ${game.accent}`} />
          <div className="space-y-6 p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">{game.genre}</p>
                <h1 className="mt-2 text-4xl font-black">{game.title}</h1>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-2 text-sm font-semibold">{game.rating} ★ Rated</span>
            </div>

            <p className="max-w-2xl text-lg text-slate-300">{game.description}</p>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Players</p>
                <p className="mt-2 text-2xl font-black">{game.players}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Game mode</p>
                <p className="mt-2 text-2xl font-black">Arcade</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Category</p>
                <p className="mt-2 text-2xl font-black">Featured</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
              <h2 className="text-xl font-black text-white">How to play</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                <li>Jump into the match and start collecting points as soon as you load in.</li>
                <li>Use movement and timing to avoid danger and maintain a high score.</li>
                <li>Challenge friends or climb the leaderboard to improve your rank.</li>
              </ul>
            </div>

            <button className="rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 text-base font-bold text-white shadow-glow transition hover:scale-[1.02]">
              Launch {game.title}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
