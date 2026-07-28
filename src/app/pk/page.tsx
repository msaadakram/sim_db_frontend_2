import { Metadata } from 'next';
import Link from 'next/link';
import { PAKISTAN_CITIES, PAKISTAN_CARRIERS } from '@/lib/pakistan-cities';
import { generateCityStructuredData, generateCityBreadcrumbs } from '@/lib/programmatic-seo';
import { generateMeta, generateStructuredData, generateBreadcrumbSchema } from '@/lib/generate-meta';
import { Header } from '@/components/Header';
import { GlobalSearchCard } from '@/components/GlobalSearchCard';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Footer } from '@/components/Footer';
import { Suspense } from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.simownerdetail.app';

const PK_INDEX_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Pakistan SIM Owner Details - Complete Verification Guide',
  description: 'Complete Pakistan SIM verification guide. Check SIM owner details, phone number details, mobile number details, SIM number check, SIM details by number, and live tracker SIM data for all cities and carriers (Jazz, Zong, Telenor, Ufone) in Pakistan.',
  url: `${SITE_URL}/pk`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'SIM Owner Details',
    url: SITE_URL,
  },
  mainEntity: {
    '@type': 'ItemList',
    name: 'Pakistan Cities SIM Verification Guides',
    itemListElement: PAKISTAN_CITIES.slice(0, 10).map((city, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'WebPage',
        name: `SIM Owner Details ${city.name}`,
        url: `${SITE_URL}/pk/check/${city.slug}`,
        description: `Check SIM owner details in ${city.name}, Pakistan. Phone number details, mobile number details, SIM number check for Jazz, Zong, Telenor, Ufone.`,
      },
    })),
  },
};

export const metadata: Metadata = {
  title: 'Pakistan SIM Owner Details | Phone Number Details, Mobile Number Check & SIM Verification',
  description: 'Complete Pakistan SIM verification guide. Check SIM owner details, phone number details, mobile number details with name, SIM number check, SIM details by number, and live tracker SIM data for all cities and carriers.',
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: `${SITE_URL}/pk`,
    siteName: 'SIM Owner Details',
    title: 'Pakistan SIM Owner Details | Complete Verification Guide for All Cities & Carriers',
    description: 'Check SIM owner details in Pakistan cities. Phone number details, mobile number details with name, SIM number check. Official Jazz, Zong, Telenor, Ufone verification.',
    images: [{ url: `${SITE_URL}/og-pk.webp`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pakistan SIM Owner Details | Complete Verification Guide',
    description: 'Check SIM owner details in Pakistan cities. Phone number details, mobile number details with name, SIM number check. Official Jazz, Zong, Telenor, Ufone verification.',
    images: [`${SITE_URL}/og-pk.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PakistanIndexPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <script
        id="pk-index-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PK_INDEX_SCHEMA) }}
      />

      <Header />
      <main className="w-full">
        <div className="pt-16 sm:pt-20">
          <GlobalSearchCard className="pt-5 sm:pt-6 pb-5 sm:pb-7" />

          <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-primary via-accent to-primary/10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                  <span className="text-white text-xs sm:text-sm uppercase tracking-wider font-medium">Pakistan Complete Guide</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Pakistan SIM Owner Details
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Complete SIM verification guide for Pakistan. Check SIM owner details, phone number details, mobile number details with name, SIM number check, and live tracker SIM data across all cities and carriers.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
                  <Link href="/pk/check" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-full hover:bg-white/90 transition-all duration-300 text-sm font-medium shadow-lg">
                    Browse All Cities
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </Link>
                  <Link href="/pk/carriers/compare" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300 text-sm font-medium">
                    Compare Carriers
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </Link>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{PAKISTAN_CITIES.length}</div>
                  <div className="text-white/80 text-sm">Major Cities</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{PAKISTAN_CARRIERS.length}</div>
                  <div className="text-white/80 text-sm">Major Carriers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1">200+</div>
                  <div className="text-white/80 text-sm">City-Carrier Guides</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1">100%</div>
                  <div className="text-white/80 text-sm">Official Methods</div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Major Pakistan Cities - SIM Verification Guides
                </h2>
                <p className="text-muted-foreground text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Click on any city to access complete SIM owner details verification guides for all carriers
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {PAKISTAN_CITIES.slice(0, 16).map((city, i) => (
                  <Link key={city.slug} href={`/pk/check/${city.slug}`} className="group relative bg-white border border-border/60 rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 hover:scale-[1.02] transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className="text-white text-xs font-bold">{city.name.slice(0, 3).toUpperCase()}</span>
                        </div>
                        <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">{city.province}</span>
                      </div>
                      <h3 className="text-xl text-primary mb-2 group-hover:text-accent transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {city.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">Population: {city.population.toLocaleString()}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {PAKISTAN_CARRIERS.slice(0, 4).map((carrier, ci) => (
                          <span key={ci} className="px-2 py-1 bg-[var(--carrier-color)]10 text-[var(--carrier-color)] rounded-full text-xs font-medium group-hover:bg-[var(--carrier-color)] group-hover:text-white transition-all" style={({ '--carrier-color': carrier.color } as React.CSSProperties)}>
                            {carrier.shortName}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
                        View {city.name} Guide
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link href="/pk/check" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full hover:bg-accent transition-all duration-300 text-sm font-medium shadow-lg">
                  View All {PAKISTAN_CITIES.length} Cities
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </Link>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#F5F7FA] via-white to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Major Pakistan Carriers - SIM Verification
                </h2>
                <p className="text-muted-foreground text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Compare and access official SIM verification methods for all major Pakistan telecom carriers
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {PAKISTAN_CARRIERS.map((carrier) => (
                  <Link key={carrier.slug} href={`/pk/carriers/${carrier.slug}`} className="relative rounded-2xl bg-gradient-to-br from-[var(--carrier-color)] to-[var(--carrier-logo-color)] p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group text-white overflow-hidden" style={({ '--carrier-color': carrier.color, '--carrier-logo-color': carrier.logoColor } as React.CSSProperties)}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className="text-2xl font-bold">{carrier.shortName}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{carrier.name}</h3>
                          <p className="text-white/80 text-sm">Pakistan Carrier</p>
                        </div>
                      </div>
                      <ul className="space-y-3 mb-6">
                        {carrier.ussdCodes.slice(0, 3).map((code, i) => (
                          <li key={i} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 group-hover:bg-white/20 transition-colors">
                            <span className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-sm font-mono font-bold">{code}</span>
                            <span className="text-white/90 text-sm">USSD Code</span>
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center gap-1 text-white/90 font-medium">
                        View Full Guide
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mb-12">
                <Link href="/pk/carriers/compare" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full hover:bg-accent transition-all duration-300 text-sm font-medium shadow-lg">
                  Compare All Carriers Side-by-Side
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </Link>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Popular City + Carrier Combinations
                </h2>
                <p className="text-muted-foreground text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Quick links to the most searched city-carrier SIM verification combinations in Pakistan
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { city: 'karachi', carrier: 'jazz' },
                  { city: 'karachi', carrier: 'zong' },
                  { city: 'karachi', carrier: 'telenor' },
                  { city: 'karachi', carrier: 'ufone' },
                  { city: 'lahore', carrier: 'jazz' },
                  { city: 'lahore', carrier: 'zong' },
                  { city: 'lahore', carrier: 'telenor' },
                  { city: 'lahore', carrier: 'ufone' },
                  { city: 'islamabad', carrier: 'jazz' },
                  { city: 'islamabad', carrier: 'zong' },
                  { city: 'faisalabad', carrier: 'jazz' },
                  { city: 'rawalpindi', carrier: 'jazz' },
                  { city: 'peshawar', carrier: 'telenor' },
                  { city: 'quetta', carrier: 'ufone' },
                  { city: 'multan', carrier: 'zong' },
                  { city: 'hyderabad', carrier: 'jazz' },
                ].map((combo, i) => {
                  const cityName = combo.city.charAt(0).toUpperCase() + combo.city.slice(1).replace('-', ' ');
                  const carrier = PAKISTAN_CARRIERS.find(c => c.slug === combo.carrier);
                  if (!carrier) return null;
                  return (
                    <Link key={i} href={`/pk/check/${combo.city}/${combo.carrier}`} className="rounded-xl border border-[var(--carrier-color)]20 bg-white p-4 hover:shadow-lg hover:border-[var(--carrier-color)]30 hover:bg-[var(--carrier-color)]5 transition-all duration-300 group" style={{ '--carrier-color': carrier.color } as React.CSSProperties}>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[var(--carrier-color)]15 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ '--carrier-color': carrier.color } as React.CSSProperties}>
                          <span className="text-xs font-bold" style={{ color: carrier.color }}>{carrier.shortName}</span>
                        </div>
                        <div>
                          <h4 className="text-primary font-semibold text-sm group-hover:text-[var(--carrier-color)] transition-colors" style={{ '--carrier-color': carrier.color } as React.CSSProperties}>{carrier.name} {cityName}</h4>
                          <p className="text-xs text-muted-foreground">SIM Owner Details</p>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#F5F7FA] via-white to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Official Verification Methods
                </h2>
                <p className="text-muted-foreground text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                  All verification methods are official, legal, and privacy-safe for Pakistan
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white border border-primary/20 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </div>
                  <h3 className="text-xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>PTA 668 SMS</h3>
                  <p className="text-muted-foreground mb-4">Send 13-digit CNIC to 668 for free SIM count check across all networks. Official PTA service.</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><span className="text-primary">✓</span> Free official service</li>
                    <li className="flex items-center gap-2"><span className="text-primary">✓</span> Shows SIM count per carrier</li>
                    <li className="flex items-center gap-2"><span className="text-primary">✓</span> Works for all Pakistan networks</li>
                  </ul>
                </div>

                <div className="bg-white border border-green-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-green-10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  </div>
                  <h3 className="text-xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Carrier Apps</h3>
                  <p className="text-muted-foreground mb-4">Official self-care apps: Jazz World, Zong Self-Care, My Telenor, Ufone Self-Care. Real-time owner details.</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Jazz World App</li>
                    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Zong Self-Care</li>
                    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> My Telenor</li>
                    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Ufone Self-Care</li>
                  </ul>
                </div>

                <div className="bg-white border border-amber-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-amber-10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <h3 className="text-xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Franchise Visit</h3>
                  <p className="text-muted-foreground mb-4">Visit authorized franchise with original CNIC for biometric verification and complete SIM ownership details.</p>                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> Original CNIC required</li>
                    <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> Fingerprint biometric scan</li>
                    <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> Get all SIMs listed</li>
                  </ul>
                </div>
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