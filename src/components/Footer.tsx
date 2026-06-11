import Link from 'next/link';
import { Instagram, Mail, MapPin } from 'lucide-react';
import { site } from '@/lib/site';
import { Logo } from './Logo';
import { SocialLinks } from './SocialLinks';
import { GmailLink } from './GmailLink';
import { studentSignupUrl } from '@/lib/templates';

type FooterLink = { href: string; label: string; external?: boolean };

const cols: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Programs',
    links: [
      { href: '/programs#study-plans', label: 'Personalized Study Plans' },
      { href: '/programs#career-pathways', label: 'Career-Path Guidance' },
      { href: '/programs#exam-season-intensives', label: 'Exam-Season Intensives' },
      { href: '/programs#end-of-semester-project', label: 'End-of-Semester Project' },
    ],
  },
  {
    title: 'Get involved',
    links: [
      { href: studentSignupUrl(), label: 'Sign up as a student', external: true },
      { href: '/contact', label: 'Reach out' },
    ],
  },
  {
    title: 'Organisation',
    links: [
      { href: '/about', label: 'About us' },
      { href: '/#values', label: 'Our values' },
      { href: '/#faq', label: 'FAQ' },
      { href: '/programs', label: 'Our program' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10">
      <div className="absolute inset-0 bg-plum-radial opacity-30 pointer-events-none" />
      <div className="container-x relative pt-12 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-ink-100/70 leading-relaxed">
              Free, fully online study help and career guidance — personalized plans, techniques and
              pathways, in your language — for every student across Ontario.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-ink-100/80">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-plum-300 shrink-0" />
                <GmailLink to={site.email} className="hover:text-white transition">
                  {site.email}
                </GmailLink>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="h-4 w-4 text-plum-300 shrink-0" />
                <a
                  className="hover:text-white transition"
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{site.instagramHandle}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-plum-300 shrink-0" />
                <span>{site.location}</span>
              </li>
            </ul>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-plum-200/70">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink-100/80 hover:text-white transition"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href} className="text-ink-100/80 hover:text-white transition">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 divider-grad" />
        <div className="mt-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-100/60">
            © {new Date().getFullYear()} {site.name}. Made with intention in Ontario.
          </p>
          <div className="flex items-center gap-4">
            <SocialLinks />
            <p className="font-script text-lg text-plum-200/80">keep thriving —</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
