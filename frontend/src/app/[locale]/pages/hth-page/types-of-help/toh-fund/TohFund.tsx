import styles from './TohFund.module.scss';
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl';

export const TohFund = () => {
	const t = useTranslations("htj");
	return (
		<section className={styles.typesOfHelp}>
			<div className={styles.wrapper}>
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
			<div className={styles.wrapperPhone}>
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