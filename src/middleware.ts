import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const CANONICAL_HOST = 'pak.simownerdetail.app';

function isPreviewOrLocalHost(hostname: string): boolean {
  return (
    hostname === 'localhost' ||
    hostname.endsWith('.vercel.app') ||
    hostname === '127.0.0.1'
  );
}

export function middleware(request: NextRequest) {
  const hostname = (request.headers.get('host') || '').toLowerCase();
  const { pathname, search } = request.nextUrl;

  // Local dev and Vercel preview deployments should be served as-is.
  if (isPreviewOrLocalHost(hostname)) {
    return NextResponse.next();
  }

  // Any request to a non-canonical host (root domain / www / www.pak) →
  // 301 to the canonical host, preserving the full path and query string in a single hop.
  if (hostname !== CANONICAL_HOST) {
    const url = new URL(`https://${CANONICAL_HOST}${pathname}${search}`);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt, sitemap.xml
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.png$|.*\\.jpg$|.*\\.webp$|.*\\.svg$|.*\\.ico$).*)',
  ],
};
