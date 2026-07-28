import { Suspense, lazy } from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { GlobalSearchCard } from '@/components/GlobalSearchCard';
import { ScrollToTop } from '@/components/ScrollToTop';
import { generateMeta, generateStructuredData, generateBreadcrumbSchema } from '@/lib/generate-meta';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://pak.simownerdetail.app';
const JAZZ_URL = `${SITE_URL}/carrier/jazz`;

const JAZZ_FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How to check Jazz SIM owner details by CNIC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use the official Jazz World app or dial *444# from your Jazz number. You can also visit a Jazz franchise with your CNIC for biometric verification and SIM ownership details.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I check Jazz SIM number details online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can check Jazz SIM owner details online through the Jazz World app after logging in with your number. For CNIC-based checks, use the official PTA 668 service or visit a Jazz service center.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Jazz SIM owner name check process?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To check Jazz SIM owner name, you can use the Jazz World app, call 111 from a Jazz number, visit a Jazz franchise with your CNIC, or use the PTA SIM Information System (668) for your own CNIC-linked numbers.',
      },
    },
  ],
} as const;

export const metadata = generateMeta({
  title: 'Jazz SIM Owner Details | Jazz SIM Number Check by CNIC, Owner Name & Verification',
  description: 'Check Jazz SIM owner details online in Pakistan. Learn how to verify Jazz SIM number by CNIC, check Jazz SIM owner name, and use official Jazz World app for SIM verification. Complete 2026 guide for Jazz SIM details.',
  path: '/carrier/jazz',
  surface: 'blog',
  type: 'website',
  images: ['/carrier/jazz-og.webp'],
});

const Footer = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));

function SectionLoader() {
  return (
    <div className="w-full min-h-[400px] flex items-center justify-center">
      <div className="w-10 h-10 border-3 border-accent/30 border-t-accent rounded-full animate-spin"></div>
    </div>
  );
}

export default function JazzCarrierPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Carrier Guides', url: `${SITE_URL}/blog/category/carrier-guides` },
    { name: 'Jazz SIM Owner Details', url: JAZZ_URL },
  ]);

  const carrierSchema = generateStructuredData('service', {
    name: 'Jazz SIM Owner Details Check',
    description: 'Official methods to check Jazz SIM owner details, SIM number by CNIC, and owner name verification in Pakistan.',
    serviceType: 'Telecom Verification Service',
  });

  return (
    <div className="min-h-screen overflow-x-hidden">
      <script
        id="jazz-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JAZZ_FAQ_JSON_LD) }}
      />
      <script
        id="jazz-carrier-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(carrierSchema) }}
      />
      <script
        id="jazz-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <main className="w-full">
        <div className="pt-16 sm:pt-20">
          <GlobalSearchCard className="pt-5 sm:pt-6 pb-5 sm:pb-7" />

          <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#FEF7F0] via-white to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-4">
                  <span className="text-orange-700 text-xs sm:text-sm uppercase tracking-wider font-medium">Jazz Carrier Guide</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Jazz SIM Owner Details Check
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Complete guide to check Jazz SIM owner details by CNIC, verify Jazz SIM number, check Jazz SIM owner name online, and use official Jazz World app for SIM verification in Pakistan.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <a href="#jazz-world-app" className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300">
                  <h2 className="text-xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Jazz World App</h2>
                  <p className="text-muted-foreground text-sm mb-2">Official app for Jazz SIM owner details, number check, and account management.</p>
                  <p className="text-orange-600 font-medium">Check Jazz SIM Details →</p>
                </a>

                <a href="#cnic-verification" className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-amber-300 transition-all duration-300">
                  <h2 className="text-xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>CNIC Verification</h2>
                  <p className="text-muted-foreground text-sm mb-2">Check Jazz SIM numbers registered on your CNIC using PTA 668 service.</p>
                  <p className="text-amber-600 font-medium">Verify by CNIC →</p>
                </a>

                <a href="#franchise-visit" className="rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-yellow-300 transition-all duration-300">
                  <h2 className="text-xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Visit Franchise</h2>
                  <p className="text-muted-foreground text-sm mb-2">Biometric verification at Jazz service centers for complete SIM ownership details.</p>
                  <p className="text-yellow-600 font-medium">Find Nearest Center →</p>
                </a>
              </div>
            </div>
          </section>

          <section id="jazz-world-app" className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-4">
                    <span className="text-orange-700 text-xs sm:text-sm uppercase tracking-wider font-medium">Method 1: Official App</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary mb-4 sm:mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Check Jazz SIM Owner Details via Jazz World App
                  </h2>
                  <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    The Jazz World app is the official and most reliable way to check your Jazz SIM owner details, manage your account, and verify SIM information. It provides real-time data directly from Jazz's systems.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-600 text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="text-primary font-semibold">Download Jazz World App</h3>
                        <p className="text-sm text-muted-foreground">Available on Google Play Store and Apple App Store</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-600 text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="text-primary font-semibold">Register with Your Jazz Number</h3>
                        <p className="text-sm text-muted-foreground">Enter your Jazz mobile number and verify via OTP</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-600 text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="text-primary font-semibold">Access SIM Owner Details</h3>
                        <p className="text-sm text-muted-foreground">Navigate to "My Account" or "SIM Information" section to view owner name, CNIC, and SIM details</p>
                      </div>
                    </div>
                  </div>
                  <a href="https://play.google.com/store/apps/details?id=com.mobilink.jazzworld" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full hover:shadow-xl transition-all duration-300 text-sm font-medium">
                    Download Jazz World App
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </a>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl sm:rounded-3xl p-3 shadow-2xl">
                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6">
                      <div className="text-center">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <svg className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl sm:text-2xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Jazz World App</h3>
                        <p className="text-muted-foreground text-sm sm:text-base">Official Jazz Self-Care App</p>
                        <div className="mt-4 flex justify-center gap-2">
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Verified Source</span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Real-time Data</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="cnic-verification" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#FEF7F0] via-white to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl sm:rounded-3xl p-3 shadow-2xl">
                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6">
                      <div className="text-center">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <svg className="w-10 h-10 sm:w-12 sm:h-12 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="text-xl sm:text-2xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>PTA 668 Service</h3>
                        <p className="text-muted-foreground text-sm sm:text-base">Official CNIC-SIM Verification</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-4">
                    <span className="text-amber-700 text-xs sm:text-sm uppercase tracking-wider font-medium">Method 2: CNIC Check</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary mb-4 sm:mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Check Jazz SIM Numbers by CNIC Using PTA 668
                  </h2>
                  <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    The Pakistan Telecommunication Authority (PTA) provides a free SMS service (668) to check how many SIMs are registered against your CNIC across all networks, including Jazz.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                      <h3 className="text-primary font-semibold mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                        How to Use 668 for Jazz SIM Check
                      </h3>
                      <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li>Open SMS app on any phone</li>
                        <li>Type your 13-digit CNIC (without dashes)</li>
                        <li>Send to <strong className="text-primary">668</strong></li>
                        <li>Receive reply with SIM count per network</li>
                        <li>Look for "Jazz" or "Mobilink" in the response</li>
                      </ol>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                      <h3 className="text-primary font-semibold mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Important Notes
                      </h3>
                      <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li>Cost: Standard SMS rates apply</li>
                        <li>Shows total SIMs per network, not individual numbers</li>
                        <li>For detailed Jazz SIM owner name, visit franchise</li>
                        <li>Only works for your own CNIC verification</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="franchise-visit" className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-4">
                  <span className="text-yellow-700 text-xs sm:text-sm uppercase tracking-wider font-medium">Method 3: In-Person</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary mb-4 sm:mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Visit Jazz Franchise for Complete SIM Owner Details
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  For complete Jazz SIM owner details including exact owner name, CNIC number, address, and all registered SIMs, visit an authorized Jazz franchise or service center with your original CNIC for biometric verification.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <h3 className="text-xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Bring Original CNIC</h3>
                  <p className="text-muted-foreground text-sm">Original CNIC mandatory for biometric verification</p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                  </div>
                  <h3 className="text-xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Biometric Verification</h3>
                  <p className="text-muted-foreground text-sm">Fingerprint scan matches NADRA records</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Get Complete Details</h3>
                  <p className="text-muted-foreground text-sm">Owner name, CNIC, address, all SIMs listed</p>
                </div>
              </div>

              <div className="bg-white border border-orange-200 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Find Nearest Jazz Franchise</h3>
                <p className="text-muted-foreground mb-6">Use the official Jazz store locator to find authorized franchises near you for SIM verification services.</p>
                <a href="https://www.jazz.com.pk/storelocator" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full hover:shadow-xl transition-all duration-300 text-sm font-medium">
                  Find Jazz Store Near Me
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </a>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#FEF7F0] via-white to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Jazz SIM Verification Keywords & Search Terms
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Popular search terms users type when looking for Jazz SIM owner details, SIM number check, and verification methods in Pakistan.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
                {[
                  'jazz sim owner details',
                  'jazz sim number check by cnic',
                  'jazz sim owner name',
                  'jazz sim owner details online',
                  'jazz sim verification',
                  'jazz sim details by number',
                  'jazz world app sim check',
                  'jazz sim owner name by number',
                  'check jazz sim on cnic',
                  'jazz sim information system',
                  'jazz number details check',
                  'jazz sim owner check online',
                ].map((keyword, i) => (
                  <span key={i} className="px-4 py-2 bg-white border border-orange-200 rounded-full text-sm text-orange-700 hover:bg-orange-50 hover:border-orange-300 transition-all cursor-default">
                    {keyword}
                  </span>
                ))}
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