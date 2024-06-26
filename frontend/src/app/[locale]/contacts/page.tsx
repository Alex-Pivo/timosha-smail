
import React from "react";
import styles from './Contacts.module.scss'
import Header from '@/app/[locale]/components/header/Header'
import { Footer } from '@/app/[locale]/components/footer/Footer'
import { Contact } from '@/app/[locale]/components/contact/Contact'
import {Newsletter} from "@/app/[locale]/components/email-newsletter/Newsletter";
import { useLocale } from "next-intl";

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
	)
}
