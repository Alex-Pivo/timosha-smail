'use client'
import styles from './TohFund.module.scss';
import React, {useEffect} from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl';

export const TohFund = () => {
	useEffect(() => {
		// Check if the URL contains the hash
		if (window.location.hash) {
			setTimeout(() => {
				const yOffset = -200; // Adjust this value based on the height of your fixed header
				const element = document.querySelector(window.location.hash);
				if (element) {
					const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
					window.scrollTo({ top: y, behavior: 'smooth' });
				}
			}, 50); // Delay to ensure the page has loaded
		}
	}, []);
	const t = useTranslations("htj");
	return (
		<section className={styles.typesOfHelp}>
			<div className={styles.wrapper} id="fundrais">
				<div className={styles.imageOfTypes} >
					<Image src={'/img8.png'} alt={'02'} width={666} height={401} className={styles.imgNote}/>
					<Image src={'/image 9_Desc.png'} alt={'02'} width={830} height={500} className={styles.imgDesc}/>
					<Image src={'/серце2.png'} alt={'02'} width={134} height={130} className={styles.hearts}/>
					<Image src={'/сонце.png'} alt={'02'} width={114} height={110} className={styles.sun}/>
				</div>
				<div className={styles.nameOfTypes}>
					<div className={styles.name}>
						<span>02</span>
						<span>{t('tit2')}</span>
					</div>
					<p className={styles.description}>
						{t('des2')}
					</p>
				</div>
			</div>
			<div className={styles.wrapperPhone} id="fundrais">
				<div className={styles.nameOfTypes}>
					<div className={styles.name}>
						<span>02</span>
						<span>{t('tit2')}</span>
					</div>
					<div className={styles.imageOfTypes} >
						<Image src={'/img8.png'} alt={'02'} width={666} height={401}/>
						<Image src={'/серце2.png'} alt={'02'} width={134} height={130} className={styles.hearts}/>
						<Image src={'/сонце.png'} alt={'02'} width={114} height={110} className={styles.sun}/>
					</div>
					<p className={styles.description}>
					{t('des2')}
					</p>
				</div>
			</div>
		</section>
	);
};
