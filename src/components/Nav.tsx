'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { SignUpButton } from './SignUpButton';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/contact', label: 'Contact' },
];

const isActive = (href: string, pathname: string) =>
  href === '/' ? pathname === '/' : pathname.startsWith(href);

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll and close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="container-x">
        <div
          className={`relative z-40 flex items-center justify-between rounded-2xl px-4 py-2.5 border backdrop-blur-md transition-all duration-500 ${
            scrolled
              ? 'bg-ink-950/80 border-white/10 shadow-[0_10px_30px_-22px_rgba(0,0,0,0.7)]'
              : 'bg-ink-950/55 border-white/10'
          }`}
          style={{ WebkitBackdropFilter: 'blur(12px)' }}
        >
          <Logo />
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = isActive(l.href, pathname);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-4 py-2 text-sm font-medium rounded-[2px] transition-colors ${
                    active
                      ? 'text-white bg-white/10'
                      : 'text-ink-100/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden lg:block">
            <SignUpButton className="btn-primary text-sm py-2 px-4" label="Sign up" />
          </div>
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-[2px] glass"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <>
              <motion.button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="lg:hidden fixed inset-0 z-30 cursor-default bg-ink-950/60 backdrop-blur-sm"
                style={{ WebkitBackdropFilter: 'blur(4px)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.nav
                id="mobile-menu"
                aria-label="Mobile"
                className="lg:hidden relative z-40 mt-3 rounded-2xl bg-ink-950/95 border border-white/10 p-4"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <ul className="flex flex-col gap-1">
                  {links.map((l) => {
                    const active = isActive(l.href, pathname);
                    return (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          aria-current={active ? 'page' : undefined}
                          className={`block px-3 py-2.5 rounded-xl transition-colors ${
                            active
                              ? 'text-white bg-white/10'
                              : 'text-ink-50 hover:bg-white/5'
                          }`}
                        >
                          {l.label}
                        </Link>
                      </li>
                    );
                  })}
                  <li className="pt-2">
                    <SignUpButton className="btn-primary w-full justify-center" label="Sign up" />
                  </li>
                </ul>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
