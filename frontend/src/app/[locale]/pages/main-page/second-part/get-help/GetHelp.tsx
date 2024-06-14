'use client'
import React, { useState, useEffect } from 'react';
import styles from './GetHelp.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types'; // Import Swiper type
import { useTranslations } from 'next-intl';
import 'swiper/css';

export const GetHelp: React.FC = () => {
	const t = useTranslations("getHelp");
	const [highlightedStep, setHighlightedStep] = useState(1);
	const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

	const handleSlideChange = (swiper: SwiperType) => {
		setHighlightedStep(swiper.realIndex + 1); // Update highlighted step based on the actual slide index
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (swiperInstance) {
				swiperInstance.slideNext();
			}
		}, 6000); // Ensure this matches the autoplay delay

		return () => clearInterval(intervalId);
	}, [swiperInstance]);

	return (
		<section className={styles.getHelp}>
			<div className={styles.wrapper}>
				<div className={styles.caption}>{t('title')}</div>
				<div className={styles.steps}>
					{[1, 2, 3].map(step => (
						<div key={step} className={`${styles.stepAll} ${highlightedStep === step ? styles.highlighted : ''}`}>
							{highlightedStep === step &&
								<svg xmlns="http://www.w3.org/2000/svg" width="37" height="50" viewBox="0 0 37 50" fill="none">
									<path d="M" fill="#F8CDBA" />
								</svg>
							}
							<h3 className={styles.captionStep}>{t('op')} {step}</h3>
							<div className={styles.loadWrapper}>
								<p className={styles.text}>
									{step === 1 && t('des1')}
									{step === 2 && t('des2')}
									{step === 3 && t('des3')}
								</p>
								{highlightedStep === step && (
									<div className={styles.loadingBar}>
										<div className={styles.progressBar}></div>
									</div>
								)}
							</div>
						</div>
					))}
				</div>

				<div className={styles.stepsPhone}>
					<Swiper
						onSwiper={setSwiperInstance}
						rewind={true}
						slidesPerView={2}
						spaceBetween={180}
						autoplay={{
							delay: 6000,
							disableOnInteraction: false,
						}}
						allowTouchMove={false}
						modules={[Autoplay]}
						onSlideChange={handleSlideChange}
						style={{ width: '343px' }}
					>
						<SwiperSlide>
							<div className={`${styles.stepAll} ${highlightedStep === 1 ? styles.highlighted : ''}`}>
								<h3 className={styles.captionStep}>{t('op1')}</h3>
								<div className={styles.loadWrapper}>
									<p className={styles.text}>{t('des1')}</p>
									{highlightedStep === 1 && (
										<div className={styles.loadingBar}>
											<div className={styles.progressBar}></div>
										</div>
									)}
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={`${styles.stepAll} ${highlightedStep === 2 ? styles.highlighted : ''}`}>
								<h3 className={styles.captionStep}>{t('op2')}</h3>
								<div className={styles.loadWrapper}>
									<p className={styles.text}>{t('des2')}</p>
									{highlightedStep === 2 && (
										<div className={styles.loadingBar}>
											<div className={styles.progressBar}></div>
										</div>
									)}
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={`${styles.stepAll} ${highlightedStep === 3 ? styles.highlighted : ''}`}>
								<h3 className={styles.captionStep}>{t('op3')}</h3>
								<div className={styles.loadWrapper}>
									<p className={styles.text}>{t('des3')}</p>
									{highlightedStep === 3 && (
										<div className={styles.loadingBar}>
											<div className={styles.progressBar}></div>
										</div>
									)}
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide />
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default GetHelp;
