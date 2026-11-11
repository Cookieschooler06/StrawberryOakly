'use client';

import { useEffect, useRef, useState } from 'react';

type Stats = { gamesPlayed: number; secondsPlayed: number; bestScore: number };
const STORAGE_KEY = 'strawberryoakly:stats:v1';
const ROUND_SECONDS = 30;

function readStats(): Stats {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}');
    return {
      gamesPlayed: Number(value.gamesPlayed) || 0,
      secondsPlayed: Number(value.secondsPlayed) || 0,
      bestScore: Number(value.bestScore) || 0,
    };
  } catch {
    return { gamesPlayed: 0, secondsPlayed: 0, bestScore: 0 };
  }
}

export default function CandyClash() {
  const [playing, setPlaying] = useState(false);
  const [remaining, setRemaining] = useState(ROUND_SECONDS);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const scoreRef = useRef(0);
  const savedRef = useRef(false);

  useEffect(() => {
    setBest(readStats().bestScore);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setRemaining((value) => {
        if (value <= 1) {
          window.clearInterval(timer);
          setPlaying(false);
          if (!savedRef.current) {
            savedRef.current = true;
            const previous = readStats();
            const updated = {
              gamesPlayed: previous.gamesPlayed + 1,
              secondsPlayed: previous.secondsPlayed + ROUND_SECONDS,
              bestScore: Math.max(previous.bestScore, scoreRef.current),
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
            setBest(updated.bestScore);
            window.dispatchEvent(new Event('strawberryoakly:stats-updated'));
          }
          return 0;
        }
        return value - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [playing]);

  function startRound() {
    scoreRef.current = 0;
    savedRef.current = false;
    setScore(0);
    setRemaining(ROUND_SECONDS);
    setPosition({ x: 50, y: 50 });
    setPlaying(true);
  }

  function catchBerry() {
    if (!playing) return;
    scoreRef.current += 1;
    setScore(scoreRef.current);
    setPosition({ x: 8 + Math.random() * 84, y: 12 + Math.random() * 76 });
  }

  return (
    <section className="rounded-3xl border border-pink-400/20 bg-slate-950/80 p-5 md:p-7" aria-label="Candy Clash mini-game">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-300">Playable now · 30-second challenge</p>
          <h2 className="mt-2 text-2xl font-black">Catch the berry!</h2>
          <p className="mt-1 text-sm text-slate-300">Tap the berry as many times as you can before the timer runs out.</p>
        </div>
        <div className="flex gap-5 text-center">
          <div><p className="text-xs uppercase text-slate-400">Score</p><p className="text-2xl font-black">{score}</p></div>
          <div><p className="text-xs uppercase text-slate-400">Time</p><p className="text-2xl font-black">{remaining}s</p></div>
          <div><p className="text-xs uppercase text-slate-400">Best</p><p className="text-2xl font-black text-amber-300">{best}</p></div>
        </div>
      </div>

      <div className="relative mt-5 h-72 overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        {playing ? (
          <button
            type="button"
            onClick={catchBerry}
            aria-label="Catch the strawberry"
            className="absolute grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-pink-500 text-3xl shadow-[0_0_30px_rgba(236,72,153,0.65)] transition-transform hover:scale-110 active:scale-90"
            style={{ left: `${position.x}%`, top: `${position.y}%` }}
          >
            🍓
          </button>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
            <span className="text-5xl" aria-hidden="true">🍓</span>
            <p className="mt-3 font-semibold text-slate-200">{remaining === 0 ? `Round over — you scored ${score}!` : 'Ready when you are.'}</p>
            <button type="button" onClick={startRound} className="mt-4 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 font-bold shadow-glow hover:brightness-110">
              {remaining === 0 ? 'Play again' : 'Start round'}
            </button>
          </div>
        )}
      </div>
      <p className="mt-3 text-xs text-slate-400">Your score and play count are saved only in this browser on this device.</p>
    </section>
  );
}
