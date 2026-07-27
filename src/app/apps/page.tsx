import { Suspense, lazy } from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { GlobalSearchCard } from '@/components/GlobalSearchCard';
import { ScrollToTop } from '@/components/ScrollToTop';
import { AppPage as AppPageContent } from '@/components/AppPage';
import { generateMeta } from '@/lib/generate-meta';

const APPS_FAQ_JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Is the SIM check app free to download?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, users can access the app download with core SIM verification capabilities and expand workflows based on their usage needs.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I verify CNIC-linked SIM details in the app?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The app is designed to support practical CNIC and number verification workflows using authorized, privacy-safe methods.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does the app support secure identity checks?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, the app emphasizes secure access, privacy controls, and structured verification actions for safer long-term usage.',
            },
        },
    ],
} as const;

export const metadata = generateMeta({
  title: 'SIM Owner Details Apps | SIM Owner Details Online Check, Phone Number Details & SIM Number Check Mobile Apps',
  description: 'Download SIM Owner Details apps for Pakistan to check SIM owner details online, find phone number details, get mobile number details with name, run SIM number check, and access sim details by number from your mobile.',
  path: '/apps',
  surface: 'apps',
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

export default function AppsPage() {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <script
                id="faq-jsonld-apps"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(APPS_FAQ_JSON_LD) }}
            />
            <Header />
            <main className="w-full">
                <div className="pt-16 sm:pt-20">
                    <GlobalSearchCard className="pt-5 sm:pt-6 pb-5 sm:pb-7" />
                    <AppPageContent />
                    <Suspense fallback={<SectionLoader />}>
                        <Footer />
                    </Suspense>
                </div>
            </main>
            <ScrollToTop />
        </div>
    );
}