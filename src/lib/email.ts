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
