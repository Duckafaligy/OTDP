'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { SignUpButton } from './SignUpButton';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/contact', label: 'Contact' },
];

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="container-x">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 border transition-all duration-500 ${
            scrolled
              ? 'bg-ink-950/90 border-white/10 shadow-[0_10px_30px_-22px_rgba(0,0,0,0.7)] md:bg-white/[0.07] md:border-white/[0.12]'
              : 'bg-ink-950/90 border-white/10 md:bg-transparent md:border-transparent'
          }`}
        >
          <Logo />
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href);
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
          <div className="hidden md:block">
            <SignUpButton className="btn-primary text-sm py-2 px-4" label="Sign up" />
          </div>
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-[2px] glass"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 rounded-2xl bg-ink-950/95 border border-white/10 p-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block px-3 py-2.5 rounded-xl text-ink-50 hover:bg-white/5"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <SignUpButton className="btn-primary w-full justify-center" label="Sign up" />
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
