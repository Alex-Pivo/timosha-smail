"use client";
import React, { useState, useEffect } from "react";
import styles from "./GetHelp.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useTranslations } from "next-intl";
import "swiper/css";
import "swiper/css/pagination";
import { useSwiperSlide } from "swiper/react";

export const GetHelp: React.FC = () => {
  const swiperSlide = useSwiperSlide();
  const t = useTranslations("getHelp");
  const [activeStep, setActiveStep] = useState(1);
  const [highlightedStep, setHighlightedStep] = useState(1);
  const [delay, setDelay] = useState(13000);

  useEffect(() => {
    const handleResize = () => {
      setDelay(window.innerWidth <= 767 ? 6000 : 13000);
    };

    handleResize(); // Устанавливаем значение при загрузке
    window.addEventListener("resize", handleResize); // Обновляем при изменении размера окна

    return () => {
      window.removeEventListener("resize", handleResize); // Очищаем слушатель при размонтировании
    };
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      const isPhone = window.innerWidth <= 767;
      return isPhone ? 6000 : 13000;
    };

    const intervalDuration = checkScreenSize();
    const intervalId = setInterval(() => {
      setActiveStep((prevStep) => (prevStep % 3) + 1);
      setHighlightedStep((prevStep) => (prevStep % 3) + 1);
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.getHelp}>
      <div className={styles.wrapper}>
        <div className={styles.caption}>{t("title")}</div>
        <div className={styles.steps}>
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`${styles.stepAll} ${
                highlightedStep === step ? styles.highlighted : ""
              }`}
            >
              {highlightedStep === step && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="50"
                  viewBox="0 0 37 50"
                  fill="none"
                >
                  <path d="M" fill="#F8CDBA" />
                </svg>
              )}
              <h3 className={styles.captionStep}>
                {t("op")} {step}
              </h3>
              <div className={styles.loadWrapper}>
                <p className={styles.text}>
                  {step === 1 && t("des1")}
                  {step === 2 && t("des2")}
                  {step === 3 && t("des3")}
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
            rewind={true}
            slidesPerView={2}
            spaceBetween={180}
            onSlidesUpdated={(swiper) => {
              swiper.activeIndex++;
            }}
            autoplay={{
              delay,
              disableOnInteraction: false,
              waitForTransition: false,
            }}
            modules={[Autoplay, Pagination]}
            style={{ width: "343px" }}
          >
            <SwiperSlide>
              <div
                className={`${styles.stepAll} ${
                  highlightedStep === 1 ? styles.highlighted : ""
                }`}
              >
                <h3 className={styles.captionStep}>{t("op1")}</h3>
                <div className={styles.loadWrapper}>
                  <p className={styles.text}>{t("des1")}</p>
                  {highlightedStep === 1 && (
                    <div className={styles.loadingBar}>
                      <div className={styles.progressBar}></div>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`${styles.stepAll} ${
                  highlightedStep === 2 ? styles.highlighted : ""
                }`}
              >
                <h3 className={styles.captionStep}>{t("op2")}</h3>
                <div className={styles.loadWrapper}>
                  <p className={styles.text}>{t("des2")}</p>
                  {highlightedStep === 2 && (
                    <div className={styles.loadingBar}>
                      <div className={styles.progressBar}></div>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`${styles.stepAll} ${
                  highlightedStep === 3 ? styles.highlighted : ""
                }`}
              >
                <h3 className={styles.captionStep}>{t("op3")}</h3>
                <div className={styles.loadWrapper}>
                  <p className={styles.text}>{t("des3")}</p>
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
