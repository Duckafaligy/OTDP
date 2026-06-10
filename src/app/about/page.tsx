import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, HeartHandshake, Library, Sparkles, Users } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';
import { Highlight, MarkerUnderline, CheckScribble, Marginalia } from '@/components/Annotate';
import { SignUpButton } from '@/components/SignUpButton';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, serviceSchema, howToSignUpSchema } from '@/lib/schema';
import { site } from '@/lib/site';

const description =
  'OTDP (Ontario Thriving Development Program) is a student-led non-profit running a free, fully online platform that builds personalized study plans, teaches techniques, maps career paths and offers multilingual resources for every student across Ontario. Learn our mission, what we offer, who we serve and how to get started.';

export const metadata = {
  title: 'About OTDP',
  description,
  alternates: { canonical: '/about/' },
  openGraph: {
    type: 'website',
    url: '/about/',
    title: 'About OTDP — free, student-led study platform for Ontario',
    description,
  },
};

const offerings = [
  {
    icon: GraduationCap,
    title: 'Personalized study plans',
    body: 'An automated plan built around your subjects, pace and goals — set your own intensity, from chill to all-in. Fully online.',
  },
  {
    icon: HeartHandshake,
    title: 'Career-path guidance',
    body: 'Tell it the career you want and how extreme you want to go; it maps the courses, skills and steps and feeds them into your plan.',
  },
  {
    icon: Library,
    title: 'A free, multilingual resource library',
    body: 'Notes, study techniques and exam prep in multiple languages — open to every student in Ontario.',
  },
  {
    icon: Sparkles,
    title: 'The end-of-semester project',
    body: 'Students apply what they’ve learned to a real-world cause, donating any funds raised to organisations addressing it.',
  },
];

const steps = [
  {
    title: 'Send the sign-up email',
    body: 'Tap any “Sign up” button — it opens a Gmail draft with a short template. Add your grade, school, subjects, career goal and preferred language.',
  },
  {
    title: 'Get set up with the platform',
    body: 'A real person replies, usually within a week, and gets you access to the free online platform, tuned to your pathway.',
  },
  {
    title: 'Study on your own time',
    body: 'Use your study plan, guided walkthroughs, techniques and career guidance whenever you need — fully online, in your language.',
  },
  {
    title: 'Apply it in the project',
    body: 'Connect what you learned to a cause you care about in the end-of-semester project.',
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'About', url: '/about/' },
          ]),
          serviceSchema,
          howToSignUpSchema,
        ]}
      />

      <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-plum-radial pointer-events-none" />
        <div className="absolute inset-0 graph-grid opacity-50 [mask-image:radial-gradient(70%_60%_at_30%_30%,black,transparent)] pointer-events-none" />
        <div className="container-x relative">
          <Reveal>
            <span className="eyebrow">About OTDP</span>
            <h1 className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl tracking-tight max-w-4xl">
              A free, student-led study platform for{' '}
              <Highlight color="amber">every Ontario student</Highlight>.
            </h1>
            <MarkerUnderline className="mt-3 h-3 w-72 text-amber-400/70" />
            <p className="mt-7 max-w-3xl text-lg md:text-xl text-ink-100/80 leading-relaxed">
              The Ontario Thriving Development Program (OTDP) is a free, fully online platform —
              personalized study plans, study techniques, career-path guidance and a multilingual
              resource library for every student across Ontario. No tuition, no entry tests, no catch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0" id="mission">
        <div className="container-x grid gap-14 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <span className="eyebrow">Our mission</span>
            <h2 className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl tracking-tight">
              Quality help shouldn’t depend on a{' '}
              <Highlight color="plum">credit card</Highlight>.
            </h2>
            <MarkerUnderline className="mt-3 h-3 w-60 text-plum-400/70" />
            <div className="notebook-margin mt-7 space-y-5 pl-12 text-lg text-ink-100/80 leading-relaxed">
              <p>
                We believe a student’s academic ceiling should never be set by what their family
                can afford. Paid tutoring exists for families who can pay for it — but learning is a
                right, not a purchase. OTDP exists to close that gap for every Ontario student.
              </p>
              <p>
                Founded in {site.founded} and governed by a student-led Board under our{' '}
                {site.founded} Constitution, we’re built by students who’ve lived the Ontario system
                — IB, AP, SHSM, French Immersion, York Arts and mainstream high schools.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative mt-2 rotate-[1.2deg]">
              <span className="tape left-8 -top-3 -rotate-6 rounded-[2px]" />
              <div className="paper-note rounded-[2px] p-7">
                <p className="font-display text-2xl leading-snug text-ink-900">
                  “We are not aiming to be perfect, nor better than the education system. We believe
                  students should be able to access the same materials{' '}
                  <span className="font-script text-3xl text-plum-700">without paying a tuition</span>{' '}
                  — it is a human right.”
                </p>
                <p className="mt-4 text-sm text-ink-900/55 font-mono uppercase tracking-widest">
                  — OTDP Founding Team
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0" id="what-we-offer">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">What we offer</span>
            <h2 className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl tracking-tight max-w-3xl">
              Free study help, guidance and resources — for{' '}
              <Highlight color="teal">everyone</Highlight>.
            </h2>
            <MarkerUnderline className="mt-3 h-3 w-64 text-teal-400/70" />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
            {offerings.map((o) => (
              <StaggerItem key={o.title}>
                <div className="group relative glass p-7 hover:bg-white/[0.06] transition h-full">
                  <CheckScribble className="absolute right-6 top-6 h-7 w-7 text-teal-400/70 transition group-hover:text-teal-300" />
                  <span className="grid h-11 w-11 place-items-center rounded-[2px] bg-plum-500/15 text-plum-200 border border-plum-400/30">
                    <o.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-white">{o.title}</h3>
                  <p className="mt-2 text-ink-100/75 leading-relaxed">{o.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section pt-0" id="who-we-serve">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr] items-start">
          <Reveal>
            <span className="eyebrow">Who we serve</span>
            <h2 className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl tracking-tight">
              Every student in Ontario — no exceptions.
            </h2>
            <MarkerUnderline className="mt-3 h-3 w-56 text-amber-400/70" />
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                'Any grade, any Ontario high-school pathway',
                'Public, IB, AP, SHSM, French Immersion & York Arts',
                'Struggling or advanced — both welcome',
                'Fully online — open anywhere in Ontario',
                'Math, sciences, English, French & social sciences',
                'Available in multiple languages',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 glass p-4 text-sm text-ink-100/85"
                >
                  <CheckScribble className="mt-0.5 h-4 w-4 text-teal-400/80 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0" id="how-it-works">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">How it works</span>
            <h2 className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl tracking-tight max-w-3xl">
              From sign-up to your first study plan in{' '}
              <Highlight color="plum">four steps</Highlight>.
            </h2>
            <MarkerUnderline className="mt-3 h-3 w-64 text-plum-400/70" />
            <Marginalia className="mt-4 block rotate-[-2deg] text-lg text-amber-300/90">
              usually under a week ↓
            </Marginalia>
          </Reveal>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="glass p-6 h-full">
                  <span className="font-display text-3xl text-plum-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink-100/75 leading-relaxed">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section pt-0" id="how-were-run">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden glass-strong p-8 md:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
                <div>
                  <span className="eyebrow">How we’re run</span>
                  <h2 className="mt-5 font-display text-3xl md:text-4xl tracking-tight">
                    Students, for students — by design.
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg text-ink-100/80 leading-relaxed">
                    OTDP is led by students and governed by a Board under our {site.founded}{' '}
                    Constitution. Our staff come from IB, AP, SHSM, French Immersion, York Arts and
                    mainstream high schools. Issues escalate to the relevant lead, then to the HR
                    Director and Board — we take accountability seriously and we respond.
                  </p>
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <SignUpButton className="btn-primary" />
                    <Link href="/programs" className="btn-ghost">
                      See our programs <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <ul className="grid gap-3">
                  {[
                    { icon: Users, k: 'Student-led', v: 'Built and run by Ontario students' },
                    { icon: BookOpen, k: 'Constituted', v: `${site.founded} Constitution & Board` },
                    { icon: HeartHandshake, k: 'Always free', v: 'Funded by partners & donations' },
                  ].map((row) => (
                    <li key={row.k} className="glass p-4 flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-[2px] bg-plum-500/15 text-plum-200 border border-plum-400/30 shrink-0">
                        <row.icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-white font-display">{row.k}</span>
                        <span className="block text-sm text-ink-100/70">{row.v}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
