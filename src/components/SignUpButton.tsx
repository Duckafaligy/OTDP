import { ArrowRight } from 'lucide-react';
import { studentSignupUrl } from '@/lib/templates';

/**
 * One-click student sign-up. Opens Gmail in a new tab, pre-filled with the
 * sign-up template — same mechanism the old applications used, minus the page.
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
      className={className}
    >
      {label} <ArrowRight className="h-4 w-4" />
    </a>
  );
}
