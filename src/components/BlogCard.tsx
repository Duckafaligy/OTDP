import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Post } from '@/data/posts';

const coverMap: Record<Post['cover'], string> = {
  plum: 'from-plum-500/40 via-plum-700/20 to-transparent',
  teal: 'from-teal-500/30 via-teal-700/15 to-transparent',
  amber: 'from-amber-500/30 via-amber-700/15 to-transparent',
};

const accentDot: Record<Post['cover'], string> = {
  plum: 'bg-plum-400',
  teal: 'bg-teal-400',
  amber: 'bg-amber-400',
};

export function BlogCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group relative block overflow-hidden rounded-3xl glass transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.07] ${
        featured ? 'md:col-span-2 lg:row-span-2' : ''
      }`}
    >
      <div
        className={`relative ${
          featured ? 'aspect-[16/9]' : 'aspect-[4/3]'
        } w-full overflow-hidden`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${coverMap[post.cover]}`} />
        <div className="absolute inset-0 graph-grid opacity-40" />
        <div className="absolute inset-0 bg-grain opacity-[0.08] mix-blend-overlay" />
        <div className="absolute inset-0 flex items-end p-6">
          <p className="font-script text-3xl md:text-5xl text-white/85">{post.title.split(' ').slice(0, 3).join(' ')}…</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono uppercase tracking-widest">
          <span className={`h-1.5 w-1.5 rounded-full ${accentDot[post.cover]}`} />
          {post.tags.map((t) => (
            <span key={t} className="text-plum-200/80">{t}</span>
          ))}
          <span className="text-ink-100/40">·</span>
          <span className="text-ink-100/60">{post.readingTime}</span>
        </div>
        <h3 className={`mt-3 font-display text-white ${featured ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
          {post.title}
        </h3>
        <p className="mt-2 text-ink-100/75 leading-relaxed">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-plum-500/15 border border-plum-400/30 text-plum-200 font-display">
              {post.author.charAt(0)}
            </span>
            <div className="leading-tight">
              <p className="text-sm text-white">{post.author}</p>
              <p className="text-xs text-ink-100/55">{post.authorRole}</p>
            </div>
          </div>
          <ArrowUpRight className="h-5 w-5 text-plum-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
        </div>
      </div>
    </Link>
  );
}
