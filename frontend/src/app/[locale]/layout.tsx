"use client";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React, { useState, useEffect } from 'react'
import Popup from './components/popup/popup'
import './globals.scss'
import CookieConfirmation from "@/app/[locale]/components/cookie-confirm/CookieConfirmation";
import {NextIntlClientProvider} from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';


const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Timosha smile',
//   description: 'Charity',
// }

interface RootLayoutProps{
  children: React.ReactNode,
  params: {
    locale: string,
  }
}
// const locales = ['ua', 'en', 'ru', 'it'];
// export function generateStaticParams() {
//     return locales.map((locale) => ({locale}));
// }
export default function RootLayout({
  children,
  params: {locale}
}: Readonly<RootLayoutProps>)
{
  const [showPopup, setShowPopup] = useState(false);
  let inactivityTimer: NodeJS.Timeout;
  const [cookieConfirmed, setCookieConfirmed] = useState<boolean>(false);


  useEffect(() => {
    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setInterval(() => {
        setShowPopup(true);
      }, 180000); // 3 минуты в миллисекундах
    };

    const handleActivity = () => {
      resetTimer();
    };

    resetTimer();

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keypress', handleActivity);

    return () => {
      clearTimeout(inactivityTimer);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keypress', handleActivity);
    };
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleCookieConfirmation = () => {
    setCookieConfirmed(true);
  };
  // unstable_setRequestLocale(locale);


  return (
    <html lang={locale}>
      <head>
        <title>Timosha smile</title>
        <link rel="icon" href="/logo-btn.ico" />
        <meta name='Charity' content='Charity' />
      </head>
      <body>
          <Popup isOpen={showPopup} onClose={handleClosePopup} />
          {children}
          {!cookieConfirmed && <CookieConfirmation onConfirm={handleCookieConfirmation} />}
      </body>
    </html>
  )
}