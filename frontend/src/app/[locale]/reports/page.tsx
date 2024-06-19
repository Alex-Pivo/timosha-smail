import React from "react";
import styles from './Reports.module.scss'
import Header from '@/app/[locale]/components/header/Header'
import { Footer }  from '@/app/[locale]/components/footer/Footer'
import stylesRep from "../pages/reports/styles/main.module.scss";
import Reports from '@/app/[locale]/pages/reports/reports'
import {Newsletter} from "@/app/[locale]/components/email-newsletter/Newsletter";
import { useLocale } from "next-intl";

export default function HowToHelpPage() {
	let locale = useLocale();
	return (
		<>
			<div className={styles.container}>
				<Header locale={locale} />
			</div>
			<div className={stylesRep.body__container}>
				<Reports locale={locale} />
			</div>
			<Newsletter />
			<Footer />
		</>
	)
}
