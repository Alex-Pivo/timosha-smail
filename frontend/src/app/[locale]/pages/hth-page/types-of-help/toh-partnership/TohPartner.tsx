'use client'
import styles from './TohPartner.module.scss';
import React from 'react'
import Image from "next/image";
import { useTranslations } from 'next-intl';
import {useScroll} from "@/app/[locale]/components/scroll-context/ScrollContext";
export const TohPartner = () => {
	const t = useTranslations('htj');
	const { scrollToContact } = useScroll();
	const handleButtonClick = (param: string) => {
		scrollToContact(param);
	};
	return (
		<section className={styles.typesOfHelp}>
			<div className={styles.wrapper} id="partner">
				<div className={styles.typeCard}>
					<div className={styles.nameOfTypes}>
						<div className={styles.name}>
							<span>03</span>
							<span>{t('tit3')}</span>
						</div>
						<p className={styles.description}>
							{t('des3')}
						</p>
					</div>
					<div className={styles.joinBtn}>
						<button className={styles.contact}  onClick={() => handleButtonClick('friendship')}>
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="34" viewBox="0 0 25 34" fill="none">
								<path
									d="M12.5 31.6667L23.25 20.6667M12.5 31.6667L1.75 20.6667M12.5 31.6667L12.5 12.4167M12.5 2.33342L12.5 6.91675"
									stroke="#F5F5F5" />
							</svg>
							{t('btn')}
						</button>
					</div>
				</div>
				<div className={styles.imageOfTypes} />
				<Image src={'/рибка.png'} alt={'Fish'} width={107} height={105}
					   className={styles.fish}/>
				<Image src={'/корона.png'} alt={'corona'} width={127} height={91}
					   className={styles.corona}/>
			</div>
			<div className={styles.wrapperPhone}>
				<div className={styles.typeCard}>
					<div className={styles.nameOfTypes}>
						<div className={styles.name}>
							<span>03</span>
							<span>{t('tit3')}</span>
						</div>
						{/*<div className={styles.imageOfTypes} />*/}
						<div className={styles.imageOfTypes} >
							<Image src={'/рибка.png'} alt={'Fish'} width={107} height={105}
								   className={styles.fish}/>
							<Image src={'/корона.png'} alt={'corona'} width={127} height={91}
								   className={styles.corona}/>
						</div>
						<p className={styles.description}>
						{t('des3')}
						</p>
					</div>
					<div className={styles.joinBtn}>
						<button className={styles.contact} onClick={() => handleButtonClick('friendship')}>
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="34" viewBox="0 0 25 34" fill="none">
								<path
									d="M12.5 31.6667L23.25 20.6667M12.5 31.6667L1.75 20.6667M12.5 31.6667L12.5 12.4167M12.5 2.33342L12.5 6.91675"
									stroke="#F5F5F5" />
							</svg>
							{t('btn')}
						</button>
					</div>
				</div>
			</div>
			<div className={styles.joinBtnTablet}>
				<button className={styles.contact} onClick={() => handleButtonClick('friendship')}>
					<svg xmlns="http://www.w3.org/2000/svg" width="25" height="34" viewBox="0 0 25 34" fill="none">
						<path
							d="M12.5 31.6667L23.25 20.6667M12.5 31.6667L1.75 20.6667M12.5 31.6667L12.5 12.4167M12.5 2.33342L12.5 6.91675"
							stroke="#F5F5F5" />
					</svg>
					{t('btn')}
				</button>
			</div>
		</section>
	);
};
