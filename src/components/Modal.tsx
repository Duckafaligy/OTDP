'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
};

export function Modal(props: ModalProps) {
  const { open, onClose, children, title, subtitle, eyebrow = 'Apply' } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const prevOverflow = document.body.style.overflow;
    const prevPadding = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPadding;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!mounted) return null;

  const content = (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[200] grid place-items-center px-4 py-6 sm:px-6">
          <motion.button
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-ink-950/65 backdrop-blur-md"
            style={{ WebkitBackdropFilter: 'blur(10px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? 'modal-title' : undefined}
            className="scrollbar-hide relative w-full max-w-2xl max-h-[calc(100vh-3rem)] overflow-y-auto overflow-x-hidden rounded-[3px] bg-ink-950/97 border border-white/12 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.85)]"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-[2px] bg-white/10 border border-white/15 text-ink-100/90 hover:text-white hover:bg-white/15 transition"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="relative p-6 sm:p-8">
              <div className="relative">
                {title ? (
                  <div className="pr-12">
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-plum-200/80">
                      {eyebrow}
                    </p>
                    <h3
                      id="modal-title"
                      className="mt-2 font-display text-3xl md:text-4xl text-white leading-tight"
                    >
                      {title}
                    </h3>
                    {subtitle ? (
                      <p className="mt-3 text-ink-100/80 leading-relaxed">{subtitle}</p>
                    ) : null}
                  </div>
                ) : null}
                <div className={title ? 'mt-6' : ''}>{children}</div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );

  return createPortal(content, document.body);
}
