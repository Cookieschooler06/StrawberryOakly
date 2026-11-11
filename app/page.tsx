import Link from 'next/link';
import { featuredGames } from '@/lib/data';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden bg-hero-pattern">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <header className="mb-12 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-violet-500 text-lg font-black text-white shadow-glow">
                S
              </div>
              <div>
                <p className="text-lg font-black tracking-tight">StrawberryOakly</p>
              </div>
            </div>
            <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
              <Link href="/" className="hover:text-pink-300">Home</Link>
              <Link href="/games" className="hover:text-pink-300">Games</Link>
              <Link href="/leaderboard" className="hover:text-pink-300">Leaderboard</Link>
              <Link href="/profile" className="hover:text-pink-300">Profile</Link>
            </nav>
            <button className="rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]">
              Play Now
            </button>
          </header>

          <div className="grid items-center gap-10 pb-20 pt-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-pink-500/40 bg-pink-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-pink-200">
                New season live
              </div>
              <h1 className="max-w-xl text-5xl font-black tracking-tight text-white md:text-6xl">
                The playground for your next big win.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-300">
                Explore top-rated games, compete in live challenges, and build your legacy on StrawberryOakly.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/games" className="rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 font-semibold shadow-glow transition hover:scale-[1.02]">
                  Explore Games
                </Link>
                <Link href="/leaderboard" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-200">
                  View Leaderboard
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-300">
                <div>
                  <p className="text-3xl font-black text-white">120k+</p>
                  <span>Players online</span>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">4.8/5</p>
                  <span>Average rating</span>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">35+</p>
                  <span>Games featured</span>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 shadow-glow backdrop-blur">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-violet-600 via-pink-500 to-cyan-500 p-[1px]">
                <div className="rounded-[1.4rem] bg-slate-950 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Featured match</p>
                      <h2 className="mt-2 text-2xl font-black">Arena Duel</h2>
                    </div>
                    <span className="rounded-full bg-cyan-400/15 px-2 py-1 text-xs font-semibold text-cyan-200">Live</span>
                  </div>

                  <div className="grid gap-3 rounded-2xl bg-slate-900/90 p-4">
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
                      <span className="font-semibold">NovaPixel</span>
                      <span className="text-cyan-300">480</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
                      <span className="font-semibold">ZumiFox</span>
                      <span className="text-pink-300">462</span>
                    </div>
                    <div className="mt-2 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 p-3 text-center text-sm font-bold text-white">
                      Final round starts in 00:18
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Best games</p>
            <h2 className="mt-2 text-3xl font-black text-white">Trending right now</h2>
          </div>
          <Link href="/games" className="text-sm font-semibold text-pink-300 hover:text-pink-200">
            See all games →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredGames.map((game) => (
            <article key={game.id} className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/80">
              <div className={`h-40 bg-gradient-to-br ${game.accent} p-4`}>
                <div className="flex items-start justify-between">
                  <span className="rounded-full border border-white/25 bg-white/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                    {game.badge}
                  </span>
                  <span className="rounded-full bg-slate-950/30 px-2 py-1 text-xs font-semibold text-white">
                    {game.rating} ★
                  </span>
                </div>
              </div>
              <div className="space-y-4 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{game.genre}</p>
                    <h3 className="mt-1 text-xl font-bold text-white">{game.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-300">{game.description}</p>
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>{game.players} players</span>
                  <Link href={`/game/${game.slug}`} className="font-semibold text-pink-300 hover:text-pink-200">
                    Play now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-3 lg:px-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Community</p>
            <h3 className="mt-3 text-2xl font-black text-white">Build your legend.</h3>
            <p className="mt-3 text-slate-300">Create your profile, unlock achievements, and rise in the rankings.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-pink-300">Daily challenges</p>
            <h3 className="mt-3 text-2xl font-black text-white">Win big.</h3>
            <p className="mt-3 text-slate-300">Complete special missions and earn exclusive badges every day.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Safe & fun</p>
            <h3 className="mt-3 text-2xl font-black text-white">Made for everyone.</h3>
            <p className="mt-3 text-slate-300">Friendly gameplay and a smooth gaming experience for all ages.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
