import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] grid place-items-center pt-32 pb-16">
      <div className="container-x text-center">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-plum-200/80">404</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl">
          That page <span className="font-script text-plum-300">wandered off</span>.
        </h1>
        <p className="mt-5 max-w-lg mx-auto text-ink-100/75">
          The link you followed may be older than this site. Try the homepage or jump straight to
          our programs.
        </p>
        <div className="mt-7 flex items-center justify-center gap-3">
          <Link href="/" className="btn-primary"><ArrowLeft className="h-4 w-4" /> Back home</Link>
          <Link href="/programs" className="btn-ghost">See programs</Link>
        </div>
      </div>
    </section>
  );
}
