import Link from 'next/link';
import { featuredGames } from '@/lib/data';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden bg-hero-pattern">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <header className="mb-12 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-violet-500 text-lg font-black shadow-glow">S</div>
              <span className="text-lg font-black tracking-tight">StrawberryOakly</span>
            </Link>
            <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
              <Link href="/" className="hover:text-pink-300">Home</Link><Link href="/games" className="hover:text-pink-300">Games</Link><Link href="/leaderboard" className="hover:text-pink-300">Leaderboard</Link><Link href="/profile" className="hover:text-pink-300">Profile</Link>
            </nav>
            <Link href="/games" className="rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-4 py-2 text-sm font-semibold shadow-glow transition hover:scale-[1.02]">Enter arcade</Link>
          </header>

          <div className="grid items-center gap-10 pb-20 pt-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-pink-500/40 bg-pink-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-pink-200">A tiny arcade with big energy</div>
              <h1 className="max-w-2xl text-5xl font-black tracking-tight md:text-6xl">Play something joyful. Beat your best.</h1>
              <p className="mt-6 max-w-xl text-lg text-slate-300">StrawberryOakly is an original, friendly arcade for quick games, personal high scores, and the fun of getting one more try.</p>
              <div className="mt-8 flex flex-wrap gap-4"><Link href="/game/candy-clash" className="rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 font-semibold shadow-glow hover:brightness-110">Play Candy Clash</Link><Link href="/games" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold hover:border-cyan-400 hover:text-cyan-200">Browse games</Link></div>
              <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-300"><div><p className="text-3xl font-black text-white">Quick</p><span>pick-up-and-play</span></div><div><p className="text-3xl font-black text-white">Original</p><span>games made for this arcade</span></div><div><p className="text-3xl font-black text-white">Private</p><span>scores stay on your device</span></div></div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 shadow-glow">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-violet-600 via-pink-500 to-cyan-500 p-[1px]"><div className="rounded-[1.4rem] bg-slate-950 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Featured mini-game</p><h2 className="mt-2 text-3xl font-black">Candy Clash</h2><p className="mt-3 text-slate-300">Thirty seconds. One tiny strawberry. How many times can you catch it?</p>
                <div className="my-6 flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-violet-500/20 text-7xl">🍓</div>
                <Link href="/game/candy-clash" className="block rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 p-3 text-center font-bold">Start a round →</Link>
              </div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4"><div><p className="text-sm uppercase tracking-[0.25em] text-cyan-300">The arcade</p><h2 className="mt-2 text-3xl font-black">Choose your next game</h2></div><Link href="/games" className="text-sm font-semibold text-pink-300 hover:text-pink-200">All games →</Link></div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredGames.map((game) => <article key={game.id} className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/80">
            <div className={`h-36 bg-gradient-to-br ${game.accent} p-4`}><span className="rounded-full border border-white/25 bg-white/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em]">{game.badge}</span></div>
            <div className="space-y-4 p-5"><div><p className="text-xs uppercase tracking-[0.2em] text-slate-400">{game.genre}</p><h3 className="mt-1 text-xl font-bold">{game.title}</h3></div><p className="text-sm text-slate-300">{game.description}</p><Link href={`/game/${game.slug}`} className="inline-block font-semibold text-pink-300 hover:text-pink-200">{game.slug === 'candy-clash' ? 'Play game →' : 'Coming soon →'}</Link></div>
          </article>)}
        </div>
      </section>
      <section className="border-t border-white/10 bg-slate-900/60"><div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-3 lg:px-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6"><p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Our vision</p><h3 className="mt-3 text-xl font-black">Small games, big bragging rights.</h3><p className="mt-3 text-sm text-slate-300">Quick original games that are easy to pick up and fun to master.</p></div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6"><p className="text-sm uppercase tracking-[0.2em] text-pink-300">Your progress</p><h3 className="mt-3 text-xl font-black">Your best is yours.</h3><p className="mt-3 text-sm text-slate-300">Personal profile stats are saved in your browser in this early version.</p></div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6"><p className="text-sm uppercase tracking-[0.2em] text-violet-300">Next up</p><h3 className="mt-3 text-xl font-black">More worlds to play.</h3><p className="mt-3 text-sm text-slate-300">Life stories, arena duels, and more original mini-games are on the roadmap.</p></div>
      </div></section>
    </main>
  );
}
