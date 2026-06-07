'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import type { FAQ } from '@/data/faqs';

export function FAQList({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-white/10 rounded-2xl glass overflow-hidden">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <li key={it.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left hover:bg-white/[0.03] transition"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg md:text-xl text-white">{it.q}</span>
              <span
                className={`grid place-items-center h-9 w-9 shrink-0 rounded-full border border-white/15 transition-transform duration-300 ${
                  isOpen ? 'rotate-45 bg-plum-500/20 border-plum-400/40 text-plum-200' : 'text-ink-100'
                }`}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-ink-100/80 leading-relaxed">{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
