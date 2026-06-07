'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Highlight, Marginalia, DoodleArrow, CheckScribble } from '@/components/Annotate';
import { SignUpButton } from '@/components/SignUpButton';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 bg-plum-radial pointer-events-none" />
      <div className="absolute inset-0 graph-grid opacity-60 [mask-image:radial-gradient(70%_60%_at_30%_30%,black,transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-overlay pointer-events-none" />
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-4xl"
        >
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" /> Student-led · Free for every Ontario student
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-tight">
            <span className="gradient-text">Free tutoring,</span>
            <br />
            <span className="text-white/95">
              built so{' '}
              <Highlight color="amber">every student</Highlight>{' '}
              can{' '}
              <em className="not-italic font-script text-plum-300 text-[1.05em] align-baseline">
                thrive.
              </em>
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg md:text-xl text-ink-100/80 leading-relaxed">
            Free, flexible tutoring for every student in Ontario — online or in person.
            No tuition, no entry tests, no catch.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mt-12 flex flex-wrap items-center gap-3"
          >
            <div className="relative">
              <div className="pointer-events-none absolute bottom-full left-10 mb-0.5 hidden lg:block">
                <Marginalia className="block rotate-[-6deg] whitespace-nowrap text-xl text-amber-300/95">
                  yes — actually $0
                </Marginalia>
                <DoodleArrow className="ml-16 -mt-1 h-8 w-8 -scale-x-100 rotate-[15deg] text-amber-300/85" />
              </div>
              <SignUpButton className="btn-primary" />
            </div>
            <Link href="/programs" className="btn-ghost">
              See the programs <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>

        <PinnedCard />
      </div>
    </section>
  );
}

function PinnedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: 2.5 }}
      animate={{ opacity: 1, y: 0, rotate: 2.5 }}
      transition={{ duration: 0.9, delay: 0.25 }}
      className="hidden lg:block absolute right-10 top-40 w-80"
    >
      <div className="relative paper-note rounded-[2px] p-6">
        <span className="tape left-1/2 -top-3 -translate-x-1/2 -rotate-2 rounded-[2px]" />
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#2a2440] text-amber-300 font-display text-xl">
            $0
          </span>
          <div>
            <p className="font-display text-2xl leading-tight text-ink-900">Always free</p>
            <p className="text-xs text-ink-900/55 font-mono uppercase tracking-widest">
              Online + in-person
            </p>
          </div>
        </div>
        <div className="mt-4 h-px bg-ink-900/15" />
        <ul className="mt-4 space-y-2.5 text-sm text-ink-900/80">
          <li className="flex items-center gap-2">
            <CheckScribble className="h-4 w-4 text-plum-600 shrink-0" /> All Ontario subjects
          </li>
          <li className="flex items-center gap-2">
            <CheckScribble className="h-4 w-4 text-teal-500 shrink-0" /> IB · AP · SHSM · FI · York Arts
          </li>
          <li className="flex items-center gap-2">
            <CheckScribble className="h-4 w-4 text-amber-500 shrink-0" /> End-of-semester project
          </li>
        </ul>
        <p className="mt-4 font-script text-2xl text-plum-700">— book a slot.</p>
      </div>
    </motion.div>
  );
}
