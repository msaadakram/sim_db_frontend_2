import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { getSiteUrl } from '@/lib/site-url';
import { generateMeta, generateStructuredData, generateOrganizationSchema } from '@/lib/generate-meta';

const SITE_URL = getSiteUrl();

export const metadata = generateMeta({
  title: 'SIM Owner Details | Phone Number Details & Mobile Number Check Online',
  description:
    'Check SIM owner details online, find phone number details, mobile number details, and SIM number check instantly. Verified SIM information system with sim owner details by number, sim details by number, and live tracker sim data.',
  path: '/',
  surface: 'home',
  type: 'website',
  images: ['/og-default.png'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = generateStructuredData('website', {});
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
