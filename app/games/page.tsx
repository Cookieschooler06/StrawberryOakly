import Link from 'next/link';
import { featuredGames } from '@/lib/data';

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Games library</p>
            <h1 className="mt-2 text-4xl font-black">Explore all games</h1>
          </div>
          <Link href="/" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:border-pink-400 hover:text-pink-200">
            Back home
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredGames.map((game) => (
            <article key={game.id} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/80">
              <div className={`h-44 bg-gradient-to-br ${game.accent}`} />
              <div className="space-y-4 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{game.genre}</p>
                    <h2 className="mt-2 text-2xl font-bold">{game.title}</h2>
                  </div>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-xs font-semibold text-white">{game.rating} ★</span>
                </div>
                <p className="text-sm text-slate-300">{game.description}</p>
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>{game.players} players</span>
                  <Link href={`/game/${game.slug}`} className="font-semibold text-pink-300 hover:text-pink-200">
                    Open game
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
