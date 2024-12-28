import Header from "../components/header/Header";
import HistoryPart from "../pages/history-page/components/history";
import Tagline from "../pages/history-page/components/tagline";
import Partners from "../pages/history-page/components/partners";
import styles from "./History.module.scss";
import styles1 from "@/app/[locale]/page.module.scss";
import { OurTeam } from "@/app/[locale]/components/our-team/OurTeam";
import { Contact } from "@/app/[locale]/components/contact/Contact";
import React from "react";
import { Footer } from "@/app/[locale]/components/footer/Footer";
import { Newsletter } from "@/app/[locale]/components/email-newsletter/Newsletter";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
	const t = await getTranslations('History');
  const c = await getTranslations('Index');
	
	return {
	  title: c('title1') + " | " + t('mTitle'),
	  description: t('mTitle'),
	  keywords: t('mTitle'),
	  icons: {
		icon: '/logo-btn.ico', 
	  },
	};
  }

export default function History() {
  let locale = useLocale();
  const t = useTranslations("History"); // Секция переводов для страницы истории

//   useEffect(() => {
//     document.title = t("mTitle"); // Установка заголовка страницы вручную
//   }, [t]); // Обновление заголовка при изменении переводов

  return (
    <>
      <div className={styles.body__container}>
        <Header locale={locale}></Header>
        <HistoryPart></HistoryPart>
        <Tagline></Tagline>
        <Partners locale={locale}></Partners>
        <div className={styles1.container}>
          <OurTeam />
          <Contact />
        </div>
        <Newsletter />

        <Footer />
      </div>
    </>
  );
}
