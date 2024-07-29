import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const locales = ['ua', 'en', 'ru', 'it'];

function detectLocale(pathname: string): boolean {
  return locales.some((locale) => pathname.startsWith(`/${locale}`));
}

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Если языковой префикс отсутствует, перенаправляем на /ua
  if (!detectLocale(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = `/ua${pathname}`;
    return NextResponse.redirect(url);
  }

  // Если префикс найден, используем createMiddleware от next-intl
  return createMiddleware({
    locales,
    defaultLocale: 'ua'
  })(req);
}

export const config = {
  // Match all paths except for API routes and static files
  matcher: ['/:path*', '/(ru|en|ua|it)/:path*']
};
