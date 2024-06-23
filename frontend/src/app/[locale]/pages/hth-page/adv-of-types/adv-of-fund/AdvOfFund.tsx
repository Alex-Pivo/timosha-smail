'use client'
import styles from './AdvOfFund.module.scss';
import React from 'react'
import { useTranslations } from 'next-intl';
import {useScroll} from "@/app/[locale]/components/scroll-context/ScrollContext";
export const Fundraising = () => {
	const t = useTranslations("htj");
	const { scrollToContact } = useScroll();
	const handleButtonClick = (param: string) => {
		scrollToContact(param);
	};
	return (
		<section className={styles.fundraising}>
			<div className={styles.wrapper}>
				<div className={styles.firstPack}>
					<button className={styles.btn}>
						{t('btn7')}
					</button>
					<button className={styles.btn}>
						{t('btn8')}
					</button>
				</div>
				<div className={styles.arrows}>
					<svg xmlns="http://www.w3.org/2000/svg" className={styles.leftAr} width="82" height="79" viewBox="0 0 82 79" fill="none">
						<path
							d="M2.7828 0.722547C2.35342 0.0140784 1.43102 -0.212172 0.722547 0.217203C0.0140784 0.646578 -0.212172 1.56898 0.217203 2.27745L2.7828 0.722547ZM80.7742 76.4747C81.5887 76.3233 82.1262 75.5403 81.9747 74.7258L79.507 61.4533C79.3555 60.6388 78.5725 60.1013 77.758 60.2527C76.9436 60.4042 76.4061 61.1872 76.5575 62.0017L78.7511 73.7995L66.9533 75.993C66.1388 76.1445 65.6013 76.9275 65.7527 77.742C65.9042 78.5564 66.6872 79.0939 67.5017 78.9425L80.7742 76.4747ZM52.4646 57.5747L79.6511 76.2367L81.3489 73.7633L54.1624 55.1014L52.4646 57.5747ZM0.217203 2.27745C13.5097 24.2101 31.3205 43.0606 52.4646 57.5747L54.1624 55.1014C33.3695 40.8283 15.8545 22.2909 2.7828 0.722547L0.217203 2.27745Z"
							fill="#649612" />
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" width="83" className={styles.rightAr} height="79" viewBox="0 0 83 79" fill="none">
						<path
							d="M79.7172 0.722547C80.1466 0.0140784 81.069 -0.212172 81.7775 0.217203C82.4859 0.646578 82.7122 1.56898 82.2828 2.27745L79.7172 0.722547ZM1.72581 76.4747C0.911339 76.3233 0.37384 75.5403 0.525276 74.7258L2.99303 61.4533C3.14446 60.6388 3.92748 60.1013 4.74195 60.2527C5.55642 60.4042 6.09392 61.1872 5.94248 62.0017L3.74892 73.7995L15.5467 75.993C16.3612 76.1445 16.8987 76.9275 16.7473 77.742C16.5958 78.5564 15.8128 79.0939 14.9983 78.9425L1.72581 76.4747ZM30.0354 57.5747L2.8489 76.2367L1.1511 73.7633L28.3376 55.1014L30.0354 57.5747ZM82.2828 2.27745C68.9903 24.2101 51.1795 43.0606 30.0354 57.5747L28.3376 55.1014C49.1305 40.8283 66.6455 22.2909 79.7172 0.722547L82.2828 2.27745Z"
							fill="#649612" />
					</svg>
				</div>
				<div className={styles.secondPack}>
					<button className={styles.btn}>
						{t('btn9')}
					</button>
				</div>
			</div>
			<div className={styles.wrapperPhone}>
				<div className={styles.firstPack}>
					<button className={styles.btn}>
						{t('btn7')}
					</button>
					<svg xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
						<path d="M6.79289 31.2227C7.18342 31.6133 7.81658 31.6133 8.20711 31.2227L14.5711 24.8588C14.9616 24.4682 14.9616 23.8351 14.5711 23.4446C14.1805 23.054 13.5474 23.054 13.1569 23.4446L7.5 29.1014L1.84315 23.4446C1.45262 23.054 0.819457 23.054 0.428932 23.4446C0.0384078 23.8351 0.0384078 24.4682 0.428932 24.8588L6.79289 31.2227ZM6.5 0.515625V30.5156H8.5V0.515625H6.5Z" fill="#649612" fill-opacity="0.5"/>
					</svg>
					<button className={styles.btn}>
						{t('btn8')}
					</button>
					<svg xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
						<path d="M6.79289 31.2227C7.18342 31.6133 7.81658 31.6133 8.20711 31.2227L14.5711 24.8588C14.9616 24.4682 14.9616 23.8351 14.5711 23.4446C14.1805 23.054 13.5474 23.054 13.1569 23.4446L7.5 29.1014L1.84315 23.4446C1.45262 23.054 0.819457 23.054 0.428932 23.4446C0.0384078 23.8351 0.0384078 24.4682 0.428932 24.8588L6.79289 31.2227ZM6.5 0.515625V30.5156H8.5V0.515625H6.5Z" fill="#649612"/>
					</svg>
					<div className={styles.secondPack}>
						<button className={styles.btn}>
							{t('btn9')}
						</button>
					</div>
				</div>
			</div>
			<div className={styles.joinBtn}>
				<button className={styles.contact} onClick={() => handleButtonClick('fund')}>
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
