import Link from 'next/link';
import { ArrowRight, Briefcase, Clock, GraduationCap, Instagram, Mail, MapPin, Megaphone } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';
import { Highlight, MarkerUnderline } from '@/components/Annotate';
import { ContactCTA } from '@/components/ContactCTA';
import { SignUpButton } from '@/components/SignUpButton';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, BASE_URL } from '@/lib/schema';
import { site } from '@/lib/site';
import { gmailComposeUrl } from '@/lib/email';

const description =
  'Contact OTDP — the Ontario Thriving Development Program. Email otdp.org@gmail.com to sign up for free, fully online study help and career guidance, partner as a school or community group, volunteer, or reach our team. Serving all of Ontario, online.';

export const metadata = {
  title: 'Contact OTDP',
  description,
  alternates: { canonical: '/contact/' },
  openGraph: {
    type: 'website',
    url: '/contact/',
    title: 'Contact OTDP',
    description,
  },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${BASE_URL}/contact/`,
  url: `${BASE_URL}/contact/`,
  name: 'Contact OTDP',
  description,
  about: { '@id': `${BASE_URL}/#organization` },
};

const routes = [
  {
    icon: GraduationCap,
    title: 'Students',
    body: 'Sign up for free, online study help with a ready-made email template.',
  },
  {
    icon: Briefcase,
    title: 'Schools & community partners',
    body: 'Bring OTDP to your students, or partner on programming and outreach.',
  },
  {
    icon: Mail,
    title: 'Volunteers & contributors',
    body: 'Want to help build content, translations or the platform? Tell us your skills and time.',
  },
  {
    icon: Megaphone,
    title: 'Press & media',
    body: 'Story ideas, interviews and quotes about student-led, free education.',
  },
];

export default function ContactPage() {
  const mailto = gmailComposeUrl(site.email, '', '');

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Contact', url: '/contact/' },
          ]),
          contactPageSchema,
        ]}
      />

      <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-plum-radial pointer-events-none" />
        <div className="absolute inset-0 graph-grid opacity-50 [mask-image:radial-gradient(70%_60%_at_30%_30%,black,transparent)] pointer-events-none" />
        <div className="container-x relative">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h1 className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl tracking-tight max-w-4xl">
              Get in touch with <Highlight color="plum">OTDP</Highlight>.
            </h1>
            <MarkerUnderline className="mt-3 h-3 w-56 text-plum-400/70" />
            <p className="mt-7 max-w-2xl text-lg md:text-xl text-ink-100/80 leading-relaxed">
              The fastest way to reach us is a short email — a real person answers every message,
              usually within a week. Students, schools, volunteers and partners all welcome.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <ContactCTA />
              <SignUpButton className="btn-ghost" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr] items-start">
          <Reveal>
            <span className="eyebrow">Reach us</span>
            <h2 className="mt-5 font-display text-3xl md:text-4xl tracking-tight">
              One inbox, real humans.
            </h2>
            <MarkerUnderline className="mt-3 h-3 w-52 text-amber-400/70" />
            <ul className="mt-7 space-y-3">
              <li className="glass p-4">
                <span className="font-mono text-[11px] uppercase tracking-widest text-plum-200/80">
                  Email
                </span>
                <a
                  href={mailto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center gap-2 text-white hover:text-plum-200 transition"
                >
                  <Mail className="h-4 w-4 text-plum-300" /> {site.email}
                </a>
              </li>
              <li className="glass p-4">
                <span className="font-mono text-[11px] uppercase tracking-widest text-plum-200/80">
                  Instagram
                </span>
                <a
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center gap-2 text-white hover:text-plum-200 transition"
                >
                  <Instagram className="h-4 w-4 text-plum-300" /> @{site.instagramHandle}
                </a>
              </li>
              <li className="glass p-4">
                <span className="font-mono text-[11px] uppercase tracking-widest text-plum-200/80">
                  Where
                </span>
                <p className="mt-1 flex items-center gap-2 text-white">
                  <MapPin className="h-4 w-4 text-plum-300" /> {site.location}
                </p>
              </li>
              <li className="glass p-4">
                <span className="font-mono text-[11px] uppercase tracking-widest text-plum-200/80">
                  Response time
                </span>
                <p className="mt-1 flex items-center gap-2 text-white">
                  <Clock className="h-4 w-4 text-plum-300" /> Usually within a week
                </p>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow">Who’s reaching out?</span>
            <h2 className="mt-5 font-display text-3xl md:text-4xl tracking-tight">
              Pick the note that fits.
            </h2>
            <MarkerUnderline className="mt-3 h-3 w-60 text-teal-400/70" />
            <Stagger className="mt-7 grid gap-4 sm:grid-cols-2">
              {routes.map((r) => (
                <StaggerItem key={r.title}>
                  <div className="glass p-5 h-full">
                    <span className="grid h-10 w-10 place-items-center rounded-[2px] bg-plum-500/15 text-plum-200 border border-plum-400/30">
                      <r.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg text-white">{r.title}</h3>
                    <p className="mt-1.5 text-sm text-ink-100/75 leading-relaxed">{r.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <SignUpButton className="btn-primary" />
              <Link href="/about" className="btn-ghost">
                Learn about OTDP <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
