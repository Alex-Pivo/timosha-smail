import React from "react";
import styles from "./News.module.scss";
import Header from "@/app/[locale]/components/header/Header";
import { Footer } from "@/app/[locale]/components/footer/Footer";
import Articles from "@/app/[locale]/pages/news/articles";
import stylesArticles from "../pages/news/styles/main.module.scss";
import { useLocale } from "next-intl";
import { get } from "lodash";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations("news");
  const c = await getTranslations('Index');

  return {
    title: c('title1') + " | " + t("news"),
    description: t("news"),
    keywords: t("news"),
    icons: {
      icon: "/logo-btn.ico",
    },
  };
}

export default function HowToHelpPage() {
  let locale = useLocale();
  return (
    <>
      <div className={styles.container}>
        <Header locale={locale} />
      </div>
      <div className={stylesArticles.body__container}>
        <Articles locale={locale} />
      </div>
      <Footer />
    </>
  );
}
