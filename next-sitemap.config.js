const fs = require('node:fs');
const path = require('node:path');

const DEFAULT_SITE_URL = 'https://www.simownerdetail.app';
const PLACEHOLDER_HOSTS = new Set([
  'your-domain.com',
  'www.your-domain.com',
  'example.com',
  'www.example.com',
  'localhost',
]);

const BUILD_LASTMOD = (() => {
  const configured = String(process.env.SITEMAP_LASTMOD || '').trim();
  if (!configured) {
    return new Date().toISOString();
  }

  const parsed = new Date(configured);
  if (Number.isNaN(parsed.getTime())) {
    return new Date().toISOString();
  }

  return parsed.toISOString();
})();

function isPlaceholderUrl(url) {
  try {
    const { hostname } = new URL(url);

    return (
      PLACEHOLDER_HOSTS.has(hostname.toLowerCase()) ||
      hostname.toLowerCase().endsWith('.example.com')
    );
  } catch {
    return true;
  }
}

function normalizeSiteUrl(url) {
  if (!url) {
    return DEFAULT_SITE_URL;
  }

  const trimmed = String(url).trim();
  if (!trimmed) {
    return DEFAULT_SITE_URL;
  }

  const withProtocol =
    trimmed.startsWith('http://') || trimmed.startsWith('https://')
      ? trimmed
      : `https://${trimmed}`;

  const normalized = withProtocol.replace(/\/+$/, '');

  if (isPlaceholderUrl(normalized)) {
    return DEFAULT_SITE_URL;
  }

  return normalized;
}

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getBlogSlugs() {
  const blogDataPath = path.join(process.cwd(), 'src', 'data', 'blogData.ts');

  if (!fs.existsSync(blogDataPath)) {
    return [];
  }

  const fileContents = fs.readFileSync(blogDataPath, 'utf8');

  const postBlocks = fileContents.match(/^  \{\n[\s\S]*?^  \},?$/gm) ?? [];
  const extractedSlugs = postBlocks
    .map((postBlock) => {
      const explicitSlugMatch = postBlock.match(/^\s{4}slug:\s*'([^']+)'/m);
      if (explicitSlugMatch?.[1]) {
        return explicitSlugMatch[1].trim();
      }

      const titleMatch = postBlock.match(/^\s{4}title:\s*'([^']+)'/m);
      if (!titleMatch?.[1]) {
        return null;
      }

      const fallbackSlug = slugify(titleMatch[1]);
      return fallbackSlug || null;
    })
    .filter(Boolean);

  if (extractedSlugs.length > 0) {
    return [...new Set(extractedSlugs)];
  }

  const matches = fileContents.matchAll(/slug:\s*'([^']+)'/g);

  return [...new Set(Array.from(matches, (match) => match[1]))];
}

const PAKISTAN_CITIES = [
  'karachi', 'lahore', 'faisalabad', 'rawalpindi', 'multan', 'hyderabad',
  'gujranwala', 'peshawar', 'quetta', 'islamabad', 'sargodha', 'sialkot',
  'bahawalpur', 'sukkur', 'jhang', 'sheikhupura', 'gujrat', 'mardan',
  'kasur', 'sahiwal', 'okara', 'mirpur-khas', 'rahim-yar-khan'
];

const PAKISTAN_CARRIERS = ['jazz', 'zong', 'telenor', 'ufone'];

function generatePkPaths() {
  const paths = [];

  // /pk index
  paths.push({
    loc: '/pk',
    changefreq: 'daily',
    priority: 0.9,
    lastmod: BUILD_LASTMOD,
  });

  // /pk/carriers/compare
  paths.push({
    loc: '/pk/carriers/compare',
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: BUILD_LASTMOD,
  });

  // /pk/check/[city] - 23 cities
  for (const city of PAKISTAN_CITIES) {
    paths.push({
      loc: `/pk/check/${city}`,
      changefreq: 'weekly',
      priority: 0.85,
      lastmod: BUILD_LASTMOD,
    });

    // /pk/check/[city]/[carrier] - 4 carriers per city = 92 pages
    for (const carrier of PAKISTAN_CARRIERS) {
      paths.push({
        loc: `/pk/check/${city}/${carrier}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: BUILD_LASTMOD,
      });
    }
  }

  return paths;
}

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: normalizeSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.SITE_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      process.env.VERCEL_URL
  ),
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/api/*', '/search*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/search'],
      },
    ],
  },
  transform: async (siteConfig, pathName) => {
    const isHome = pathName === '/';
    const isBlogListing = pathName === '/blog';
    const isBlogPost = pathName.startsWith('/blog/') && !isBlogListing;
    const isPk = pathName.startsWith('/pk');

    return {
      loc: pathName,
      changefreq: isBlogPost ? 'weekly' : isPk ? 'weekly' : 'daily',
      priority: isHome ? 1.0 : isBlogListing ? 0.9 : isBlogPost ? 0.7 : isPk ? 0.85 : 0.8,
      lastmod: BUILD_LASTMOD,
      alternateRefs: siteConfig.alternateRefs ?? [],
    };
  },
  additionalPaths: async (siteConfig) => {
    const blogSlugs = getBlogSlugs();
    const pkPaths = generatePkPaths();

    const blogPaths = blogSlugs.map((slug) => ({
      loc: `/blog/${slug}`,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: BUILD_LASTMOD,
      alternateRefs: siteConfig.alternateRefs ?? [],
    }));

    return [...blogPaths, ...pkPaths];
  },
};

module.exports = config;