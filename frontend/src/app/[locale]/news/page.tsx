import React from "react";
import styles from './News.module.scss'
import Header from '@/app/[locale]/components/header/Header'
import { Footer } from '@/app/[locale]/components/footer/Footer'
import Articles from '@/app/[locale]/pages/news/articles'
import stylesArticles from "../pages/news/styles/main.module.scss";
import { getLocale } from "next-intl/server";
import { get } from "lodash";

export default function HowToHelpPage() {
	let locale = getLocale();
	return (
		<>
			<div className={styles.container}>
				<Header />
			</div>
			<div className={stylesArticles.body__container}>
				<Articles locale={locale} />
			</div>
			 <Footer />
		</>
	)
}
