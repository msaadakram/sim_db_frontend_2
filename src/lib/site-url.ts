const DEFAULT_LOCAL_SITE_URL = 'http://localhost:3000';
const MAIN_SITE_URL = 'https://pak.simownerdetail.app';
const PK_SITE_URL = 'https://pak.simownerdetail.app';

function normalizeUrl(value: string): string {
  const trimmed = value.trim();

  if (!trimmed) {
    return '';
  }

  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  return withProtocol.replace(/\/+$/, '');
}

function resolveMainSiteUrl(): string {
  const explicitSiteUrl = normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL ?? '');
  if (explicitSiteUrl) {
    return explicitSiteUrl;
  }
  return MAIN_SITE_URL;
}

export function getSiteUrl(): string {
  const explicitSiteUrl = normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL ?? '');
  if (explicitSiteUrl) {
    return explicitSiteUrl;
  }

  const vercelProductionUrl = normalizeUrl(
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? ''
  );
  if (vercelProductionUrl) {
    return vercelProductionUrl;
  }

  const vercelPreviewUrl = normalizeUrl(process.env.VERCEL_URL ?? '');
  if (vercelPreviewUrl) {
    return vercelPreviewUrl;
  }

  return DEFAULT_LOCAL_SITE_URL;
}

export function getMainSiteUrl(): string {
  return resolveMainSiteUrl();
}

export function getPkSiteUrl(): string {
  const explicitSiteUrl = normalizeUrl(process.env.NEXT_PUBLIC_PK_SITE_URL ?? '');
  if (explicitSiteUrl) {
    return explicitSiteUrl;
  }
  return PK_SITE_URL;
}

export function getSiteUrlForPath(path: string): string {
  if (path.startsWith('/pk/') || path === '/pk') {
    return getPkSiteUrl();
  }
  return getMainSiteUrl();
}

export function getFullUrl(path: string): string {
  const baseUrl = getSiteUrlForPath(path);
  return `${baseUrl}${path}`;
}

export function getCanonicalUrl(path: string): string {
  return getFullUrl(path);
}
