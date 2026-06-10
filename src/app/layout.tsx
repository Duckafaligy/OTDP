import type { Metadata } from 'next';
import { Inter, Fraunces, JetBrains_Mono, Caveat } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';
import { JsonLd } from '@/components/JsonLd';
import { organizationSchema, websiteSchema } from '@/lib/schema';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz', 'SOFT'],
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ontariothrivingdevelopmentprogram.org'),
  title: {
    default: 'Ontario Thriving Development Program',
    template: '%s | OTDP',
  },
  description:
    'OTDP is a student-led non-profit running a free, fully online platform that builds personalized study plans, teaches study techniques, and maps career paths — in your language — for every student across Ontario.',
  applicationName: 'OTDP',
  authors: [{ name: 'Ontario Thriving Development Program' }],
  creator: 'Ontario Thriving Development Program',
  publisher: 'Ontario Thriving Development Program',
  category: 'education',
  keywords: [
    'free study help Ontario',
    'online study platform Ontario',
    'automated study plans',
    'career path guidance students',
    'student-led non-profit',
    'IB study help',
    'AP study help',
    'SHSM',
    'French Immersion',
    'multilingual study resources',
    'OTDP',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: '/',
    siteName: 'Ontario Thriving Development Program',
    title: 'Ontario Thriving Development Program',
    description:
      'Free, fully online study help and career guidance for every student in Ontario — personalized plans, techniques and pathways, in your language. No tuition, no catch.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ontario Thriving Development Program',
    description:
      'Free, fully online study help and career guidance for every student in Ontario — in your language.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable} ${caveat.variable}`}
    >
      <body>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <LoadingScreen />
        <Nav />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
