import React from 'react';
import { useSwiper } from 'swiper/react';
import styles from './OurTeam.module.scss'

export const SwiperNavButtons = () => {
	const swiper = useSwiper();

	return (
		<div className={styles.swiper_btns}>
			<button className={styles.slider_button_left} onClick={() => swiper.slidePrev()}>
				<img src="/arrowLeft.svg" alt=""/>
			</button>
			<button className={styles.slider_button_right} onClick={() => swiper.slideNext()}>
				<img src="/arrowRight.svg" alt="" />
			</button>
		</div>
	);
};