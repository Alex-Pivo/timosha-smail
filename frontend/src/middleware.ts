// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const locales = ['ua', 'en', 'ru', 'it'];

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Исключаем статические файлы и API из обработки middleware
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next/static') ||
    pathname.startsWith('/_next/image') ||
    pathname === '/favicon.ico' ||
    pathname.startsWith('/left1.png') ||
    pathname.startsWith('/left2.png') ||
    pathname.startsWith('/Container.png') ||
    pathname.startsWith('/hands.png') ||
    pathname.startsWith('/right.png') ||
    pathname.startsWith('/up.png') ||
    pathname.startsWith('/star.png') ||
    pathname.startsWith('/group.png') ||
    pathname.startsWith('/house.png') ||
    pathname.startsWith('/Pid.png') ||
    pathname.startsWith('/bgBaby.png')
  ) {
    return NextResponse.next();
  }

  // Проверяем наличие языкового префикса в URL
  const isLanguagePath = locales.some((locale) => pathname.startsWith(`/${locale}`));

  if (!isLanguagePath) {
    // Если префикс не найден, перенаправляем на /ua
    const url = req.nextUrl.clone();
    url.pathname = `/ua${pathname}`;
    return NextResponse.redirect(url);
  }

  // Если префикс найден, используем next-intl middleware
  const intlMiddleware = createMiddleware({
    locales,
    defaultLocale: 'ua'
  });

  return intlMiddleware(req);
}

export const config = {
  matcher: ['/:path*']
};
