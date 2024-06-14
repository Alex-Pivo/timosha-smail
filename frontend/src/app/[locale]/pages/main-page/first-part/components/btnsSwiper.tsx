import { useSwiper } from "swiper/react";

import styles from "../styles/reviews.module.scss";

export default function BtnsSwiper() {
  const swiper = useSwiper();

  return (
    <>
      <div className={styles.btns__container}>
        <button className={styles.prev} onClick={() => swiper.slidePrev()}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="42"
            viewBox="0 0 43 42"
            fill="none"
          >
            <path
              d="M18 12.25L26.75 21L18 29.75"
              stroke="#649612"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button className={styles.next} onClick={() => swiper.slideNext()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="42"
            viewBox="0 0 43 42"
            fill="none"
          >
            <path
              d="M18 12.25L26.75 21L18 29.75"
              stroke="#649612"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
