import { type ReactNode } from 'react';

/**
 * Hand-drawn "marked-up notebook" primitives.
 * All pure SVG / spans — safe to use in server components.
 */

const hlColors: Record<string, string> = {
  amber: 'rgba(245,185,66,0.50)',
  plum: 'rgba(157,114,255,0.45)',
  teal: 'rgba(45,212,191,0.42)',
};

/** A rough highlighter swipe behind a short phrase. */
export function Highlight({
  children,
  color = 'amber',
  className = '',
}: {
  children: ReactNode;
  color?: keyof typeof hlColors;
  className?: string;
}) {
  return (
    <span className={`relative inline-block whitespace-nowrap ${className}`}>
      <svg
        aria-hidden
        viewBox="0 0 120 26"
        preserveAspectRatio="none"
        className="pointer-events-none absolute left-[-0.18em] bottom-[0.04em] z-0 h-[0.78em] w-[calc(100%+0.36em)]"
      >
        <path
          d="M4 13 C 28 7, 84 6, 116 12 C 119 17, 115 22, 107 23 C 66 25, 28 24, 7 21 C 1 19, 1 16, 4 13 Z"
          fill={hlColors[color]}
        />
      </svg>
      <span className="relative z-10">{children}</span>
    </span>
  );
}

/** A rough marker stroke. Color via text-* (uses currentColor). */
export function MarkerUnderline({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 300 14"
      preserveAspectRatio="none"
      fill="none"
      className={className}
    >
      <path
        d="M4 8 C 70 3, 150 11, 208 6 C 248 3, 278 9, 296 7"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** A loose circle scribbled around something. Color via text-*. */
export function CircleScribble({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 200 90" fill="none" className={className}>
      <path
        d="M100 7 C 152 4, 192 20, 193 44 C 194 70, 145 84, 96 84 C 44 84, 8 68, 8 44 C 8 22, 44 9, 104 7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** A curved hand-drawn arrow. Rotate/position via className. Color via text-*. */
export function DoodleArrow({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 96 74" fill="none" className={className}>
      <path
        d="M8 9 C 40 6, 76 20, 84 54"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M68 45 L 86 58 L 66 63"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** A hand-drawn check / tick. Color via text-*. */
export function CheckScribble({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M3.5 13 C 6.5 14.5, 8.5 17.5, 10 20.5 C 13 13, 17 6.5, 21.5 3"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** A handwritten margin note. */
export function Marginalia({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`font-script leading-none text-plum-200 ${className}`}>{children}</span>
  );
}
