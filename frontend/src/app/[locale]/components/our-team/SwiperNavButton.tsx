import React from 'react';
import styles from './OurTeam.module.scss';
import { Swiper as SwiperType } from 'swiper/types';

interface SwiperNavButtonsProps {
	swiperRef: React.RefObject<SwiperType | null>;
}

export const SwiperNavButtons: React.FC<SwiperNavButtonsProps> = ({ swiperRef }) => {
	return (
		<div className={styles.swiper_btns}>
			<button className={styles.slider_button_left} onClick={() => swiperRef.current?.slidePrev()}>
				<img src="/arrowLeft.svg" alt="" />
			</button>
			<button className={styles.slider_button_right} onClick={() => swiperRef.current?.slideNext()}>
				<img src="/arrowRight.svg" alt="" />
			</button>
		</div>
	);
};
