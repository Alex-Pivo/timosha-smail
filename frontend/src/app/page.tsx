export const dynamic = 'force-dynamic';

import React from "react";
import {OurTeam} from "@/app/[locale]/components/our-team/OurTeam";
import styles from '@/app/[locale]/page.module.scss'
import { HelpOptions } from '@/app/[locale]/pages/main-page/second-part/help-options/HelpOptions'
import { OurPartners } from '@/app/[locale]/pages/main-page/second-part/our-partners/OurPartners'
import { GetHelp } from '@/app/[locale]/pages/main-page/second-part/get-help/GetHelp'
import { DonateHelp } from '@/app/[locale]/pages/main-page/second-part/donate-help/DonateHelp'
import { Footer } from '@/app/[locale]/components/footer/Footer'
import stylesMain from '@/app/[locale]/pages/main-page/first-part/styles/main.module.scss'
import Header from '@/app/[locale]/components/header/Header'
import Firstblock from '@/app/[locale]/pages/main-page/first-part/pages/firtsBlock'
import News from '@/app/[locale]/pages/main-page/first-part/pages/news'
import Abouthelp from '@/app/[locale]/pages/main-page/first-part/pages/aboutHelp'
import Reviews from '@/app/[locale]/pages/main-page/first-part/pages/reviews'
import {Newsletter} from "@/app/[locale]/components/email-newsletter/Newsletter";

import {unstable_setRequestLocale} from 'next-intl/server';
import {useTranslations} from "next-intl";
export default function IndexPage({params: {locale}}: { params: {locale: string}; }) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('Index');


    return (
        <>
            <div className={stylesMain.body__container}>
                <Header locale={locale} />
                <Firstblock />
                <News/>
                <Abouthelp/>
                <Reviews locale={locale}/>
            </div>
            <div className={styles.container}>
                <OurTeam />
                <HelpOptions />
                        <OurPartners locale={locale} />

                <GetHelp />
            </div>
            <DonateHelp />
            <Newsletter />
            <Footer />
        </>
    )
}
