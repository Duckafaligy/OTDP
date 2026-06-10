import { site } from './site';
import type { FAQ } from '@/data/faqs';
import type { Program } from '@/data/programs';

export const BASE_URL = 'https://ontariothrivingdevelopmentprogram.org';

/** Organisation entity — powers Google Knowledge Panel + grounds AI answer engines. */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'NGO'],
  '@id': `${BASE_URL}/#organization`,
  name: site.name,
  alternateName: site.shortName,
  url: `${BASE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/icon.svg`,
    width: 320,
    height: 320,
  },
  description: site.description,
  email: site.email,
  foundingDate: site.founded,
  foundingLocation: { '@type': 'Place', name: 'Ontario, Canada' },
  slogan: site.tagline,
  nonprofitStatus: 'Nonprofit',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
  areaServed: { '@type': 'AdministrativeArea', name: 'Ontario, Canada' },
  contactPoint: {
    '@type': 'ContactPoint',
    email: site.email,
    contactType: 'Customer support',
    areaServed: 'CA',
    availableLanguage: ['English', 'French'],
  },
  knowsLanguage: ['en-CA', 'fr-CA'],
  audience: {
    '@type': 'EducationalAudience',
    educationalRole: 'student',
    audienceType: 'Ontario students',
  },
  knowsAbout: [
    'Free online learning platform',
    'Automated personalized study plans',
    'Study techniques and strategies',
    'Career-path guidance',
    'Multilingual study resources',
    'Ontario high school curriculum',
    'International Baccalaureate (IB)',
    'Advanced Placement (AP)',
    'Specialist High Skills Major (SHSM)',
    'French Immersion',
    'York Region Arts',
    'Exam and EQAO preparation',
    'Post-secondary guidance',
  ],
  sameAs: [site.socials.instagram],
};

/** The core free, online study-help service offered across Ontario. */
export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/#service`,
  name: 'Free automated study help, career guidance and academic resources',
  serviceType: 'Online learning platform and academic guidance',
  description:
    'A free, fully online platform that builds personalized study plans, teaches study techniques, maps career paths and offers a multilingual resource library for every student in Ontario.',
  provider: { '@id': `${BASE_URL}/#organization` },
  areaServed: { '@type': 'AdministrativeArea', name: 'Ontario, Canada' },
  audience: { '@type': 'EducationalAudience', educationalRole: 'student' },
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: 0,
    priceCurrency: 'CAD',
    availability: 'https://schema.org/InStock',
  },
};

/** Breadcrumb trail for sub-pages. */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${BASE_URL}${it.url}`,
    })),
  };
}

/** "How to get free study help" — strong answer-engine + voice-search content. */
export const howToSignUpSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `${BASE_URL}/about/#how-it-works`,
  name: 'How to get free study help with OTDP',
  description:
    'Get free, automated study help and career guidance from the Ontario Thriving Development Program in a few simple steps.',
  totalTime: 'P7D',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'CAD', value: 0 },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Send the sign-up email',
      text: 'Tap any “Sign up” button on the site. It opens a Gmail draft pre-filled with a short template — add your grade, school, the subjects you want help with, your career goal and your preferred language.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Get set up with the platform',
      text: 'A real person replies, usually within a week, and gets you access to the free online platform — tuned to your pathway (public, IB, AP, SHSM, French Immersion or York Arts).',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Study on your own time',
      text: 'Use your personalized study plan, guided walkthroughs, study techniques and career-path guidance whenever you need them — fully online, in your language.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Apply it in the end-of-semester project',
      text: 'Connect what you learned to a real-world cause in our end-of-semester project, with any funds raised donated to organisations addressing it.',
    },
  ],
};

/** Website entity, linked to the organisation. */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: `${BASE_URL}/`,
  name: site.name,
  description: site.description,
  inLanguage: 'en-CA',
  publisher: { '@id': `${BASE_URL}/#organization` },
};

/** Program catalogue as an ItemList of free Courses. */
export function programListSchema(programs: Program[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${BASE_URL}/programs/#catalog`,
    name: 'OTDP Programs',
    itemListElement: programs.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Course',
        name: p.title,
        description: p.description,
        url: `${BASE_URL}/programs/#${p.slug}`,
        isAccessibleForFree: true,
        inLanguage: 'en-CA',
        provider: { '@id': `${BASE_URL}/#organization` },
        offers: {
          '@type': 'Offer',
          price: 0,
          priceCurrency: 'CAD',
          availability: 'https://schema.org/InStock',
        },
      },
    })),
  };
}

/** FAQ rich-result + answer-engine fodder, built from the live FAQ data. */
export function faqPageSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${BASE_URL}/#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}
