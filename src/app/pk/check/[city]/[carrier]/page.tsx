import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { getCityBySlug, getCarrierBySlug, PakistanCity, PakistanCarrier } from '@/lib/pakistan-cities';
import { generateCityCarrierPageMeta, generateCityCarrierStructuredData, generateCityCarrierBreadcrumbs } from '@/lib/programmatic-seo';
import { Header } from '@/components/Header';
import { GlobalSearchCard } from '@/components/GlobalSearchCard';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Footer } from '@/components/Footer';
import { generateMeta } from '@/lib/generate-meta';

interface CityCarrierPageProps {
  params: Promise<{ city: string; carrier: string }>;
}

async function CityCarrierPageContent({ params }: CityCarrierPageProps) {
  const { city: citySlug, carrier: carrierSlug } = await params;
  const city = getCityBySlug(citySlug);
  const carrier = getCarrierBySlug(carrierSlug);

  if (!city || !carrier) {
    notFound();
  }

  const carrierName = carrier.name;
  const cityName = city.name;
  const carrierShortName = carrier.shortName;
  const carrierColor = carrier.color;
  const carrierLogoColor = carrier.logoColor;

  return (
    <div className="min-h-screen overflow-x-hidden">
      <script
        id="city-carrier-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateCityCarrierStructuredData(city, carrier)) }}
      />
      <script
        id="city-carrier-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateCityCarrierBreadcrumbs(citySlug, carrierSlug)) }}
      />

      <Header />
      <main className="w-full">
        <div className="pt-16 sm:pt-20">
          <GlobalSearchCard className="pt-5 sm:pt-6 pb-5 sm:pb-7" />

          <section className={`relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-${carrierColor.replace('#', '').toUpperCase()}15 via-white to-white`} style={{ '--carrier-color': carrierColor, '--carrier-logo-color': carrierLogoColor } as React.CSSProperties}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--carrier-color)]15 to-[var(--carrier-logo-color)]15 rounded-full mb-4">
                  <span className="text-[var(--carrier-color)] text-xs sm:text-sm uppercase tracking-wider font-medium">{carrierName} {cityName} Guide</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {carrierName} SIM Owner Details {cityName}
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Check {carrierName} SIM owner details in {cityName}, Pakistan. Verify {carrierName} SIM number by CNIC, check {carrierName} SIM owner name, use official {carrier.appName} app, and visit {carrierName} franchise in {cityName} for biometric verification. Complete 2026 guide for {carrierName} SIM details in {cityName}.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-10">
                <a href={`/pk/check/${citySlug}`} className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
                  <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  <h3 className="text-primary font-semibold mt-2">Back to {cityName}</h3>
                  <p className="text-sm text-muted-foreground mt-1">All carriers for {cityName}</p>
                </a>

                <div className="rounded-2xl bg-gradient-to-r from-[var(--carrier-color)] to-[var(--carrier-logo-color)] p-6 shadow-lg text-white">
                  <h3 className="text-xl font-semibold mb-1">{carrierName} {cityName}</h3>
                  <p className="text-white/80 text-sm">Complete verification guide</p>
                </div>

                <a href={carrier.appUrl} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-gradient-to-r from-[var(--carrier-color)] to-[var(--carrier-logo-color)] p-6 shadow-lg text-white hover:shadow-xl transition-all duration-300 group">
                  <h3 className="text-xl font-semibold mb-1">{carrier.appName} App</h3>
                  <p className="text-white/80 text-sm">Official verification app</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-white/90 font-medium group-hover:gap-2 transition-all">Open App <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></span>
                </a>

                <a href={carrier.franchiseUrl} target="_blank" rel="noopener noreferrer" className="rounded-2xl border-2 border-[var(--carrier-color)] bg-white p-6 shadow-sm hover:shadow-lg hover:bg-[var(--carrier-color)] hover:text-white transition-all duration-300 group">
                  <h3 className="text-xl font-semibold text-[var(--carrier-color)] group-hover:text-white mb-1">Find Franchise</h3>
                  <p className="text-muted-foreground group-hover:text-white/80 text-sm">Locate {carrierName} center in {cityName}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-[var(--carrier-color)] group-hover:text-white font-medium group-hover:gap-2 transition-all">Get Directions <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></span>
                </a>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--carrier-color)]15 to-[var(--carrier-logo-color)]15 rounded-full mb-4">
                    <span className="text-[var(--carrier-color)] text-xs sm:text-sm uppercase tracking-wider font-medium">Method 1: Official App</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary mb-4 sm:mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Check {carrierName} SIM Owner Details via {carrier.appName}
                  </h2>
                  <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    The {carrier.appName} app is the official and most reliable way to check your {carrierName} SIM owner details, manage your account, and verify SIM information in {cityName}. It provides real-time data directly from {carrierName}'s systems.
                  </p>
                  <div className="space-y-3 mb-8">
                    {[
                      `Download {carrier.appName} app from Google Play Store or Apple App Store`,
                      `Register with your {carrierName} mobile number and verify via OTP`,
                      `Navigate to "My Profile" or "SIM Information" section`,
                      `View owner name, CNIC (last 4 digits), SIM status, and activation date`,
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--carrier-color)] to-[var(--carrier-logo-color)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <span className="text-white text-sm font-bold">{i + 1}</span>
                        </div>
                        <div>
                          <h3 className="text-primary font-semibold">{i + 1}. {step.split(' ').slice(0, 4).join(' ')}...</h3>
                          <p className="text-sm text-muted-foreground">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a href={carrier.appUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--carrier-color)] to-[var(--carrier-logo-color)] text-white rounded-full hover:shadow-xl transition-all duration-300 text-sm font-medium">
                    Download {carrier.appName}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </a>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-[var(--carrier-color)] to-[var(--carrier-logo-color)] rounded-2xl sm:rounded-3xl p-3 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                      <div className="h-full bg-gradient-to-br from-[var(--carrier-color)]20 to-white flex items-center justify-center">
                        <div className="text-center p-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[var(--carrier-color)] to-[var(--carrier-logo-color)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <span className="text-3xl sm:text-4xl font-bold text-white">{carrierShortName}</span>
                          </div>
                          <h3 className="text-xl sm:text-2xl text-primary mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{carrier.appName}</h3>
                          <p className="text-muted-foreground text-sm sm:text-base">Official {carrierName} Self-Care App</p>
                          <div className="mt-4 flex justify-center gap-2">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm">Verified Source</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm">Real-time Data</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[var(--carrier-color)]10 via-white to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative">
                  <div className={`bg-gradient-to-br from-[var(--carrier-color)] to-[var(--carrier-logo-color)] rounded-2xl sm:rounded-3xl p-3 shadow-2xl`}>
                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6">
                      <div className="text-center">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[var(--carrier-color)]15 to-[var(--carrier-logo-color)]15 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--carrier-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-15 to-orange-15 rounded-full mb-4">
                    <span className="text-amber-700 text-xs sm:text-sm uppercase tracking-wider font-medium">Method 2: CNIC Check</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary mb-4 sm:mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Check {carrierName} SIM Numbers by CNIC Using PTA 668
                  </h2>
                  <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    The Pakistan Telecommunication Authority (PTA) provides a free SMS service (668) to check how many SIMs are registered against your CNIC across all networks, including {carrierName}.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                      <h3 className="text-primary font-semibold mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                        How to Use 668 for {carrierName} SIM Check in {cityName}
                      </h3>
                      <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li>Open SMS app on any active phone</li>
                        <li>Type your 13-digit CNIC (without dashes)</li>
                        <li>Send to <strong className="text-primary">668</strong></li>
                        <li>Receive reply with SIM count per network</li>
                        <li>Look for "{carrierName}" or "{carrierShortName}" in the response</li>
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
                        <li>For detailed {carrierName} SIM owner name, visit franchise</li>
                        <li>Only works for your own CNIC verification</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--carrier-color)]15 to-[var(--carrier-logo-color)]15 rounded-full mb-4">
                  <span className="text-[var(--carrier-color)] text-xs sm:text-sm uppercase tracking-wider font-medium">Method 3: In-Person</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary mb-4 sm:mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Visit {carrierName} Franchise in {cityName} for Complete SIM Owner Details
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  For complete {carrierName} SIM owner details including exact owner name, CNIC number, address, and all registered SIMs, visit an authorized {carrierName} franchise or service center in {cityName} with your original CNIC for biometric verification.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-to-br from-[var(--carrier-color)]10 to-[var(--carrier-logo-color)]10 border border-[var(--carrier-color)]20 rounded-2xl p-6 hover:shadow-lg transition-shadow group">
                  <div className="w-14 h-14 bg-[var(--carrier-color)]15 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-[var(--carrier-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <h3 className="text-xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Bring Original CNIC</h3>
                  <p className="text-muted-foreground text-sm">Original CNIC mandatory for biometric verification at {carrierName} {cityName} franchise</p>
                </div>
                <div className="bg-gradient-to-br from-[var(--carrier-color)]10 to-[var(--carrier-logo-color)]10 border border-[var(--carrier-color)]20 rounded-2xl p-6 hover:shadow-lg transition-shadow group">
                  <div className="w-14 h-14 bg-[var(--carrier-color)]15 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-[var(--carrier-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                  </div>
                  <h3 className="text-xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Biometric Verification</h3>
                  <p className="text-muted-foreground text-sm">Fingerprint scan matches NADRA records for secure {carrierName} SIM ownership confirmation</p>
                </div>
                <div className="bg-gradient-to-br from-[var(--carrier-color)]10 to-[var(--carrier-logo-color)]10 border border-[var(--carrier-color)]20 rounded-2xl p-6 hover:shadow-lg transition-shadow group">
                  <div className="w-14 h-14 bg-[var(--carrier-color)]15 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-[var(--carrier-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Get Complete Details</h3>
                  <p className="text-muted-foreground text-sm">Owner name, CNIC, address, all SIMs listed for {carrierName} in {cityName}</p>
                </div>
              </div>

              <div className="bg-white border border-[var(--carrier-color)]20 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Find Nearest {carrierName} Franchise in {cityName}</h3>
                <p className="text-muted-foreground mb-6">Use the official {carrierName} store locator to find authorized franchises near you for SIM verification services.</p>
                <a href={carrier.franchiseUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--carrier-color)] to-[var(--carrier-logo-color)] text-white rounded-full hover:shadow-xl transition-all duration-300 text-sm font-medium">
                  Find {carrierName} Store in {cityName}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </a>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[var(--carrier-color)]10 via-white to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {carrierName} SIM Verification Keywords for {cityName}
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Popular search terms users type when looking for {carrierName} SIM owner details, number check, and verification methods in {cityName}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
                {[
                  `${carrierShortName.toLowerCase()} sim owner details ${cityName.toLowerCase()}`,
                  `${carrierShortName.toLowerCase()} sim number check ${cityName.toLowerCase()}`,
                  `${carrierShortName.toLowerCase()} sim owner name ${cityName.toLowerCase()}`,
                  `${carrierShortName.toLowerCase()} sim verification ${cityName.toLowerCase()}`,
                  `${cityName.toLowerCase()} ${carrierShortName.toLowerCase()} sim details`,
                  `${cityName.toLowerCase()} ${carrierShortName.toLowerCase()} number check`,
                  `${carrierShortName.toLowerCase()} {carrier.appName.toLowerCase().replace(' ', '-')} ${cityName.toLowerCase()}`,
                  `${carrierShortName.toLowerCase()} sim owner name ${cityName.toLowerCase()} online`,
                  `check ${carrierShortName.toLowerCase()} sim on cnic ${cityName.toLowerCase()}`,
                  `${carrierShortName.toLowerCase()} sim information system ${cityName.toLowerCase()}`,
                  `${carrierShortName.toLowerCase()} number details check ${cityName.toLowerCase()}`,
                  `${carrierShortName.toLowerCase()} sim owner check online ${cityName.toLowerCase()}`,
                ].map((keyword, i) => (
                  <span key={i} className="px-4 py-2 bg-white border border-[var(--carrier-color)]20 rounded-full text-sm text-[var(--carrier-color)] hover:bg-[var(--carrier-color)]5 hover:border-[var(--carrier-color)]30 transition-all cursor-default">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <Suspense fallback={<div className="w-full min-h-[200px] flex items-center justify-center"><div className="w-10 h-10 border-3 border-accent/30 border-t-accent rounded-full animate-spin"></div></div>}>
            <Footer />
          </Suspense>
        </div>
      </main>
      <ScrollToTop />
    </div>
  );
}

export async function generateStaticParams() {
  const combinations = [];
  const cities = [
    'karachi', 'lahore', 'faisalabad', 'rawalpindi', 'multan', 'hyderabad',
    'gujranwala', 'peshawar', 'quetta', 'islamabad', 'sargodha', 'sialkot',
    'bahawalpur', 'sukkur', 'jhang', 'sheikhupura', 'gujrat', 'mardan',
    'kasur', 'sahiwal', 'okara', 'mirpur-khas', 'rahim-yar-khan'
  ];
  const carriers = ['jazz', 'zong', 'telenor', 'ufone'];

  for (const city of cities) {
    for (const carrier of carriers) {
      combinations.push({ city, carrier });
    }
  }
  return combinations;
}

export async function generateMetadata({ params }: CityCarrierPageProps): Promise<Metadata> {
  const { city, carrier } = await params;
  return generateCityCarrierPageMeta(city, carrier);
}

export default async function CityCarrierPage({ params }: CityCarrierPageProps) {
  return <CityCarrierPageContent params={params} />;
}