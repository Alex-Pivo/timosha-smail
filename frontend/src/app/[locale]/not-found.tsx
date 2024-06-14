'use client'
import styles from './page.module.scss';
import React from 'react'
import Image from "next/image";
import Header from "@/app/[locale]/components/header/Header";
import { useTranslations } from 'next-intl';

export default function NotFound() {
    const t = useTranslations('oops');
    const handleReload = () => {
        window.location.reload();
    };

    return (
        <>
            <div className={styles.container}>
                <Header />
            </div>
            <section className={styles.notFound}>
                <div className={styles.wrapper}>
                    <h1 className={styles.mainTxt}>
                        404
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="67" viewBox="0 0 55 67" fill="none">
                            <path
                                d="M3.61965 35.8415L16.7245 3.81793M51.6177 63.345L17.2735 59.1347M41.2179 30.6728L11.3122 48.0769"
                                stroke="#649612" strokeWidth="6" strokeLinecap="round"/>
                        </svg>
                    </h1>
                </div>
                <div className={styles.centerImage}>
                    <div className={styles.overlay}>
                        <p className={styles.oopsPhone}>{t('title')}</p>
                    </div>
                    <Image src={'/404nfPhone.png'}
                           alt={'404'}
                           width={1352}
                           height={140}
                           className={styles.nfImagePhone}/>
                    <Image src={'/404fd.png'}
                           alt={'404'}
                           width={1352}
                           height={140}
                           className={styles.nfImage}/>
                </div>
                <div className={styles.moreTxt}>
                    <p className={styles.oops}>{t('title')}</p>
                    <p className={styles.txt}>{t('sub')}</p>
                </div>
                <div className={styles.btnWrapper} >
                    <button className={styles.btn} onClick={handleReload}>
                    {t('btn')}
                    </button>
                </div>

            </section>
        </>

    );
};
