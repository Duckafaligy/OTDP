'use client';

import { motion } from 'framer-motion';

export function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      {items.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
          className="glass rounded-2xl p-5 hover:bg-white/[0.07] transition"
        >
          <p className="font-display text-4xl md:text-5xl text-white">{s.value}</p>
          <p className="mt-1 text-sm text-ink-100/70">{s.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
