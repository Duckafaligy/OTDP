'use client';

import { useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { Modal } from './Modal';
import { EmailTemplateBlock } from './EmailTemplateBlock';
import { site } from '@/lib/site';
import { gmailComposeUrl, openGmail } from '@/lib/email';

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

export function ContactCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn-primary"
      >
        <MessageCircle className="h-4 w-4" /> Email OTDP
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Send us an email with the template below — it lets us reply faster, route the message to the right team, and (when relevant) schedule a proper meeting."
      >
        <div className="space-y-5">
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={gmailComposeUrl(site.email, '', '')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => openGmail(e, site.email, '', '')}
              className="glass rounded-2xl p-4 hover:bg-white/[0.07] transition"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-plum-200/80">
                Email (Gmail)
              </span>
              <p className="mt-1 flex items-center gap-2 text-white">
                <Mail className="h-4 w-4 text-plum-300" /> {site.email}
              </p>
            </a>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-4 hover:bg-white/[0.07] transition"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-plum-200/80">
                Instagram
              </span>
              <p className="mt-1 text-white">@{site.instagramHandle}</p>
            </a>
          </div>
          <EmailTemplateBlock
            subject="Reaching out — OTDP"
            template={generalTemplate}
          />
        </div>
      </Modal>
    </>
  );
}
