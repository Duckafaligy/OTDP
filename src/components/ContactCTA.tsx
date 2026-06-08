import { MessageCircle } from 'lucide-react';
import { GmailLink } from './GmailLink';
import { site } from '@/lib/site';

const generalSubject = 'Reaching out — OTDP';

const generalTemplate = `Hi OTDP team,

My name is [Your name]
I'm reaching out about: [Partnering / Sponsoring / Speaking / Press / Just saying hi]

A bit about me / my organisation:
[2-3 sentences so we know who we're talking to]

What I'd love to discuss:
[What you'd like to chat about — the more specific the better]

Best time to reach me:
[Your time zone + a couple of windows that work]

Thanks,
[Your name]
[Optional: link to your work / org]
`;

/** Opens Gmail directly (web in a new tab on desktop, the app on mobile) — no popup. */
export function ContactCTA() {
  return (
    <GmailLink
      to={site.email}
      subject={generalSubject}
      body={generalTemplate}
      className="btn-primary"
    >
      <MessageCircle className="h-4 w-4" /> Email OTDP
    </GmailLink>
  );
}
