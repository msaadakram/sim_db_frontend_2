import type { Metadata } from 'next';
import { HomeContent } from '@/components/HomeContent';
import { getHomepageBlogPosts } from '@/lib/blog';
import { generateMeta } from '@/lib/generate-meta';

export const metadata = generateMeta({
  title: 'SIM Owner Details Online | Phone Number Details, Mobile Number Details & SIM Number Check',
  description:
    'Check SIM owner details online instantly. Find phone number details, mobile number details with name, SIM number check, sim details by number, and live tracker sim data. Fast, reliable SIM information system for SIM owner details by number online.',
  path: '/',
  surface: 'home',
  type: 'website',
  images: ['/og-default.png'],
});

export default async function Page() {
  const blogPosts = getHomepageBlogPosts(6);

  return <HomeContent blogPosts={blogPosts} />;
}
