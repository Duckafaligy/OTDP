'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Clock, MapPin, Users } from 'lucide-react';
import { Stagger, StaggerItem } from '@/components/Reveal';
import { CheckScribble } from '@/components/Annotate';
import { SignUpButton } from '@/components/SignUpButton';
import type { Program } from '@/data/programs';

const accentBar: Record<string, string> = {
  plum: 'from-plum-500 to-plum-300',
  teal: 'from-teal-500 to-teal-400',
  amber: 'from-amber-500 to-amber-400',
};

export function ProgramAccordion({ programs }: { programs: Program[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <Stagger className="space-y-3">
      {programs.map((p, i) => {
        const isOpen = openSlug === p.slug;
        return (
          <StaggerItem key={p.slug}>
            <article id={p.slug} className="scroll-mt-32 glass rounded-3xl overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenSlug(isOpen ? null : p.slug)}
                aria-expanded={isOpen}
                className="w-full text-left p-6 md:p-7 flex items-start gap-4 hover:bg-white/[0.04] transition"
              >
                <div
                  className={`mt-2 h-10 w-1 bg-gradient-to-b ${accentBar[p.accent]} shrink-0 hidden sm:block`}
                />
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-plum-200/80">
                    Program {String(i + 1).padStart(2, '0')}
                  </p>
                  <h2 className="mt-2 font-display text-2xl md:text-3xl text-white">{p.title}</h2>
                  <p className="mt-1 font-script text-lg text-plum-200">{p.tagline}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    <li className="flex items-center gap-1.5 text-xs text-ink-100/75 glass rounded-xl px-3 py-1.5">
                      <Clock className="h-3.5 w-3.5 text-plum-300" /> {p.duration}
                    </li>
                    <li className="flex items-center gap-1.5 text-xs text-ink-100/75 glass rounded-xl px-3 py-1.5">
                      <MapPin className="h-3.5 w-3.5 text-plum-300" /> {p.format}
                    </li>
                    <li className="flex items-center gap-1.5 text-xs text-ink-100/75 glass rounded-xl px-3 py-1.5">
                      <Users className="h-3.5 w-3.5 text-plum-300" /> {p.ageGroup}
                    </li>
                  </ul>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-plum-300 shrink-0 mt-2 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/5 px-6 md:px-7 pb-7 pt-6">
                      <p className="text-ink-100/80 leading-relaxed">{p.description}</p>
                      <div className="mt-6 grid gap-5 sm:grid-cols-2">
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-widest text-plum-200/80 mb-3">
                            What you walk away with
                          </p>
                          <ul className="space-y-2">
                            {p.outcomes.map((o) => (
                              <li key={o} className="flex items-start gap-2.5 text-sm text-ink-100/85">
                                <CheckScribble className="mt-0.5 h-4 w-4 text-teal-400/80 shrink-0" />
                                {o}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-widest text-plum-200/80 mb-3">
                            Inside the program
                          </p>
                          <ol className="space-y-2.5">
                            {p.modules.map((m, idx) => (
                              <li key={m.title} className="flex gap-3 text-sm">
                                <span className="font-mono text-xs text-plum-300 mt-0.5 w-5 shrink-0">
                                  {String(idx + 1).padStart(2, '0')}
                                </span>
                                <div>
                                  <p className="font-display text-white text-sm">{m.title}</p>
                                  <p className="text-xs text-ink-100/70">{m.detail}</p>
                                </div>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                      <div className="mt-7 flex flex-wrap gap-3">
                        <SignUpButton className="btn-primary text-sm" />
                        <Link href="/#contact" className="btn-ghost text-sm">
                          Ask a question
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
