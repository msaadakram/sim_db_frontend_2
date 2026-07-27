import { Metadata } from 'next';
import { getSiteUrl } from './site-url';
import { getPageKeywordSet, getRelevantCsvKeywords, SIM_OWNER_SEO_KEYWORDS } from './seo-keywords';

const SITE_URL = getSiteUrl();
const SITE_NAME = 'SIM Owner Details';

interface MetaOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  surface?: 'home' | 'blog' | 'features' | 'apps' | 'disclaimer' | 'search' | 'article';
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  images?: string[];
  noindex?: boolean;
  nofollow?: boolean;
}

export function generateMeta(options: MetaOptions): Metadata {
  const {
    title,
    description,
    path = '',
    keywords = [],
    surface,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    section,
    tags,
    images = [],
    noindex = false,
    nofollow = false,
  } = options;

  const url = `${SITE_URL}${path}`;
  const defaultImage = `${SITE_URL}/og-default.png`;
  const ogImages = images.length > 0 ? images.map(img => `${SITE_URL}${img}`) : [defaultImage];

  let finalKeywords = [...keywords];
  if (surface) {
    finalKeywords = [...finalKeywords, ...getPageKeywordSet(surface, 12)];
  }
  finalKeywords = [...new Set(finalKeywords)].slice(0, 20);

  const metadata: Metadata = {
    title: {
      default: title,
      template: `%s | ${SITE_NAME}`,
    },
    description,
    keywords: finalKeywords,
    authors: author ? [{ name: author }] : [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title,
      description,
      locale: 'en_US',
      images: ogImages.map(img => ({
        url: img,
        width: 1200,
        height: 630,
        alt: `${title} - ${SITE_NAME}`,
      })),
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: author ? [author] : [SITE_NAME],
        section,
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      site: '@simownerdetail',
      creator: '@simownerdetail',
      title,
      description,
      images: ogImages,
    },
    alternates: {
      canonical: url,
    },
    verification: {
      google: 'google-site-verification-code',
    },
  };

  return metadata;
}

export function generateArticleMeta(
  slug: string,
  title: string,
  excerpt: string,
  author: string,
  publishedDate: string,
  category: string,
  tags: string[],
  image?: string
): Metadata {
  return generateMeta({
    title,
    description: excerpt,
    path: `/blog/${slug}`,
    surface: 'article',
    type: 'article',
    publishedTime: publishedDate,
    author,
    section: category,
    tags,
    images: image ? [image] : [],
    keywords: getRelevantCsvKeywords(`${title} ${excerpt} ${category}`, 15),
  });
}

export function generateBlogIndexMeta(page = 1): Metadata {
  const title = page === 1 
    ? 'SIM Owner Details Blog - SIM Verification Guides, Phone Number Details & Mobile Number Check'
    : `SIM Owner Details Blog - Page ${page}`;
  const description = page === 1
    ? 'Explore expert guides on SIM owner details online check, phone number details with name, mobile number details, SIM number check, sim details by number, and live tracker sim data in Pakistan.'
    : `Browse more guides on SIM owner details, phone number details, mobile number check, and SIM verification in Pakistan. Page ${page}.`;

  return generateMeta({
    title,
    description,
    path: page === 1 ? '/blog' : `/blog?page=${page}`,
    surface: 'blog',
    type: 'website',
    noindex: page > 1,
  });
}

export function generateCategoryMeta(category: string, page = 1): Metadata {
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  const title = page === 1
    ? `${formattedCategory} Guides - SIM Owner Details, Phone Number Details & Mobile Number Check`
    : `${formattedCategory} Guides - Page ${page}`;
  const description = page === 1
    ? `Read ${formattedCategory.toLowerCase()} guides on SIM owner details online check, phone number details with name, mobile number details, SIM number check, and sim details by number in Pakistan.`
    : `More ${formattedCategory.toLowerCase()} guides on SIM verification, phone number details, and mobile number check. Page ${page}.`;

  return generateMeta({
    title,
    description,
    path: page === 1 ? `/blog/category/${category.toLowerCase()}` : `/blog/category/${category.toLowerCase()}?page=${page}`,
    surface: 'blog',
    type: 'website',
    noindex: page > 1,
  });
}

export function generateSearchMeta(query: string, type: 'mobile' | 'cnic'): Metadata {
  const typeLabel = type === 'mobile' ? 'Phone Number' : 'CNIC';
  return generateMeta({
    title: `Search Results: ${query} - SIM Owner Details & Phone Number Details`,
    description: `Search results for ${typeLabel}: ${query}. Check SIM owner details, phone number details, mobile number details with name, SIM number check, and sim details by number.`,
    path: `/search?query=${encodeURIComponent(query)}&type=${type}`,
    surface: 'search',
    type: 'website',
    noindex: true,
    nofollow: true,
  });
}

export function generateStructuredData(type: 'website' | 'article' | 'faq' | 'service' | 'webpage', data: any) {
  const base = {
    '@context': 'https://schema.org',
  };

  switch (type) {
    case 'website':
      return {
        ...base,
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/search?query={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      };

    case 'article':
      return {
        ...base,
        '@type': 'BlogPosting',
        headline: data.title,
        description: data.excerpt,
        image: data.image ? `${SITE_URL}${data.image}` : `${SITE_URL}/og-default.png`,
        datePublished: data.publishedDate,
        dateModified: data.modifiedDate || data.publishedDate,
        author: {
          '@type': 'Person',
          name: data.author,
          url: `${SITE_URL}/author/${data.author.toLowerCase().replace(/\s+/g, '-')}`,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/icon-512.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/blog/${data.slug}`,
        },
        keywords: data.keywords?.join(', '),
        articleSection: data.category,
      };

    case 'faq':
      return {
        ...base,
        '@type': 'FAQPage',
        mainEntity: data.questions.map((q: any) => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: q.answer,
          },
        })),
      };

    case 'service':
      return {
        ...base,
        '@type': 'Service',
        name: data.name,
        description: data.description,
        provider: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
        },
        areaServed: 'PK',
        serviceType: data.serviceType,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'PKR',
          availability: 'https://schema.org/InStock',
        },
      };

    case 'webpage':
      return {
        ...base,
        '@type': 'WebPage',
        name: data.title,
        description: data.description,
        url: `${SITE_URL}${data.path}`,
        isPartOf: {
          '@type': 'WebSite',
          name: SITE_NAME,
          url: SITE_URL,
        },
      };

    default:
      return null;
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    sameAs: [
      'https://facebook.com/simownerdetail',
      'https://twitter.com/simownerdetail',
      'https://instagram.com/simownerdetail',
      'https://linkedin.com/company/simownerdetail',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92-300-1234567',
      contactType: 'customer service',
      areaServed: 'PK',
      availableLanguage: ['English', 'Urdu'],
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karachi',
      addressCountry: 'PK',
    },
  };
}