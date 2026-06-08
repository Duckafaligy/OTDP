import Link from 'next/link';

export function Logo({
  className = '',
  size = 'md',
}: {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const dims = {
    sm: { box: 'h-9 w-9', img: 'h-6 w-6' },
    md: { box: 'h-12 w-12', img: 'h-8 w-8' },
    lg: { box: 'h-20 w-20', img: 'h-14 w-14' },
  }[size];

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="OTDP home"
    >
      <span
        className={`relative inline-flex ${dims.box} items-center justify-center rounded-2xl bg-white text-ink-950 plum-glow overflow-hidden transition-transform group-hover:scale-[1.03]`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="" className={dims.img} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base md:text-lg font-semibold tracking-tight text-white">
          OTDP
        </span>
        <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-plum-200/70">
          Ontario · Thriving
        </span>
      </span>
    </Link>
  );
}

export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-2xl bg-white text-ink-950 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.png" alt="OTDP" className="h-2/3 w-2/3" />
    </span>
  );
}
