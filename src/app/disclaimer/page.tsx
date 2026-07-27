import { Suspense, lazy } from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { GlobalSearchCard } from '@/components/GlobalSearchCard';
import { ScrollToTop } from '@/components/ScrollToTop';
import { DisclaimerPage as DisclaimerPageContent } from '@/components/DisclaimerPage';
import { generateMeta } from '@/lib/generate-meta';

export const metadata = generateMeta({
    title: 'SIM Owner Details Disclaimer | Legal, Privacy & SIM Owner Details Online Check Policy',
    description: 'Review SIM Owner Details legal, privacy, and acceptable-use policies for SIM owner details online check, phone number details, mobile number details with name, SIM number check, sim details by number, and live tracker sim data content, data handling, and user responsibilities in Pakistan.',
    path: '/disclaimer',
    surface: 'disclaimer',
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

export default function DisclaimerRoutePage() {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <Header />
            <main className="w-full">
                <div className="pt-16 sm:pt-20">
                    <GlobalSearchCard className="pt-5 sm:pt-6 pb-5 sm:pb-7" />
                    <DisclaimerPageContent />
                    <Suspense fallback={<SectionLoader />}>
                        <Footer />
                    </Suspense>
                </div>
            </main>
            <ScrollToTop />
        </div>
    );
}
