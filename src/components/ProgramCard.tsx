import Link from 'next/link';
import { ArrowUpRight, Clock, MapPin, Users } from 'lucide-react';
import type { Program } from '@/data/programs';

const accentMap: Record<Program['accent'], { chip: string }> = {
  plum: { chip: 'bg-plum-500/12 text-plum-200 border-plum-400/25' },
  teal: { chip: 'bg-teal-500/12 text-teal-300 border-teal-400/25' },
  amber: { chip: 'bg-amber-500/12 text-amber-300 border-amber-400/25' },
};

export function ProgramCard({ program }: { program: Program }) {
  const a = accentMap[program.accent];
  return (
    <Link
      href={`/programs#${program.slug}`}
      className="group relative block glass p-7 overflow-hidden transition-colors duration-300 hover:bg-white/[0.06]"
    >
      <div className="relative">
        <span className={`inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] px-2.5 py-1 rounded-[2px] border ${a.chip}`}>
          {program.ageGroup}
        </span>
        <h3 className="mt-4 font-display text-2xl md:text-3xl text-white">{program.title}</h3>
        <p className="mt-2 text-ink-100/70">{program.tagline}</p>
        <ul className="mt-5 space-y-1.5 text-sm text-ink-100/70">
          <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-plum-300" /> {program.duration}</li>
          <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-plum-300" /> {program.format}</li>
          <li className="flex items-center gap-2"><Users className="h-4 w-4 text-plum-300" /> {program.ageGroup}</li>
        </ul>
        <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-white/90 group-hover:text-plum-200 transition">
          Learn more <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
