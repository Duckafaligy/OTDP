'use client';

import { ArrowRight } from 'lucide-react';
import { site } from '@/lib/site';
import { openGmail } from '@/lib/email';
import { studentSignupUrl, studentSignupSubject, studentSignupTemplate } from '@/lib/templates';

/**
 * One-click student sign-up.
 *  - Desktop: opens the Gmail web compose in a new tab (the href).
 *  - Mobile: opens the Gmail app pre-filled with the template, falling back to
 *    the web compose if the app isn't installed.
 */
export function SignUpButton({
  className = 'btn-primary',
  label = 'Sign up as a student',
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={studentSignupUrl()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => openGmail(e, site.email, studentSignupSubject, studentSignupTemplate)}
      className={className}
    >
      {label} <ArrowRight className="h-4 w-4" />
    </a>
  );
}
