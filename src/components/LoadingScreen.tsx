'use client';

import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'otdp-seen-loader';
const MIN_DISPLAY_MS = 1400;

// Module-scoped guard so React strict-mode double-invocation doesn't skip the loader.
let hasShownThisLoad = false;

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'fade' | 'done'>('loading');
  const startRef = useRef<number>(0);

  useEffect(() => {
    // Show only on the first visit per browser session.
    if (typeof window === 'undefined') return;
    const alreadySeen = sessionStorage.getItem(STORAGE_KEY);
    if (alreadySeen && !hasShownThisLoad) {
      setPhase('done');
      return;
    }
    hasShownThisLoad = true;
    sessionStorage.setItem(STORAGE_KEY, '1');
    startRef.current = startRef.current || performance.now();

    let raf = 0;
    let current = 0;

    const tick = () => {
      const elapsed = performance.now() - startRef.current;
      const docReady = document.readyState === 'complete';
      const allImagesLoaded = Array.from(document.images).every(
        (img) => img.complete && (img.naturalWidth > 0 || img.src === '')
      );

      // Move toward a target based on real signals; cap at 92% until truly ready.
      const target = docReady && allImagesLoaded ? 100 : Math.min(92, elapsed / 18);
      current = current + (target - current) * 0.18;
      const display = Math.min(100, Math.round(current));
      setProgress(display);

      if (display >= 100 && elapsed >= MIN_DISPLAY_MS) {
        setPhase('fade');
        setTimeout(() => setPhase('done'), 550);
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (phase === 'loading') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [phase]);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[120] flex flex-col items-center justify-center bg-ink-950 transition-opacity duration-500 ${
        phase === 'fade' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden={phase !== 'loading'}
    >
      {/* Ambient plum glow */}
      <div className="pointer-events-none absolute inset-0 bg-plum-radial opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05] mix-blend-overlay" />

      {/* Hopping logo */}
      <div className="relative">
        <span className="absolute inset-0 -z-10 rounded-3xl bg-plum-500/40 blur-3xl animate-pulse" />
        <div className="loader-hop">
          <span className="grid h-24 w-24 place-items-center rounded-3xl bg-white plum-glow">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="OTDP" className="h-16 w-16" />
          </span>
        </div>
        {/* Shadow that scales with the hop */}
        <div className="loader-shadow mt-3 mx-auto" />
      </div>

      {/* Progress bar */}
      <div className="relative z-10 mt-12 w-64 sm:w-80">
        <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-white/10 border border-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-plum-500 via-plum-400 to-plum-300 transition-[width] duration-150 ease-out"
            style={{
              width: `${progress}%`,
              boxShadow:
                '0 0 14px rgba(124, 77, 255, 0.85), 0 0 28px rgba(124, 77, 255, 0.55), inset 0 0 8px rgba(255, 255, 255, 0.45)',
            }}
          />
          {/* Shimmer overlay */}
          <div
            className="absolute inset-y-0 left-0 w-full opacity-50 pointer-events-none loader-shimmer"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-4 flex items-baseline justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-plum-200/80">
            Loading OTDP
          </span>
          <span className="font-display text-xl text-white tabular-nums">
            {progress}
            <span className="text-plum-300">%</span>
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes loader-hop {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-22px); }
        }
        @keyframes loader-shadow {
          0%, 100% { transform: scaleX(1); opacity: 0.55; }
          50% { transform: scaleX(0.6); opacity: 0.25; }
        }
        @keyframes loader-shimmer {
          0% { background-position: -120% 0; }
          100% { background-position: 220% 0; }
        }
        .loader-hop {
          animation: loader-hop 0.95s cubic-bezier(0.6, 0, 0.4, 1) infinite;
        }
        .loader-shadow {
          width: 5rem;
          height: 0.5rem;
          border-radius: 9999px;
          background: radial-gradient(closest-side, rgba(124,77,255,0.7), rgba(124,77,255,0));
          animation: loader-shadow 0.95s cubic-bezier(0.6, 0, 0.4, 1) infinite;
        }
        .loader-shimmer {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.5) 50%,
            transparent 100%
          );
          background-size: 50% 100%;
          background-repeat: no-repeat;
          animation: loader-shimmer 1.6s linear infinite;
        }
      `}</style>
    </div>
  );
}
