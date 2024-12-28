import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const locales = ['ua', 'en', 'ru', 'it'];

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Виключаємо статичні файли та API з обробки middleware
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next/static') ||
    pathname.startsWith('/_next/image') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // Виключаємо всі файли з папки public
  const publicFileExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.webp'];
  if (publicFileExtensions.some(extension => pathname.endsWith(extension))) {
    return NextResponse.next();
  }

  // Окремо обробляємо sitemap.xml, щоб оновити його в бекенді
  if (pathname === '/sitemap.xml') {
    try {
      // Викликаємо API для оновлення сайтмапу
      await fetch('https://timoshas-smile.org:8443/api/update-sitemap', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error updating sitemap:', error);
    }
    return NextResponse.next();
  }

  // Окремо обробляємо robots.txt
  if (pathname === '/robots.txt') {
    // Генеруємо вміст robots.txt
    const robotsContent = `
      User-agent: *
      Disallow: /api
      Disallow: /_next
      Disallow: /admin/
      Allow: /
    `.trim();
    
    return new NextResponse(robotsContent, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }

  // Перевіряємо наявність мовного префікса в URL
  const isLanguagePath = locales.some((locale) => pathname.startsWith(`/${locale}`));

  // Якщо префікс не знайдено, перенаправляємо на /ua за замовчуванням
  if (!isLanguagePath) {
    const url = req.nextUrl.clone();
    url.pathname = `/ua${pathname}`; // Виправлено
    return NextResponse.redirect(url);
  }

  // Якщо префікс знайдено, використовуємо next-intl middleware
  const intlMiddleware = createMiddleware({
    locales,
    defaultLocale: 'ua'
  });

  return intlMiddleware(req);
}

export const config = {
  matcher: ['/:path*']
};
