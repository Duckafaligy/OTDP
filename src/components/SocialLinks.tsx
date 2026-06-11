import { Instagram, Mail, Phone, type LucideIcon } from 'lucide-react';
import { site } from '@/lib/site';
import { gmailComposeUrl } from '@/lib/email';

type IconLink = { label: string; href: string; Icon: LucideIcon; external: boolean };

/**
 * Compact row of clickable contact / social icon buttons.
 * Order: Instagram · phone (only if site.phone is set) · email.
 */
export function SocialLinks({ className = '' }: { className?: string }) {
  const links: IconLink[] = [
    {
      label: 'Instagram',
      href: site.socials.instagram,
      Icon: Instagram,
      external: true,
    },
    ...(site.phone
      ? [
          {
            label: 'Phone',
            href: `tel:${site.phone.replace(/[^\d+]/g, '')}`,
            Icon: Phone,
            external: false,
          } as IconLink,
        ]
      : []),
    {
      label: 'Email',
      href: gmailComposeUrl(site.email, '', ''),
      Icon: Mail,
      external: true,
    },
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links.map(({ label, href, Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] glass text-ink-100/80 hover:text-white hover:bg-white/10 transition-colors"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
