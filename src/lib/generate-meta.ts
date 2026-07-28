import { Metadata } from 'next';
import { getSiteUrl, getMainSiteUrl, getPkSiteUrl } from './site-url';
import { getPageKeywordSet, getRelevantCsvKeywords, SIM_OWNER_SEO_KEYWORDS } from './seo-keywords';

const SITE_NAME = 'SIM Owner Details';

function getBaseUrl(path: string): string {
  // Use subdomain for pk routes
  if (path.startsWith('/pk/') || path === '/pk') {
    return getPkSiteUrl();
  }
  return getMainSiteUrl();
}

function getFullUrl(path: string): string {
  const baseUrl = getBaseUrl(path);
  return `${baseUrl}${path}`;
}

function getImageUrl(path: string): string {
  const baseUrl = getBaseUrl(path);
  return `${baseUrl}${path}`;
}

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

  const url = getFullUrl(path);
  const defaultImage = getImageUrl('/og-default.png');
  const ogImages = images.length > 0 ? images.map(img => getImageUrl(img)) : [defaultImage];

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

export function generateStructuredData(type: 'website' | 'article' | 'faq' | 'service' | 'webpage', data: any, path?: string) {
  const base = {
    '@context': 'https://schema.org',
  };

  const siteUrl = path && path.startsWith('/pk/') ? getFullUrl(path) : getSiteUrl();

  switch (type) {
    case 'website':
      return {
        ...base,
        '@type': 'WebSite',
        name: SITE_NAME,
        url: siteUrl,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteUrl}/search?query={search_term_string}`,
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
        image: data.image ? getImageUrl(data.image) : `${siteUrl}/og-default.png`,
        datePublished: data.publishedDate,
        dateModified: data.modifiedDate || data.publishedDate,
        author: {
          '@type': 'Person',
          name: data.author,
          url: `${siteUrl}/author/${data.author.toLowerCase().replace(/\s+/g, '-')}`,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/icon-512.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${siteUrl}/blog/${data.slug}`,
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
          url: siteUrl,
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
        url: data.path.startsWith('http') ? data.path : (data.path.startsWith('/pk/') ? getFullUrl(data.path) : `${getSiteUrl()}${data.path}`),
        isPartOf: {
          '@type': 'WebSite',
          name: SITE_NAME,
          url: siteUrl,
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
      item: item.url.startsWith('http') ? item.url : (item.url.startsWith('/pk/') ? getFullUrl(item.url) : `${getSiteUrl()}${item.url}`),
    })),
  };
}

export function generateOrganizationSchema() {
  const mainSiteUrl = getMainSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: mainSiteUrl,
    logo: `${mainSiteUrl}/icon-512.png`,
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