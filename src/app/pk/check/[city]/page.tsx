import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { getCityBySlug, getAllCitySlugs, getAllCarrierSlugs, PakistanCity } from '@/lib/pakistan-cities';
import { generateCityPageMeta, generateCityStructuredData, generateCityBreadcrumbs } from '@/lib/programmatic-seo';
import { Header } from '@/components/Header';
import { GlobalSearchCard } from '@/components/GlobalSearchCard';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Footer } from '@/components/Footer';
import { generateMeta } from '@/lib/generate-meta';

interface CityPageProps {
  params: Promise<{ city: string }>;
}

async function CityPageContent({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <script
        id="city-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateCityStructuredData(city)) }}
      />
      <script
        id="city-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateCityBreadcrumbs(citySlug)) }}
      />

      <Header />
      <main className="w-full">
        <div className="pt-16 sm:pt-20">
          <GlobalSearchCard className="pt-5 sm:pt-6 pb-5 sm:pb-7" />

          <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#F5F7FA] via-white to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-4">
                  <span className="text-primary text-xs sm:text-sm uppercase tracking-wider font-medium">{city.name} City Guide</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                  SIM Owner Details {city.name}
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Complete guide to check SIM owner details in {city.name}, Pakistan. Find phone number details with name, mobile number details with owner name and address, SIM number check, SIM details by number, and live tracker SIM data for {city.name}. Official methods for Jazz, Zong, Telenor, Ufone verification in {city.name}.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <a href={`/pk/check/${citySlug}/jazz`} className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-sm font-bold">JAZZ</span>
                    </div>
                    <div>
                      <h3 className="text-primary font-semibold">Jazz SIM</h3>
                      <p className="text-xs text-muted-foreground">{city.name} Verification</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Check Jazz SIM owner details, number by CNIC, owner name in {city.name}</p>
                  <span className="text-orange-600 font-medium group-hover:underline">View Guide →</span>
                </a>

                <a href={`/pk/check/${citySlug}/zong`} className="rounded-2xl border border-green-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-green-300 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-sm font-bold">ZONG</span>
                    </div>
                    <div>
                      <h3 className="text-primary font-semibold">Zong 4G</h3>
                      <p className="text-xs text-muted-foreground">{city.name} Verification</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Check Zong SIM owner details, number check online, owner name in {city.name}</p>
                  <span className="text-green-600 font-medium group-hover:underline">View Guide →</span>
                </a>

                <a href={`/pk/check/${citySlug}/telenor`} className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-sm font-bold">TELENOR</span>
                    </div>
                    <div>
                      <h3 className="text-primary font-semibold">Telenor</h3>
                      <p className="text-xs text-muted-foreground">{city.name} Verification</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Check Telenor SIM owner details, number by CNIC, eSIM, owner name in {city.name}</p>
                  <span className="text-blue-600 font-medium group-hover:underline">View Guide →</span>
                </a>

                <a href={`/pk/check/${citySlug}/ufone`} className="rounded-2xl border border-purple-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-purple-300 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-sm font-bold">UFONE</span>
                    </div>
                    <div>
                      <h3 className="text-primary font-semibold">Ufone</h3>
                      <p className="text-xs text-muted-foreground">{city.name} Verification</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Check Ufone SIM owner details, number check code (*336#), owner name in {city.name}</p>
                  <span className="text-purple-600 font-medium group-hover:underline">View Guide →</span>
                </a>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {city.name} SIM Verification - All Methods
                </h2>
                <p className="text-muted-foreground text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Official ways to check SIM owner details, phone number details, and mobile number verification in {city.name}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>PTA 668 SMS Check</h3>
                  <p className="text-muted-foreground mb-4">Send your 13-digit CNIC to 668 to get SIM count per network for {city.name}. Free, official, instant results.</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Works for all networks</li>
                    <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Shows SIM count per carrier</li>
                    <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Official PTA service</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Carrier Self-Care Apps</h3>
                  <p className="text-muted-foreground mb-4">Use official apps: Jazz World, Zong Self-Care, My Telenor, Ufone Self-Care for real-time SIM owner details.</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Real-time owner details</li>
                    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> CNIC & SIM number display</li>
                    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Biometric verification status</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Visit Franchise</h3>
                  <p className="text-muted-foreground mb-4">Visit {city.name} Jazz, Zong, Telenor, Ufone franchises with original CNIC for biometric verification and complete SIM ownership details.</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> Original CNIC required</li>
                    <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> Fingerprint biometric scan</li>
                    <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> Get all SIMs listed</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-primary/20 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {city.name} Area-Specific SIM Verification
                </h3>
                <p className="text-muted-foreground mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Popular areas in {city.name} where users frequently check SIM owner details:
                </p>
                <div className="flex flex-wrap gap-2">
                  {city.keywords.slice(0, 15).map((keyword, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-primary/5 border border-primary/20 rounded-full text-sm text-primary hover:bg-primary/10 hover:border-primary/30 transition-all cursor-default"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#F5F7FA] via-white to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Compare Carriers for {city.name}
                </h2>
                <p className="text-muted-foreground text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Find the best carrier for SIM verification, number check, and owner details in {city.name}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <a href={`/pk/check/${citySlug}/jazz`} className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-6 sm:p-8 text-white hover:shadow-xl transition-shadow group">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold">JAZZ</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Jazz World App</h3>
                  <p className="text-white/80 mb-4">Official app for Jazz SIM owner details, CNIC check, number verification</p>
                  <span className="inline-flex items-center gap-1 text-white/90 font-medium">
                    View {city.name} Guide
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                </a>
                <a href={`/pk/check/${citySlug}/zong`} className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 sm:p-8 text-white hover:shadow-xl transition-shadow group">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold">ZONG</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Zong Self-Care</h3>
                  <p className="text-white/80 mb-4">Official app for Zong SIM owner details, number check online, owner name</p>
                  <span className="inline-flex items-center gap-1 text-white/90 font-medium">
                    View {city.name} Guide
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                </a>
                <a href={`/pk/check/${citySlug}/telenor`} className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl p-6 sm:p-8 text-white hover:shadow-xl transition-shadow group">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold">TELENOR</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">My Telenor App</h3>
                  <p className="text-white/80 mb-4">Official app for Telenor SIM owner details, eSIM, CNIC check, number verification</p>
                  <span className="inline-flex items-center gap-1 text-white/90 font-medium">
                    View {city.name} Guide
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                </a>
                <a href={`/pk/check/${citySlug}/ufone`} className="bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl p-6 sm:p-8 text-white hover:shadow-xl transition-shadow group">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold">UFONE</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Ufone Self-Care</h3>
                  <p className="text-white/80 mb-4">Official app for Ufone SIM owner details, *336# check code, owner name</p>
                  <span className="inline-flex items-center gap-1 text-white/90 font-medium">
                    View {city.name} Guide
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                </a>
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
  return getAllCitySlugs().map(city => ({ city }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city } = await params;
  return generateCityPageMeta(city);
}

export default async function CityPage({ params }: CityPageProps) {
  return <CityPageContent params={params} />;
}