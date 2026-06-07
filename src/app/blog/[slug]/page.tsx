import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { posts } from '@/data/posts';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    robots: { index: false, follow: false },
    alternates: { canonical: `/blog/${post.slug}/` },
  };
}

const coverMap: Record<string, string> = {
  plum: 'from-plum-500/45 via-plum-700/25 to-ink-950',
  teal: 'from-teal-500/35 via-teal-700/20 to-ink-950',
  amber: 'from-amber-500/35 via-amber-700/20 to-ink-950',
};

function renderBody(body: string) {
  const blocks = body.trim().split(/\n{2,}/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith('### ')) {
      return (
        <h3 key={i} className="font-display text-2xl md:text-3xl text-white mt-10 mb-3">
          {trimmed.replace(/^###\s+/, '')}
        </h3>
      );
    }
    if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed.split(/\n/).map((l) => l.replace(/^\d+\.\s+/, ''));
      return (
        <ol key={i} className="my-6 space-y-2.5 list-decimal pl-6 text-ink-100/90 leading-relaxed">
          {items.map((it, idx) => (
            <li key={idx}>{renderInline(it)}</li>
          ))}
        </ol>
      );
    }
    if (trimmed.startsWith('— ')) {
      return (
        <p key={i} className="font-script text-2xl text-plum-200 mt-8">
          {trimmed}
        </p>
      );
    }
    return (
      <p key={i} className="text-lg leading-relaxed text-ink-100/90 mt-5">
        {renderInline(trimmed)}
      </p>
    );
  });
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="text-white font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={i} className="italic text-plum-200">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part;
  });
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const date = new Date(post.date).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="relative">
      <div className={`relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-b ${coverMap[post.cover]} opacity-90`} />
        <div className="absolute inset-0 graph-grid opacity-40 [mask-image:radial-gradient(80%_70%_at_30%_20%,black,transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-grain opacity-[0.07] mix-blend-overlay pointer-events-none" />
        <div className="container-x relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-ink-100/80 hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4" /> Back to the blog
          </Link>
          <Reveal>
            <div className="mt-8 flex flex-wrap items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-plum-200/90">
              {post.tags.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-[2px] bg-white/5 border border-white/10">
                  {t}
                </span>
              ))}
            </div>
            <h1 className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl tracking-tight max-w-4xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-ink-100/85 leading-relaxed">{post.excerpt}</p>
            <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-ink-100/75">
              <span className="inline-flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-plum-500/20 border border-plum-400/30 text-plum-200 font-display">
                  {post.author.charAt(0)}
                </span>
                <span>
                  <span className="text-white">{post.author}</span> · {post.authorRole}
                </span>
              </span>
              <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {date}</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readingTime}</span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="container-x">
        <Reveal>
          <div className="notebook-margin max-w-3xl mx-auto pb-16 pl-8 md:pl-12">
            {renderBody(post.body)}
          </div>
        </Reveal>
        <div className="divider-grad" />

        <Reveal>
          <section className="py-16">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-plum-200/80">
              Keep reading
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group glass rounded-2xl p-5 hover:bg-white/[0.07] transition"
                >
                  <p className="font-display text-xl text-white">{r.title}</p>
                  <p className="mt-2 text-sm text-ink-100/70">{r.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-plum-200 group-hover:text-white">
                    Read post <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </Reveal>
      </div>
    </article>
  );
}
