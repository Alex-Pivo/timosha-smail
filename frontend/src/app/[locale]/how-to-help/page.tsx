import React from "react";
import styles from './HowToHelp.module.scss'
import Header from '@/app/[locale]/components/header/Header'
import { Caption } from '@/app/[locale]/pages/hth-page/caption/Caption'
import { TohVol } from '@/app/[locale]/pages/hth-page/types-of-help/toh-vol/TohVol'
import { Advantages } from '@/app/[locale]/pages/hth-page/adv-of-types/adv-of-vol/AdvOfVol'
import { TohFund } from '@/app/[locale]/pages/hth-page/types-of-help/toh-fund/TohFund'
import { Fundraising } from '@/app/[locale]/pages/hth-page/adv-of-types/adv-of-fund/AdvOfFund'
import { Footer } from '@/app/[locale]/components/footer/Footer'
import { TohPartner } from '@/app/[locale]/pages/hth-page/types-of-help/toh-partnership/TohPartner'
import { Contact } from '@/app/[locale]/components/contact/Contact'
import {Newsletter} from "@/app/[locale]/components/email-newsletter/Newsletter";
import {ScrollProvider} from "@/app/[locale]/components/scroll-context/ScrollContext";

export default function HowToHelpPage() {
	return (
		<>
			<ScrollProvider>
				<div className={styles.container}>
					<Header />
					<Caption />
					<TohVol />
					<Advantages />
					<TohFund />
					<Fundraising />
					<TohPartner />
					<Contact />
				</div>
				<Newsletter />
				<Footer />
			</ScrollProvider>
		</>
	)
}
