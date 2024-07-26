'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import debounce from 'lodash/debounce';
import styles from './Newsletter.module.scss';
import Image from "next/image";
import { useTranslations } from 'next-intl';
import {ModalText} from "@/app/[locale]/components/modal/Modal";
interface NewsletterProps {}

export const Newsletter: React.FC<NewsletterProps> = () => {
    const [email, setEmail] = useState<string>('');
    const [language, setLanguage] = useState<string>('uk');
    const [emailError, setEmailError] = useState<boolean>(false);
    const [emailErrorTrim, setEmailErrorTrim] = useState<boolean>(false);
    const [attemptedSubmission, setAttemptedSubmission] = useState<boolean>(false);
    const [attemptedSubmissionFormat, setAttemptedSubmissionFormat] = useState<boolean>(false);
    const t = useTranslations("letter");
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        if (attemptedSubmission) {
            validateEmail(email);
        }
    }, [email, attemptedSubmission]);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (attemptedSubmission) {
            validateEmail(e.target.value);
        }
    };

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value);
    };

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateEmail = debounce((email: string) => {
        if (!email.trim()) {
            setEmailErrorTrim(true);
            return;
        } else {
            setEmailErrorTrim(false);
        }
        if (attemptedSubmissionFormat){
            if (!isValidEmail(email)) {
                setEmailError(true);
                return;
            }
        }
        setEmailError(false);
        setEmailErrorTrim(false);
    }, 500);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAttemptedSubmission(true)
        if (!email.trim()) {
            setEmailErrorTrim(true)
            return;
        }

        if (!isValidEmail(email)) {
            setEmailError(true)
            setAttemptedSubmissionFormat(true)
            return;
        }

        const data = {
            email,
            language
        };

        try {
            console.log(data)
            const response = await axios.post('https://timoshas-smile.org:8443/email/send_data/', data);

            if (response.status === 200) {
                setEmail('');
                setAttemptedSubmission(false)
                setEmailErrorTrim(false)
                setEmailError(false)
                setShowModal(true);
            } else {
                alert('Failed to subscribe. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting subscription:', error);
            alert('Failed to subscribe. Please try again later.');
        }
    };
    const ModalWrapper = ({ onClose, children }: { onClose: () => void; children: React.ReactNode }) => {
        const handleClickOutside = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (event.target === event.currentTarget) {
                onClose();
            }
        };

        return (
            <div className={styles.modalWrapper}>
                <div className={styles.modalBackdrop} onClick={handleClickOutside}>
                    {children}
                </div>
            </div>
        );
    };
    return (
        <>
            {showModal &&
                <ModalWrapper onClose={() => setShowModal(false)}>
                    <ModalText show={showModal} onClose={() => setShowModal(false)} />
                </ModalWrapper>
            }
            <section className={styles.newsletter}>
                <div className={styles.wrapper}>
                    <div className={styles.txtPart}>
                        <Image src={'/image 14.png'}
                               alt={'hand'}
                               width={70}
                               height={66}
                               className={styles.hand}/>
                        <p className={styles.txt}>{t('text')}</p>
                        <Image src={'/image 15.png'}
                               alt={'hearts'}
                               width={70} height={74}
                               className={styles.hearts}/>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label className={`${styles.email} `}>
                            {t('mail')}
                            <input
                                className={emailError || emailErrorTrim ? styles.error : ''}
                                type="text"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="email@gmail.com"
                            />
                            {!emailErrorTrim && emailError && <p className={styles.errorMessage}>Невірний формат email</p>}
                            {emailErrorTrim && <p className={styles.errorMessage}>Поле є обов'язковим</p>}
                        </label>
                        <label className={styles.language}>
                            {t('lang')}
                            <div className={styles.select}>
                                <select value={language} onChange={handleLanguageChange}>
                                    <option value="uk">🇺🇦 українська</option>
                                    <option value="ru">🇷🇺 русский</option>
                                    <option value="it">🇮🇹 italiano</option>
                                    <option value="en">🇺🇸 english</option>
                                </select>
                            </div>
                        </label>
                        <button type="submit" className={styles.btn}>
                            {t('btn')}
                        </button>
                    </form>
                </div>
            </section>
        </>

    );
}
