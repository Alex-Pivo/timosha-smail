import { useSwiper } from "swiper/react";

import styles from "../styles/btnsFirstSwiper.module.scss";

export default function BtnsFirstSwiper() {
  const swiper = useSwiper();

  return (
    <>
      <div className={styles.btns__container}>
        <button className={styles.prev} onClick={() => swiper.slidePrev()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11" fill="none">
                <path d="M1.70866 8.91667L9.00033 1.625L16.292 8.91667" stroke="#649612" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
        <button className={styles.next} onClick={() => swiper.slideNext()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path d="M10.2087 14.5833L17.5003 21.875L24.792 14.5833" stroke="#649612" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
      </div>
    </>
  );
}
