import React from "react";
import styles from './News.module.scss'
import Header from '@/app/[locale]/components/header/Header'
import { Footer } from '@/app/[locale]/components/footer/Footer'
import Articles from '@/app/[locale]/pages/news/articles'
import stylesArticles from "../pages/news/styles/main.module.scss";
import { useLocale } from "next-intl";
import { get } from "lodash";

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
	)
}
