import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site-url';
import SearchPageClient from './SearchPageClient';
import { generateMeta } from '@/lib/generate-meta';

const SITE_URL = getSiteUrl();

export const metadata = generateMeta({
    title: 'SIM Owner Details Search | SIM Owner Details Online Check, Phone Number Details & SIM Number Check',
    description: 'Run secure SIM owner details online check, phone number details, mobile number details with name, SIM number check, sim details by number, and live tracker sim data searches in a private session.',
    path: '/search',
    surface: 'search',
    type: 'website',
    noindex: true,
    nofollow: true,
});

export default function SearchPage() {
    return <SearchPageClient />;
}
