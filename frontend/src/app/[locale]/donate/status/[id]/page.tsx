'use client';
import React, { useEffect, useState } from "react";
import Header from "@/app/[locale]/components/header/Header";
import { Footer } from "@/app/[locale]/components/footer/Footer";
import { usePathname } from "next/navigation";
import axios from "axios";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import FirstHelp from "@/app/[locale]/pages/requisites/firstHelp";
import Bank from "@/app/[locale]/pages/requisites/bank";
import BankQR from "@/app/[locale]/pages/requisites/bankQR";
import Crypto from "@/app/[locale]/pages/requisites/crypto";
import { useLocale } from "next-intl";
import styles from "./styles.module.scss";
import stylesPop from "../../../pages/reports/styles/main.module.scss"
import { useRouter } from 'next/router';

export default function Status() {
    // Получаем текущий путь
    const path = usePathname();
    const t = useTranslations('status');
     let locale = useLocale();
    // Извлекаем идентификатор заказа из пути
    let orderId = null;
    const match = path.match(/[\w\d]+$/);
    if (match) {
        orderId = match[0];
    }
    console.log('Order ID:', orderId);
    let [status, setStatus] = useState("");
    // Функция для выполнения GET-запроса по указанной ссылке
    const getOrderStatus = async () => {
        try {
            const response = await axios.get(`https://timoshas-smile.org:8443/donate/${locale}/status/${orderId}`);
            console.log('Order Status:', response.data);
            if (response.data.status === 'success') {
                setStatus(status = "true");
            }
            else if(response.data.status === 'error'){
                setStatus(status = "false");
            }
            else if(response.data.status === 'subscribed'){
                setStatus(status = "subscribed");
            }
            return response.data;
        } catch (error) {
            console.error('Error fetching order status:', error);
            throw error; // Можно выбросить ошибку для обработки во внешнем коде
        }
    };
    
    useEffect(() => {
        getOrderStatus();
    }, []);


    useEffect(() => {
        const timeout = setTimeout(() => {
            if (status != "true" && status != "false") {
                window.location.href = `/${locale}/donate`;
            }
        }, 3000);
    }, [status]);

   

    if(status === "true"){
            return (
                <>
                    <div className={styles.container}>
                        <Header locale={locale} />
                    </div>
                    <div className={stylesPop.body__container}>
                        <div className={styles.modal}>
                            <div className={styles.modal__content}>
                                <Link className={styles.btn__exit} href="/donate">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9204 8.87067C26.038 8.75323 26.1313 8.61378 26.195 8.46028C26.2587 8.30678 26.2915 8.14224 26.2916 7.97605C26.2917 7.80986 26.2591 7.64528 26.1956 7.4917C26.1321 7.33812 26.039 7.19856 25.9215 7.08097C25.8041 6.96339 25.6646 6.87008 25.5111 6.80639C25.3576 6.7427 25.1931 6.70986 25.0269 6.70976C24.8607 6.70966 24.6961 6.74229 24.5426 6.8058C24.389 6.8693 24.2494 6.96243 24.1318 7.07987L16.5 14.7117L8.87043 7.07987C8.63295 6.8424 8.31087 6.70898 7.97503 6.70898C7.63919 6.70898 7.3171 6.8424 7.07963 7.07987C6.84215 7.31735 6.70874 7.63943 6.70874 7.97527C6.70874 8.31111 6.84215 8.6332 7.07963 8.87067L14.7114 16.5003L7.07963 24.1299C6.96204 24.2475 6.86877 24.387 6.80513 24.5407C6.74149 24.6943 6.70874 24.859 6.70874 25.0253C6.70874 25.1916 6.74149 25.3562 6.80513 25.5099C6.86877 25.6635 6.96204 25.8031 7.07963 25.9207C7.3171 26.1581 7.63919 26.2916 7.97503 26.2916C8.14132 26.2916 8.30598 26.2588 8.45961 26.1952C8.61325 26.1315 8.75284 26.0383 8.87043 25.9207L16.5 18.2889L24.1318 25.9207C24.3693 26.1579 24.6913 26.291 25.0269 26.2908C25.3625 26.2906 25.6843 26.157 25.9215 25.9196C26.1587 25.6821 26.2918 25.3601 26.2916 25.0245C26.2914 24.6889 26.1579 24.3671 25.9204 24.1299L18.2886 16.5003L25.9204 8.87067Z" fill="#1D1D1D"/>
                                    </svg>
                                </Link>
                                <div className={styles.img}></div>
                                <h3 className={styles.title}>{t('title')}</h3>
                                <p className={styles.text}>{t('sub')}</p>
                                <Link className={styles.btn} href="/">
                                {t('btn')}
                                </Link>
                            </div>
                        </div>
                        <FirstHelp></FirstHelp>
                        <Bank></Bank>
                        <BankQR></BankQR>
                        <Crypto></Crypto>
                    </div>
                    <Footer />
                </>
            );
        }
    else if(status === "subscribed"){
            return (
                <>
                    <div className={styles.container}>
                        <Header locale={locale} />
                    </div>
                    <div className={stylesPop.body__container}>
                        <div className={styles.modal}>
                            <div className={styles.modal__content}>
                                <Link className={styles.btn__exit} href="/donate">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9204 8.87067C26.038 8.75323 26.1313 8.61378 26.195 8.46028C26.2587 8.30678 26.2915 8.14224 26.2916 7.97605C26.2917 7.80986 26.2591 7.64528 26.1956 7.4917C26.1321 7.33812 26.039 7.19856 25.9215 7.08097C25.8041 6.96339 25.6646 6.87008 25.5111 6.80639C25.3576 6.7427 25.1931 6.70986 25.0269 6.70976C24.8607 6.70966 24.6961 6.74229 24.5426 6.8058C24.389 6.8693 24.2494 6.96243 24.1318 7.07987L16.5 14.7117L8.87043 7.07987C8.63295 6.8424 8.31087 6.70898 7.97503 6.70898C7.63919 6.70898 7.3171 6.8424 7.07963 7.07987C6.84215 7.31735 6.70874 7.63943 6.70874 7.97527C6.70874 8.31111 6.84215 8.6332 7.07963 8.87067L14.7114 16.5003L7.07963 24.1299C6.96204 24.2475 6.86877 24.387 6.80513 24.5407C6.74149 24.6943 6.70874 24.859 6.70874 25.0253C6.70874 25.1916 6.74149 25.3562 6.80513 25.5099C6.86877 25.6635 6.96204 25.8031 7.07963 25.9207C7.3171 26.1581 7.63919 26.2916 7.97503 26.2916C8.14132 26.2916 8.30598 26.2588 8.45961 26.1952C8.61325 26.1315 8.75284 26.0383 8.87043 25.9207L16.5 18.2889L24.1318 25.9207C24.3693 26.1579 24.6913 26.291 25.0269 26.2908C25.3625 26.2906 25.6843 26.157 25.9215 25.9196C26.1587 25.6821 26.2918 25.3601 26.2916 25.0245C26.2914 24.6889 26.1579 24.3671 25.9204 24.1299L18.2886 16.5003L25.9204 8.87067Z" fill="#1D1D1D"/>
                                    </svg>
                                </Link>
                                <div className={styles.img}></div>
                                <h3 className={styles.title}>{t('title')}</h3>
                                <p className={styles.text}>{t('sub')}</p>
                                <Link className={styles.btn} href="/">
                                {t('btn')}
                                </Link>
                            </div>
                        </div>
                        <FirstHelp></FirstHelp>
                        <Bank></Bank>
                        <BankQR></BankQR>
                        <Crypto></Crypto>
                    </div>
                    <Footer />
                </>
            );
        }
    else if(status === "false"){
            return (
                <>
                <div className={styles.container}>
                    <Header />
                </div>
                <div className={stylesPop.body__container}>
                <div className={styles.modal__no}>
                    <div className={styles.modal__content}>
                            <Link className={styles.btn__exit} href="/donate">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9204 8.87067C26.038 8.75323 26.1313 8.61378 26.195 8.46028C26.2587 8.30678 26.2915 8.14224 26.2916 7.97605C26.2917 7.80986 26.2591 7.64528 26.1956 7.4917C26.1321 7.33812 26.039 7.19856 25.9215 7.08097C25.8041 6.96339 25.6646 6.87008 25.5111 6.80639C25.3576 6.7427 25.1931 6.70986 25.0269 6.70976C24.8607 6.70966 24.6961 6.74229 24.5426 6.8058C24.389 6.8693 24.2494 6.96243 24.1318 7.07987L16.5 14.7117L8.87043 7.07987C8.63295 6.8424 8.31087 6.70898 7.97503 6.70898C7.63919 6.70898 7.3171 6.8424 7.07963 7.07987C6.84215 7.31735 6.70874 7.63943 6.70874 7.97527C6.70874 8.31111 6.84215 8.6332 7.07963 8.87067L14.7114 16.5003L7.07963 24.1299C6.96204 24.2475 6.86877 24.387 6.80513 24.5407C6.74149 24.6943 6.70874 24.859 6.70874 25.0253C6.70874 25.1916 6.74149 25.3562 6.80513 25.5099C6.86877 25.6635 6.96204 25.8031 7.07963 25.9207C7.3171 26.1581 7.63919 26.2916 7.97503 26.2916C8.14132 26.2916 8.30598 26.2588 8.45961 26.1952C8.61325 26.1315 8.75284 26.0383 8.87043 25.9207L16.5 18.2889L24.1318 25.9207C24.3693 26.1579 24.6913 26.291 25.0269 26.2908C25.3625 26.2906 25.6843 26.157 25.9215 25.9196C26.1587 25.6821 26.2918 25.3601 26.2916 25.0245C26.2914 24.6889 26.1579 24.3671 25.9204 24.1299L18.2886 16.5003L25.9204 8.87067Z" fill="#1D1D1D"/>
                                </svg>
                            </Link>
                        <div className={styles.img}></div>
                            <h3 className={styles.title}>{t('title1')}</h3>
                            <p className={styles.text}>{t('sub1')}</p>
                            <Link className={styles.btn} href="/donate">
                            {t('btn1')}
                            </Link>
                        </div>
                        </div>
                        <FirstHelp></FirstHelp>
                        <Bank></Bank>
                        <BankQR></BankQR>
                        <Crypto></Crypto>
                    </div>
                <Footer />
            </>
        );
    }
    else if(status === ""){
        return(
            <>
            <div className={styles.container}>
                    <Header />
                </div>
                <div className={stylesPop.body__container}>
                <div className={styles.modal__do}>
                    <div className={styles.modal__content}>
                            <Link className={styles.btn__exit} href="/donate">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9204 8.87067C26.038 8.75323 26.1313 8.61378 26.195 8.46028C26.2587 8.30678 26.2915 8.14224 26.2916 7.97605C26.2917 7.80986 26.2591 7.64528 26.1956 7.4917C26.1321 7.33812 26.039 7.19856 25.9215 7.08097C25.8041 6.96339 25.6646 6.87008 25.5111 6.80639C25.3576 6.7427 25.1931 6.70986 25.0269 6.70976C24.8607 6.70966 24.6961 6.74229 24.5426 6.8058C24.389 6.8693 24.2494 6.96243 24.1318 7.07987L16.5 14.7117L8.87043 7.07987C8.63295 6.8424 8.31087 6.70898 7.97503 6.70898C7.63919 6.70898 7.3171 6.8424 7.07963 7.07987C6.84215 7.31735 6.70874 7.63943 6.70874 7.97527C6.70874 8.31111 6.84215 8.6332 7.07963 8.87067L14.7114 16.5003L7.07963 24.1299C6.96204 24.2475 6.86877 24.387 6.80513 24.5407C6.74149 24.6943 6.70874 24.859 6.70874 25.0253C6.70874 25.1916 6.74149 25.3562 6.80513 25.5099C6.86877 25.6635 6.96204 25.8031 7.07963 25.9207C7.3171 26.1581 7.63919 26.2916 7.97503 26.2916C8.14132 26.2916 8.30598 26.2588 8.45961 26.1952C8.61325 26.1315 8.75284 26.0383 8.87043 25.9207L16.5 18.2889L24.1318 25.9207C24.3693 26.1579 24.6913 26.291 25.0269 26.2908C25.3625 26.2906 25.6843 26.157 25.9215 25.9196C26.1587 25.6821 26.2918 25.3601 26.2916 25.0245C26.2914 24.6889 26.1579 24.3671 25.9204 24.1299L18.2886 16.5003L25.9204 8.87067Z" fill="#1D1D1D"/>
                                </svg>
                            </Link>
                            <h3 className={styles.title}>{t('load')}</h3>
                        </div>
                        </div>
                        <FirstHelp></FirstHelp>
                        <Bank></Bank>
                        <BankQR></BankQR>
                        <Crypto></Crypto>
                    </div>
                <Footer />
            </>
        )
    }
}
