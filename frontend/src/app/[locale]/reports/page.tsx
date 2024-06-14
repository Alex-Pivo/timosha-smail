import React from "react";
import styles from './Reports.module.scss'
import Header from '@/app/[locale]/components/header/Header'
import { Footer }  from '@/app/[locale]/components/footer/Footer'
import stylesRep from "../pages/reports/styles/main.module.scss";
import Reports from '@/app/[locale]/pages/reports/reports'
import {Newsletter} from "@/app/[locale]/components/email-newsletter/Newsletter";
import { getLocale } from "next-intl/server";

export default function HowToHelpPage() {
	const locale = getLocale();
	return (
		<>
			<div className={styles.container}>
				<Header />
			</div>
			<div className={stylesRep.body__container}>
				<Reports locale={locale} />
			</div>
			<Newsletter />
			<Footer />
		</>
	)
}
