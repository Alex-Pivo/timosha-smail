"use client";
import React, { useState, useEffect } from 'react';
import Popup from './components/popup/popup';
import './globals.scss';
import CookieConfirmation from "@/app/[locale]/components/cookie-confirm/CookieConfirmation";
import Head from 'next/head';

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const [showPopup, setShowPopup] = useState(false);
  let inactivityTimer: NodeJS.Timeout;
  const [cookieConfirmed, setCookieConfirmed] = useState<boolean>(false);

  useEffect(() => {
    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
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

  return (
    <>
      <Head>
        <title>Timosha smile</title>
        <link rel="icon" href="/logo-btn.ico" />
        <meta name="description" content="Charity" />
	<meta name="robots" content="index, follow" />
        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-380C3XNTGD"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-380C3XNTGD');
            `,
          }}
        />
      </Head>
      <div>
        <Popup isOpen={showPopup} onClose={handleClosePopup} />
        {children}
        {!cookieConfirmed && <CookieConfirmation onConfirm={handleCookieConfirmation} />}
      </div>
    </>
  );
}
