"use client"
import { useSwiper } from 'swiper/react';

import styles from "./styles.module.scss";

export default function SlideBtnsTwo({hidden}:any) {
  const swiper = useSwiper();

  return (
    <>
    <div className={hidden ? styles.btns__hid  : styles.btns__container}>
    <button className={styles.btn} onClick={() => swiper.slidePrev()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
             <path d="M24.5 12.25L15.75 21L24.5 29.75" stroke="#649612" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
    <button className={styles.btn} onClick={() => swiper.slideNext()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
            <path d="M17.5 12.25L26.25 21L17.5 29.75" stroke="#649612" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
    </div>
    </>
  );
}

