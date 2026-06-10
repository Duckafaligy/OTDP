import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { Stats } from '@/components/Stats';
import { ProgramCard } from '@/components/ProgramCard';
import { FAQList } from '@/components/FAQ';
import { ContactCTA } from '@/components/ContactCTA';
import { SignUpButton } from '@/components/SignUpButton';
import { JsonLd } from '@/components/JsonLd';
import { faqPageSchema } from '@/lib/schema';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';
import {
  Highlight,
  MarkerUnderline,
  Marginalia,
  CheckScribble,
} from '@/components/Annotate';
import { site } from '@/lib/site';
import { programs } from '@/data/programs';
import { faqs } from '@/data/faqs';
import { gmailComposeUrl } from '@/lib/email';
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';

const values = [
  {
    title: 'Always free',
    body: 'Every OTDP feature is free to every Ontario student. Full stop.',
    icon: HeartHandshake,
  },
  {
    title: 'In your language',
    body: 'Guides, plans and techniques in multiple languages — until it clicks, in the language you learn best.',
    icon: BookOpen,
  },
  {
    title: 'Built by students',
    body: 'A student-led non-profit. The platform is automated; the people behind it have lived IB, AP, SHSM, French Immersion & York Arts.',
    icon: GraduationCap,
  },
  {
    title: 'Tied to real life',
    body: 'Career-path guidance at your intensity, plus an end-of-semester project linking your subject to a cause you care about.',
    icon: Sparkles,
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageSchema(faqs)} />
      <Hero />

      <Marquee
        items={[
          'Free study help',
          'Fully online & automated',
          'Personalized study plans',
          'Career-path guidance',
          'In your language',
          'All Ontario students',
          'Student-led',
        ]}
      />

      <section className="section" id="about">
        <div className="container-x grid gap-16 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <span className="eyebrow">About OTDP</span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight">
              An educational and interactive environment for{' '}
              <Highlight color="plum">
                <span className="font-script">every</span>
              </Highlight>{' '}
              Ontario student.
            </h2>
            <MarkerUnderline className="mt-3 h-3 w-52 text-plum-400/70" />
            <div className="notebook-margin mt-7 space-y-5 pl-12 text-lg text-ink-100/80 leading-relaxed">
              <p>
                A free, interactive learning space for students across Ontario — built around
                academic performance, growth, and the pressure of exam season.
              </p>
              <p>
                Our end-of-semester project finally answers the question every classroom asks:{' '}
                <em className="font-script text-plum-200 text-xl">
                  &ldquo;When would I need this in my life?&rdquo;
                </em>{' '}
                Because we’re students too — and we believe the materials shouldn’t cost tuition.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/programs" className="btn-primary">
                See our program <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-6 text-xs font-mono uppercase tracking-[0.22em] text-plum-200/60">
              {site.constitution}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Stats items={site.stats} />
            <div className="relative mt-8 rotate-[1.5deg]">
              <span className="tape left-8 -top-3 -rotate-6 rounded-[2px]" />
              <div className="paper-note rounded-[2px] p-7">
                <p className="font-display text-2xl leading-snug text-ink-900">
                  &ldquo;We are not aiming to be perfect, nor better than the education system. We
                  believe students should be able to access the same materials{' '}
                  <span className="font-script text-3xl text-plum-700">
                    without paying a tuition
                  </span>{' '}
                  — it is a human right.&rdquo;
                </p>
                <p className="mt-4 text-sm text-ink-900/55 font-mono uppercase tracking-widest">
                  — OTDP Founding Team
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="values">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">What we believe</span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-3xl">
              Four ideas that run through <Highlight color="teal">everything</Highlight> we do.
            </h2>
            <MarkerUnderline className="mt-3 h-3 w-72 text-teal-400/70" />
          </Reveal>
          <Stagger className="mt-14 grid gap-5 md:grid-cols-2">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="group relative glass rounded-3xl p-7 hover:bg-white/[0.07] transition h-full">
                  <CheckScribble className="absolute right-6 top-6 h-7 w-7 text-teal-400/70 transition group-hover:text-teal-300" />
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-plum-500/15 text-plum-200 border border-plum-400/30">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 inline-block font-display text-2xl text-white">{v.title}</h3>
                  <p className="mt-2 text-ink-100/75 leading-relaxed">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section" id="programs-preview">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <span className="eyebrow">What we offer</span>
              <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-2xl">
                What your <span className="font-script text-plum-300">learning journey</span> looks like.
              </h2>
              <MarkerUnderline className="mt-3 h-3 w-64 text-amber-400/70" />
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/programs" className="btn-outline-plum">
                See every program <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {programs.slice(0, 6).map((p) => (
              <StaggerItem key={p.slug}>
                <ProgramCard program={p} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl tracking-tight">
              Questions, <span className="font-script text-plum-300">answered.</span>
            </h2>
            <MarkerUnderline className="mt-3 h-3 w-44 text-plum-400/70" />
            <p className="mt-5 text-ink-100/75 leading-relaxed">
              If something here doesn’t quite cover your situation, write to us. We answer every
              email a human writes us — usually within a few business days.
            </p>
            <a
              href={gmailComposeUrl(site.email, '', '')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-plum-200 hover:text-white transition"
            >
              {site.email} <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
          <Reveal delay={0.05}>
            <FAQList items={faqs} />
          </Reveal>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden glass-strong p-8 md:p-14">
              <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
                <div>
                  <span className="eyebrow">Contact</span>
                  <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight">
                    Reach out — students, schools, partners, volunteers.
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg text-ink-100/80 leading-relaxed">
                    The fastest path is a short email. Tap the button — we’ll open Gmail with a
                    quick template so we can reply faster.
                  </p>
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <ContactCTA />
                    <SignUpButton className="btn-ghost" />
                  </div>
                </div>
                <ul className="grid gap-3">
                  <li className="glass rounded-2xl p-4">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-plum-200/80">
                      Email
                    </span>
                    <a
                      href={gmailComposeUrl(site.email, '', '')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 flex items-center gap-2 text-white hover:text-plum-200 transition"
                    >
                      <Mail className="h-4 w-4 text-plum-300" /> {site.email}
                    </a>
                  </li>
                  <li className="glass rounded-2xl p-4">
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
                  <li className="glass rounded-2xl p-4">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-plum-200/80">
                      Where
                    </span>
                    <p className="mt-1 flex items-center gap-2 text-white">
                      <MapPin className="h-4 w-4 text-plum-300" /> {site.location}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
