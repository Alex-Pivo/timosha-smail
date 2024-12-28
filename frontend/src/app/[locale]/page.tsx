import React from "react";
import {OurTeam} from "@/app/[locale]/components/our-team/OurTeam";
import styles from './page.module.scss'
import { HelpOptions } from '@/app/[locale]/pages/main-page/second-part/help-options/HelpOptions'
import { OurPartners } from '@/app/[locale]/pages/main-page/second-part/our-partners/OurPartners'
import { GetHelp } from '@/app/[locale]/pages/main-page/second-part/get-help/GetHelp'
import { DonateHelp } from '@/app/[locale]/pages/main-page/second-part/donate-help/DonateHelp'
import { Footer } from '@/app/[locale]/components/footer/Footer'
import stylesMain from './pages/main-page/first-part/styles/main.module.scss'
import Header from '@/app/[locale]/components/header/Header'
import Firstblock from '@/app/[locale]/pages/main-page/first-part/pages/firtsBlock'
import News from '@/app/[locale]/pages/main-page/first-part/pages/news'
import Abouthelp from '@/app/[locale]/pages/main-page/first-part/pages/aboutHelp'
import Reviews from '@/app/[locale]/pages/main-page/first-part/pages/reviews'
import {Newsletter} from "@/app/[locale]/components/email-newsletter/Newsletter";
import { useTranslations } from "next-intl";
import { Metadata } from 'next';
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
	const t = await getTranslations('Index');
  return {
    title: t("title"),
    description: 'Після смерті середнього сина Тимоші у 2019 році, який 20 місяців боровся з лейкемією, Юлія заснувала некомерційну організацію «Усмішка Тимоші», щоб допомагати дітям в Україні боротися з раком.',
    keywords: t("title"),
    icons: {
      icon: '/logo-btn.ico', 
    },
  };
  }


import {unstable_setRequestLocale} from 'next-intl/server';
export default function IndexPage({params: {locale}}: { params: {locale: string}; }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Index');


  return (
    <>
      <div className={stylesMain.body__container}>
        <Header locale={locale} />
        <Firstblock />
        <News/>
        <Abouthelp/>
        <Reviews locale={locale}/>
      </div>
      <div className={styles.container}>
        <OurTeam />
        <HelpOptions />
                <OurPartners locale={locale} />
        <GetHelp />
      </div>
      <DonateHelp />
      <Newsletter />
      <Footer />
    </>
  )
}
