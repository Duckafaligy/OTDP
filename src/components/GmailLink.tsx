'use client';

import type { ReactNode } from 'react';
import { gmailComposeUrl, openGmail } from '@/lib/email';

/**
 * A link that opens Gmail immediately — no popup.
 *  - Desktop: Gmail web compose in a NEW tab.
 *  - Mobile: the Gmail app (with template), falling back to web if not installed.
 */
export function GmailLink({
  to,
  subject = '',
  body = '',
  className = '',
  children,
}: {
  to: string;
  subject?: string;
  body?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={gmailComposeUrl(to, subject, body)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => openGmail(e, to, subject, body)}
      className={className}
    >
      {children}
    </a>
  );
}
