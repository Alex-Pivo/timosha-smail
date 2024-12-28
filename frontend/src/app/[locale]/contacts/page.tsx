import React from "react";
import styles from "./Contacts.module.scss";
import Header from "@/app/[locale]/components/header/Header";
import { Footer } from "@/app/[locale]/components/footer/Footer";
import { Contact } from "@/app/[locale]/components/contact/Contact";
import { Newsletter } from "@/app/[locale]/components/email-newsletter/Newsletter";
import { useLocale } from "next-intl";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations("contacts");
  const c = await getTranslations('Index');

  return {
    title: c('title1') + " | " + t("title"),
    description: t("title"),
    keywords: t("title"),
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
        <Contact />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}
