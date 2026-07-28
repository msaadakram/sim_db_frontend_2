import { Metadata } from 'next';
import { Suspense } from 'react';
import { PAKISTAN_CARRIERS } from '@/lib/pakistan-cities';
import { generateCarrierComparisonMeta, generateCarrierComparisonStructuredData } from '@/lib/programmatic-seo';
import { Header } from '@/components/Header';
import { GlobalSearchCard } from '@/components/GlobalSearchCard';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Footer } from '@/components/Footer';
import { generateMeta } from '@/lib/generate-meta';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.simownerdetail.app';

export const metadata = generateCarrierComparisonMeta();

export default function CarrierComparisonPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <script
        id="carrier-compare-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateCarrierComparisonStructuredData()) }}
      />

      <Header />
      <main className="w-full">
        <div className="pt-16 sm:pt-20">
          <GlobalSearchCard className="pt-5 sm:pt-6 pb-5 sm:pb-7" />

          <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#F5F7FA] via-white to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-4">
                  <span className="text-primary text-xs sm:text-sm uppercase tracking-wider font-medium">Carrier Comparison</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Compare Pakistan Carriers
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Compare Jazz, Zong, Telenor, and Ufone SIM verification methods, USSD codes, apps, and franchise services. Find the best carrier for SIM owner details check, number verification, and CNIC-based SIM lookup in Pakistan.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {PAKISTAN_CARRIERS.map((carrier) => (
                  <a
                    key={carrier.slug}
                    href={`/pk/carriers/${carrier.slug}`}
                    className="relative rounded-2xl bg-gradient-to-br from-[var(--carrier-color)] to-[var(--carrier-logo-color)] p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group text-white overflow-hidden"
                    style={{ '--carrier-color': carrier.color, '--carrier-logo-color': carrier.logoColor } as React.CSSProperties}
                  >
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
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Detailed Comparison: SIM Verification Features
                </h2>
                <p className="text-muted-foreground text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Side-by-side comparison of SIM owner details verification methods across all major Pakistan carriers
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="bg-primary/5 border-b border-border/60">
                      <th className="text-left px-4 py-3 font-semibold text-primary">Feature</th>
                      {PAKISTAN_CARRIERS.map((carrier) => (
                        <th key={carrier.slug} className="text-left px-4 py-3 font-semibold" style={{ color: carrier.color }}>
                          {carrier.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    <tr className="hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium text-primary">Official App</td>
                      {PAKISTAN_CARRIERS.map((carrier) => (
                        <td key={carrier.slug} className="px-4 py-3">{carrier.appName}</td>
                      ))}
                    </tr>
                    <tr className="hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium text-primary">Primary USSD Code</td>
                      {PAKISTAN_CARRIERS.map((carrier) => (
                        <td key={carrier.slug} className="px-4 py-3 font-mono font-semibold" style={{ color: carrier.color }}>
                          {carrier.ussdCodes[0]}
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium text-primary">Alternative USSD Codes</td>
                      {PAKISTAN_CARRIERS.map((carrier) => (
                        <td key={carrier.slug} className="px-4 py-3 font-mono text-sm">
                          {carrier.ussdCodes.slice(1).join(', ') || '—'}
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium text-primary">SIM Owner Details Check</td>
                      {PAKISTAN_CARRIERS.map((carrier) => (
                        <td key={carrier.slug} className="px-4 py-3">
                          <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-xs">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            App, Franchise, 668
                          </span>
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium text-primary">CNIC-based SIM Check</td>
                      {PAKISTAN_CARRIERS.map((carrier) => (
                        <td key={carrier.slug} className="px-4 py-3">
                          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full text-xs">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            668 SMS + App
                          </span>
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium text-primary">Biometric Verification</td>
                      {PAKISTAN_CARRIERS.map((carrier) => (
                        <td key={carrier.slug} className="px-4 py-3">
                          <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full text-xs">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            At Franchise
                          </span>
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium text-primary">eSIM Support</td>
                      {PAKISTAN_CARRIERS.map((carrier) => (
                        <td key={carrier.slug} className="px-4 py-3">
                          {carrier.slug === 'telenor' ? (
                            <span className="inline-flex items-center gap-1.5 bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full text-xs">
                              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                              Available
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-500 px-2.5 py-1 rounded-full text-xs">
                              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                              Limited/Coming Soon
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium text-primary">Franchise Locator</td>
                      {PAKISTAN_CARRIERS.map((carrier) => (
                        <td key={carrier.slug} className="px-4 py-3">
                          <a href={carrier.franchiseUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: carrier.color }}>
                            Official Store Locator
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                          </a>
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium text-primary">Customer Support</td>
                      {PAKISTAN_CARRIERS.map((carrier) => (
                        <td key={carrier.slug} className="px-4 py-3 text-sm">
                          {carrier.slug === 'jazz' && '111 / *444#'}
                          {carrier.slug === 'zong' && '310 / *310#'}
                          {carrier.slug === 'telenor' && '345 / *444#'}
                          {carrier.slug === 'ufone' && '333 / *336#'}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#F5F7FA] via-white to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Which Carrier Should You Choose?
                </h2>
                <p className="text-muted-foreground text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Quick decision guide based on your verification needs in Pakistan
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Best Overall: Jazz</h3>
                  <p className="text-muted-foreground text-sm">Largest network, Jazz World app most mature, widest franchise coverage</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="text-xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Best for eSIM: Telenor</h3>
                  <p className="text-muted-foreground text-sm">Only major carrier with official eSIM support in Pakistan (My Telenor app)</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Best USSD Codes: Ufone</h3>
                  <p className="text-muted-foreground text-sm">Multiple quick codes (*336#, *1#, *780*3#) for instant number check</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  </div>
                  <h3 className="text-xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Best App UI: Zong</h3>
                  <p className="text-muted-foreground text-sm">Clean, modern Self-Care app with real-time data and easy navigation</p>
                </div>
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
                    <a key={i} href={`/pk/check/${combo.city}/${combo.carrier}`} className="rounded-xl border border-[var(--carrier-color)]20 bg-white p-4 hover:shadow-lg hover:border-[var(--carrier-color)]30 hover:bg-[var(--carrier-color)]5 transition-all duration-300 group" style={{ '--carrier-color': carrier.color } as React.CSSProperties}>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[var(--carrier-color)]15 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ '--carrier-color': carrier.color } as React.CSSProperties}>
                          <span className="text-xs font-bold" style={{ color: carrier.color }}>{carrier.shortName}</span>
                        </div>
                        <div>
                          <h4 className="text-primary font-semibold text-sm group-hover:text-[var(--carrier-color)] transition-colors" style={{ '--carrier-color': carrier.color } as React.CSSProperties}>{carrier.name} {cityName}</h4>
                          <p className="text-xs text-muted-foreground">SIM Owner Details</p>
                        </div>
                      </div>
                    </a>
                  )
                })}
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