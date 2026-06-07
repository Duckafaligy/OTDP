'use client';

import { useState } from 'react';
import { Check, Copy, Mail } from 'lucide-react';
import { site } from '@/lib/site';
import { gmailComposeUrl } from '@/lib/email';

export function EmailTemplateBlock({
  subject,
  template,
  to = site.email,
}: {
  subject: string;
  template: string;
  to?: string;
}) {
  const [copied, setCopied] = useState(false);

  const gmailHref = gmailComposeUrl(to, subject, template);

  function copy() {
    if (typeof navigator === 'undefined' || !navigator.clipboard) return;
    navigator.clipboard.writeText(template).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }

  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-ink-950/60 border border-white/10 overflow-hidden">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-2.5 bg-white/[0.03]">
          <span className="font-mono text-[11px] uppercase tracking-widest text-plum-200/80">
            Email template
          </span>
          <button
            onClick={copy}
            className="inline-flex items-center gap-1.5 text-xs text-ink-100/80 hover:text-white transition"
            type="button"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-teal-400" /> Copied
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" /> Copy
              </>
            )}
          </button>
        </div>
        <pre className="p-4 text-sm leading-relaxed text-ink-100/90 whitespace-pre-wrap font-mono">
{template}
        </pre>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-100/55">
          Opens Gmail in a new tab, pre-filled to{' '}
          <span className="text-plum-200">{to}</span>.
        </p>
        <a
          href={gmailHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm"
        >
          <Mail className="h-4 w-4" /> Open in Gmail
        </a>
      </div>
    </div>
  );
}
