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
    'OTDP is a student-led non-profit providing free, flexible tutoring, guidance and academic resources — online or in person — for every student across Ontario.',
  applicationName: 'OTDP',
  authors: [{ name: 'Ontario Thriving Development Program' }],
  creator: 'Ontario Thriving Development Program',
  publisher: 'Ontario Thriving Development Program',
  category: 'education',
  keywords: [
    'Ontario tutoring',
    'free tutoring Ontario',
    'student-led non-profit',
    'IB tutoring',
    'AP tutoring',
    'SHSM',
    'French Immersion tutoring',
    'online tutoring Ontario',
    'free student tutoring GTA',
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
      'Free, flexible tutoring for every student in Ontario — online or in person. No tuition, no entry tests.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ontario Thriving Development Program',
    description: 'Free, flexible tutoring for every student in Ontario — online or in person.',
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
