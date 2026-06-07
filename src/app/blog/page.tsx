import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';
import { BlogCard } from '@/components/BlogCard';
import { Highlight, MarkerUnderline } from '@/components/Annotate';
import { posts } from '@/data/posts';

export const metadata = {
  title: 'Blog',
  description:
    'Essays, reflections and program notes from OTDP — Ontario’s youth-led development non-profit.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/blog/' },
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  const [featured, ...rest] = sorted;
  return (
    <>
      <section className="relative pt-36 pb-12 md:pt-44 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-plum-radial pointer-events-none" />
        <div className="absolute inset-0 graph-grid opacity-50 [mask-image:radial-gradient(70%_60%_at_30%_30%,black,transparent)] pointer-events-none" />
        <div className="container-x relative">
          <Reveal>
            <span className="eyebrow">Field notes</span>
            <h1 className="mt-5 font-display text-5xl md:text-7xl tracking-tight max-w-4xl">
              <span className="gradient-text-static">The OTDP </span>
              <em className="not-italic font-script text-plum-300">blog.</em>
            </h1>
            <MarkerUnderline className="mt-3 h-3 w-52 text-amber-400/70" />
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-ink-100/80 leading-relaxed">
              Honest reflections on what we’re building, what we’re learning, and what it takes to
              help young Ontarians{' '}
              <Highlight color="teal">thrive</Highlight>. Written by the people doing the work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            <StaggerItem className="md:col-span-2 lg:row-span-2">
              <BlogCard post={featured} featured />
            </StaggerItem>
            {rest.map((p) => (
              <StaggerItem key={p.slug}>
                <BlogCard post={p} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
