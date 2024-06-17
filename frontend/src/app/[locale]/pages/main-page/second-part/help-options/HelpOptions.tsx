'use client'
import styles from './HelpOptions.module.scss';
import React from 'react'
import Image from 'next/image'
import {Link} from "@/navigation" ;
import { useRouter } from 'next/navigation'; // Добавляем useRouter для навигации
import { useTranslations } from 'next-intl';
import Option  from '@/app/[locale]/pages/main-page/second-part/help-options/option/Option'

export const HelpOptions = () => {
	const t = useTranslations("helpOptions");
	const router = useRouter();

	const handleNavigateAndScroll = (path: string) => {
		router.push(path);
	};

	return (
		<section className={styles.helpOptions}>
			<div className={styles.wrapper}>
				<div className={styles.caption}>
					{/*<Image width={653} height={110} src={'/capHelpOptions.svg'} alt={'caption-marker'}*/}
					{/*	   className={styles.imgMarker}/>*/}
					<h1 className={styles.captionTxt}>{t('title')}</h1>
					<svg className={styles.imgMarker} xmlns="http://www.w3.org/2000/svg" width="214" height="45" viewBox="0 0 214 45" fill="none">
						<path d="M141.379 2.03991C133.148 2.0399 77.4822 0.908561 29.5384 10.6936C-2.28606 17.1888 -9.45653 33.4274 23.6452 38.7819C72.6173 46.7036 137.244 42.8687 185.879 32.2677C212.927 26.372 230.781 17.3716 178.062 10.6936C169.203 9.57143 143.301 8.41227 117.661 9.31004" stroke="#649612" strokeWidth={3} stroke-linecap="round"/>
					</svg>
				</div>
				<div className={styles.options}>
					<Option
						name={t('op1')}
						description={t('des1')}
						href={'/how-to-help#wrapper'}
					/>
					<Option
						name={t('op2')}
						description={t('des2')}
						href={'/how-to-help#partner'}
					/>
					<Option
						name={t('op3')}
						description={t('des3')}
						href={'/how-to-help#fundrais'}
					/>
				</div>
				<Link href="/how-to-help#wrapper" className={styles.btn}>
					{t('btn')}
				</Link>
			</div>
		</section>
	);
};
