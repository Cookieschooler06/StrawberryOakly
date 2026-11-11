import Link from 'next/link';
import { featuredGames } from '@/lib/data';
import CandyClash from '@/components/candy-clash';

export default function GamePage({ params }: { params: { slug: string } }) {
  const game = featuredGames.find((item) => item.slug === params.slug);

  if (!game) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-slate-900 p-8">
          <h1 className="text-3xl font-black">Game not found</h1>
          <p className="mt-3 text-slate-300">That game isn’t in the StrawberryOakly arcade yet.</p>
          <Link href="/games" className="mt-6 inline-block text-pink-300 hover:text-pink-200">← Browse games</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white lg:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/games" className="mb-6 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:border-pink-400 hover:text-pink-200">← Back to games</Link>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80">
          <div className={`h-40 bg-gradient-to-br ${game.accent}`} />
          <div className="space-y-6 p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div><p className="text-sm uppercase tracking-[0.2em] text-cyan-300">{game.genre}</p><h1 className="mt-2 text-4xl font-black">{game.title}</h1></div>
              <span className="rounded-full bg-white/10 px-3 py-2 text-sm font-semibold">{game.rating} ★ Rated</span>
            </div>
            <p className="max-w-2xl text-lg text-slate-300">{game.description}</p>
            {game.slug === 'candy-clash' ? <CandyClash /> : (
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
                <h2 className="text-xl font-black">Coming soon to the arcade</h2>
                <p className="mt-2 text-slate-300">This original game concept is on the StrawberryOakly roadmap. Try Candy Clash for a playable challenge today.</p>
                <Link href="/game/candy-clash" className="mt-4 inline-block rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 py-3 font-bold">Play Candy Clash</Link>
              </div>
            )}
            <p className="text-xs text-slate-400">StrawberryOakly is an original game hub. Game names and concepts here are our own.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
