import { Suspense, lazy } from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { GlobalSearchCard } from '@/components/GlobalSearchCard';
import { ScrollToTop } from '@/components/ScrollToTop';
import { generateMeta, generateStructuredData, generateBreadcrumbSchema } from '@/lib/generate-meta';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://pak.simownerdetail.app';
const CONTACT_URL = `${SITE_URL}/contact`;

const CONTACT_DESCRIPTION =
  'Contact SIM Owner Details support for help with SIM owner details online check, phone number details, mobile number details, SIM number check, sim details by number, and live tracker sim data queries in Pakistan.';

export const metadata = generateMeta({
  title: 'Contact SIM Owner Details | Support for SIM Owner Details Online Check & Phone Number Details',
  description: CONTACT_DESCRIPTION,
  path: '/contact',
  surface: 'search',
  type: 'website',
});

const Footer = lazy(() => import('@/components/Footer').then((m) => ({ default: m.Footer })));

function SectionLoader() {
  return (
    <div className="w-full min-h-[220px] flex items-center justify-center">
      <div className="w-10 h-10 border-3 border-accent/30 border-t-accent rounded-full animate-spin"></div>
    </div>
  );
}

export default function ContactPage() {
  const contactPageSchema = generateStructuredData('webpage', {
    title: 'Contact SIM Owner Details',
    description: CONTACT_DESCRIPTION,
    path: '/contact',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Contact SIM Owner Details', url: CONTACT_URL },
  ]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <script
        id="contact-page-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        id="breadcrumb-jsonld-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="w-full">
        <div className="pt-16 sm:pt-20">
          <GlobalSearchCard className="pt-5 sm:pt-6 pb-5 sm:pb-7" />

          <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-muted/30 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Contact SIM Owner Details
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Need help with SIM owner details online check, phone number details, mobile number details with name, SIM number check, sim details by number, or live tracker sim data?
                  Reach our team through the channels below and include your query details for faster support.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <a
                  href="mailto:support@simownerdetail.app"
                  className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm hover:shadow-lg transition"
                >
                  <h2 className="text-xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Support Email
                  </h2>
                  <p className="text-muted-foreground text-sm mb-2">General help, troubleshooting, and verification guidance.</p>
                  <p className="text-accent font-medium">support@simownerdetail.app</p>
                </a>

                <a
                  href="mailto:partnerships@simownerdetail.app"
                  className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm hover:shadow-lg transition"
                >
                  <h2 className="text-xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Partnerships
                  </h2>
                  <p className="text-muted-foreground text-sm mb-2">Business collaboration, integrations, and enterprise workflows.</p>
                  <p className="text-accent font-medium">partnerships@simownerdetail.app</p>
                </a>

                <a
                  href="tel:+923001234567"
                  className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm hover:shadow-lg transition"
                >
                  <h2 className="text-xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Phone Support
                  </h2>
                  <p className="text-muted-foreground text-sm mb-2">For urgent account and verification-flow issues.</p>
                  <p className="text-accent font-medium">+92 300 1234567</p>
                </a>
              </div>

              <div className="rounded-3xl border border-border/60 bg-white p-6 sm:p-8 shadow-sm">
                <h2 className="text-2xl sm:text-3xl text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Before you contact us
                </h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Include the exact page URL where you faced the issue.</li>
                  <li>• Mention whether your query is mobile-number or CNIC-related.</li>
                  <li>• Share relevant timestamps and non-sensitive screenshots.</li>
                  <li>• Never share OTPs, full CNIC images, or sensitive credentials.</li>
                </ul>
              </div>
            </div>
          </section>

          <Suspense fallback={<SectionLoader />}>
            <Footer />
          </Suspense>
        </div>
      </main>

      <ScrollToTop />
    </div>
  );
}
