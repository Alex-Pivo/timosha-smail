import Header from "../components/header/Header";
import HistoryPart from "../pages/history-page/components/history";
import Tagline from "../pages/history-page/components/tagline";
import Partners from "../pages/history-page/components/partners";

import styles from "./History.module.scss";
import { OurTeam } from '@/app/[locale]/components/our-team/OurTeam'
import { Contact } from '@/app/[locale]/components/contact/Contact'
import React from 'react'
import { Footer } from '@/app/[locale]/components/footer/Footer'
import {Newsletter} from "@/app/[locale]/components/email-newsletter/Newsletter";
import { getLocale } from "next-intl/server";

export default function History() {
	const locale = getLocale();
	return (
		<>
			<div className={styles.body__container}>
				<Header></Header>
				<HistoryPart></HistoryPart>
				<Tagline></Tagline>
				<Partners locale={locale}></Partners>
				<div className={styles.downContainer}>
					<OurTeam />
					<Contact />
				</div>
				<Newsletter />

				<Footer />
			</div>
		</>
	);
}
