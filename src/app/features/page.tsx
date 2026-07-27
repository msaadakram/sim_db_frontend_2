import { Suspense, lazy } from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { GlobalSearchCard } from '@/components/GlobalSearchCard';
import { ScrollToTop } from '@/components/ScrollToTop';
import { FeaturesPage as FeaturesPageContent } from '@/components/FeaturesPage';
import { generateMeta } from '@/lib/generate-meta';

const FEATURES_FAQ_JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What does the SIM verification feature include?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'It includes number checks, CNIC-linked verification workflows, and practical security guidance for identifying suspicious records.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I use these features for CNIC-based checks?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, the features cover CNIC-oriented validation flows and recommended next steps when unexpected records appear.',
            },
        },
        {
            '@type': 'Question',
            name: 'Are SIM verification features privacy-safe?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The platform is designed around legal, privacy-safe, and authorized verification methods for long-term account and identity security.',
            },
        },
    ],
} as const;

export const metadata = generateMeta({
  title: 'SIM Owner Details Features | SIM Owner Details Online Check, Phone Number Details & SIM Number Check Tools',
  description: 'Explore SIM Owner Details features for SIM owner details online check, phone number details with name, mobile number details with owner name, SIM number check, sim details by number, and live tracker sim data tools in Pakistan.',
  path: '/features',
  surface: 'features',
  type: 'website',
});

const Footer = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));

function SectionLoader() {
    return (
        <div className="w-full min-h-[400px] flex items-center justify-center">
            <div className="w-10 h-10 border-3 border-accent/30 border-t-accent rounded-full animate-spin"></div>
        </div>
    );
}

export default function FeaturesRoutePage() {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <script
                id="faq-jsonld-features"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(FEATURES_FAQ_JSON_LD) }}
            />
            <Header />
            <main className="w-full">
                <div className="pt-16 sm:pt-20">
                    <GlobalSearchCard className="pt-5 sm:pt-6 pb-5 sm:pb-7" />
                    <FeaturesPageContent />
                    <Suspense fallback={<SectionLoader />}>
                        <Footer />
                    </Suspense>
                </div>
            </main>
            <ScrollToTop />
        </div>
    );
}