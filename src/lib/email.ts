/**
 * Build a Gmail web-compose URL.
 * Opens in a new tab and lands on https://mail.google.com/mail/?view=cm — so users
 * get Gmail directly instead of their OS-default mail client (Outlook, Mail.app, etc).
 *
 * Works for both consumer Gmail and Google Workspace accounts. If the user happens
 * not to be signed in to a Google account, Gmail will prompt them to sign in.
 */
export function gmailComposeUrl(to: string, subject: string, body: string) {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to,
    su: subject,
    body,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

/** Gmail mobile-app deep link (iOS + Android Gmail register this scheme). */
export function gmailAppUrl(to: string, subject: string, body: string) {
  return (
    'googlegmail://co?to=' +
    encodeURIComponent(to) +
    '&subject=' +
    encodeURIComponent(subject) +
    '&body=' +
    encodeURIComponent(body)
  );
}

/**
 * Smart Gmail open, called from an anchor's onClick:
 *  - Desktop  → do nothing here; the <a href={gmailComposeUrl()}> opens the Gmail
 *               web compose in a new tab.
 *  - Mobile   → open the Gmail APP (googlegmail://) pre-filled with the template,
 *               and if the app isn't installed, fall back to the Gmail web compose.
 * The template is carried into both the app link and the web fallback.
 */
export function openGmail(
  e: { preventDefault: () => void },
  to: string,
  subject: string,
  body: string,
) {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return;

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent || '');
  if (!isMobile) return; // desktop: let the default href (web compose) handle it

  e.preventDefault();
  const webUrl = gmailComposeUrl(to, subject, body);
  const appUrl = gmailAppUrl(to, subject, body);

  let cancelled = false;
  const fallback = window.setTimeout(() => {
    if (!cancelled) window.location.href = webUrl;
  }, 1200);

  // If the app actually opens, this tab gets backgrounded — cancel the web fallback.
  const cancel = () => {
    cancelled = true;
    window.clearTimeout(fallback);
  };
  window.addEventListener('pagehide', cancel, { once: true });
  window.addEventListener('blur', cancel, { once: true });
  document.addEventListener(
    'visibilitychange',
    () => {
      if (document.visibilityState === 'hidden') cancel();
    },
    { once: true },
  );

  window.location.href = appUrl;
}
