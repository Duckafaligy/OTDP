import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';
import { ProgramAccordion } from '@/components/ProgramAccordion';
import { Highlight, MarkerUnderline, Marginalia } from '@/components/Annotate';
import { JsonLd } from '@/components/JsonLd';
import { programListSchema } from '@/lib/schema';
import { programs } from '@/data/programs';

const description =
  'OTDP runs free, flexible tutoring across Ontario — core sessions, exam-season intensives, pathway-specific support (IB, AP, SHSM, French Immersion, York Arts), remedial and advanced tracks, the end-of-semester project, and a free resource library.';

export const metadata = {
  title: 'Our Program',
  description,
  alternates: { canonical: '/programs/' },
  openGraph: {
    type: 'website',
    url: '/programs/',
    title: 'Our Program — OTDP',
    description,
  },
};

export default function ProgramsPage() {
  return (
    <>
      <JsonLd data={programListSchema(programs)} />
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-plum-radial pointer-events-none" />
        <div className="absolute inset-0 graph-grid opacity-50 [mask-image:radial-gradient(70%_60%_at_30%_30%,black,transparent)] pointer-events-none" />
        <div className="container-x relative">
          <Reveal>
            <span className="eyebrow">Our Program</span>
            <h1 className="mt-5 font-display text-5xl md:text-7xl tracking-tight max-w-4xl">
              <span className="gradient-text-static">Our classes are not</span>
              <br />
              <em className="not-italic font-script text-plum-300">standard tutoring.</em>
            </h1>
            <MarkerUnderline className="mt-3 h-3 w-64 text-plum-400/70" />
            <p className="mt-7 max-w-3xl text-lg md:text-xl text-ink-100/80 leading-relaxed">
              We aim for every student to reach their full potential —{' '}
              <Highlight color="amber">at no cost</Highlight>. Built around visuals,
              concept-grasping and overall quality: covering the gaps schools quietly miss, for
              every pathway across Ontario.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-10">
        <div className="container-x">
          <div className="mb-4 flex items-end justify-between gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-plum-200/80">
              Our way · the breakdown
            </p>
            <Marginalia className="hidden sm:block rotate-[-3deg] text-lg text-amber-300/90">
              tap any card to open ↓
            </Marginalia>
          </div>
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p) => (
              <StaggerItem key={p.slug}>
                <a
                  href={`#${p.slug}`}
                  className="block rounded-2xl glass p-5 hover:bg-white/[0.07] transition"
                >
                  <p className="font-mono text-[11px] uppercase tracking-widest text-plum-200/80">
                    {p.ageGroup}
                  </p>
                  <p className="mt-1.5 font-display text-lg text-white">{p.title}</p>
                  <p className="mt-1 text-sm text-ink-100/65">{p.duration}</p>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <div className="container-x pb-16">
        <ProgramAccordion programs={programs} />
      </div>

      <section className="pb-24">
        <div className="container-x">
          <Reveal>
            <a
              href="#top"
              className="text-xs font-mono uppercase tracking-[0.22em] text-plum-200/80 hover:text-white"
            >
              ↑ back to top
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
