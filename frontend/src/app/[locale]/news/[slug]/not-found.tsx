// import styles from '../../../../../../frontend/src/app/page.module.scss';
import styles from "../../page.module.scss";
import React from 'react';
import Image from "next/image";
import Header from "@/app/[locale]/components/header/Header";
import { useLocale } from "next-intl";
export default function NotFound() {
    let locale = useLocale();
    return (
        <>
            <div className={styles.container}>
                <Header locale={locale} />
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
                    <Image src={'/404fd.png'}
                           alt={'404'}
                           width={1352}
                           height={140}
                           className={styles.nfSoed}/>
                </div>
                <div className={styles.moreTxt}>
                    <p className={styles.oops}>Упс..</p>
                    <p className={styles.txt}>Щось пішло не так. Будь ласка, спробуйте ще раз</p>
                </div>
                <div className={styles.btnWrapper}>
                    <button className={styles.btn}>
                        Перезавантажити
                    </button>
                </div>

            </section>
        </>

    );
};
