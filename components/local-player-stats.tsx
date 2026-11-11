'use client';

import { useEffect, useState } from 'react';

type Stats = { gamesPlayed: number; secondsPlayed: number; bestScore: number };
const STORAGE_KEY = 'strawberryoakly:stats:v1';
const defaultStats: Stats = { gamesPlayed: 0, secondsPlayed: 0, bestScore: 0 };

function getStats(): Stats {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}');
    return {
      gamesPlayed: Number(value.gamesPlayed) || 0,
      secondsPlayed: Number(value.secondsPlayed) || 0,
      bestScore: Number(value.bestScore) || 0,
    };
  } catch {
    return defaultStats;
  }
}

function formatTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
}

export default function LocalPlayerStats({ mode }: { mode: 'profile' | 'leaderboard' }) {
  const [stats, setStats] = useState(defaultStats);

  useEffect(() => {
    const refresh = () => setStats(getStats());
    refresh();
    window.addEventListener('storage', refresh);
    window.addEventListener('strawberryoakly:stats-updated', refresh);
    return () => {
      window.removeEventListener('storage', refresh);
      window.removeEventListener('strawberryoakly:stats-updated', refresh);
    };
  }, []);

  if (mode === 'profile') {
    return (
      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label="Games played" value={String(stats.gamesPlayed)} />
        <Stat label="Playtime" value={formatTime(stats.secondsPlayed)} />
        <Stat label="Best berry score" value={String(stats.bestScore)} />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80">
      <div className="grid grid-cols-[0.6fr_1.5fr_1fr_1fr] border-b border-white/10 bg-white/5 px-5 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-slate-300 sm:text-sm">
        <span>Rank</span><span>Player</span><span>Games</span><span>Playtime</span>
      </div>
      <div className="grid grid-cols-[0.6fr_1.5fr_1fr_1fr] items-center px-5 py-5 text-sm text-slate-200">
        <span className="text-lg font-black text-amber-300">—</span>
        <span className="font-semibold">You · this browser</span>
        <span>{stats.gamesPlayed}</span>
        <span>{formatTime(stats.secondsPlayed)}</span>
      </div>
      <p className="border-t border-white/10 px-5 py-4 text-sm text-slate-400">
        This is a private, device-only scorecard, not a global ranking. Shared leaderboards need accounts and a secure server.
      </p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p><p className="mt-2 text-3xl font-black">{value}</p></div>;
}
