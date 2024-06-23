'use client'
import styles from './AdvOfVol.module.scss';
import React, {useRef} from 'react'
import { useTranslations } from 'next-intl';
import {useScroll} from "@/app/[locale]/components/scroll-context/ScrollContext";

export const Advantages = () => {
	const t = useTranslations("htj");
	const { scrollToContact } = useScroll();
	const handleButtonClick = (param: string) => {
		scrollToContact(param);
	};
	return (
		<section className={styles.advantages}>
			<div className={styles.title}>
				<h2 className={styles.mainTxt}>
					{t('vol1')}
				</h2>
				<p className={styles.moreTxt}>
					{t('volsub1')}
				</p>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.firstPack}>
					<button className={styles.btn}>
						{t('btn1')}
					</button>
					<button className={styles.btn}>
						{t('btn2')}
					</button>
					<button className={styles.btn}>
						{t('btn3')}
					</button>
				</div>
				<div className={styles.secondPack}>
					<button className={styles.btn}>
						{t('btn4')}
					</button>
					<button className={styles.btn}>
						{t('btn5')}
					</button>
				</div>
				<div className={styles.thirdPack}>
					<button className={styles.btn}>
						{t('btn6')}
					</button>
				</div>
			</div>
			<div className={styles.joinBtn}>
				<button className={styles.contact}  onClick={() => handleButtonClick('vol')}>
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
