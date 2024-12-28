"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../styles/stylesPagination.css";
import styles from "../styles/firstSlider.module.scss";

import BtnsFirstSwiper from "../components/btnsFirstSwiper";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { hidden } from "next/dist/lib/picocolors";

export default function Slider({ locale }: any) {
  let localeValue = locale;
  let [state, setState] = useState<any[]>([]);
  let [mouse, setMouse] = useState(true);
  let [active, setActive] = useState(true);
  const t = useTranslations("mSlider");

  function componentDidMount() {
    if (localeValue === "ua") {
      localeValue = "uk";
    }
    try {
      let data;
      axios
        .get(`https://timoshas-smile.org/api/${localeValue}/`)
        .then((res) => {
          data = res.data;
          setState(data);
          console.log(data);
        })
        .catch((err) => {});
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    componentDidMount();

    if (window.innerWidth <= 767) {
      setActive((active = false));
    } else {
      setActive((active = true));
    }
  }, []);

  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        // delay: 0.2,
        duration: 0.3,
      },
    },
  };
  return (
    <>
      {state.length > 0 && (
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 10500,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          className={styles.swiper}
        >
          <SwiperSlide className={styles.swiperslide}>
            <div
              className={styles.firstImage}
              style={{
                width: "100%",
                height: "100%",
                background: `${
                  active
                    ? `linear-gradient(180deg, rgba(24, 24, 24, 0.15) 0%, rgba(15, 15, 15, 0.44) 78.66%), url("https://timoshas-smile.org/img${state[0].image1.replace('/media_storage/media_storage', '')}")`
                    : `linear-gradient(180deg, rgba(24, 24, 24, 0.15) 0%, rgba(15, 15, 15, 0.44) 78.66%), url("/tel.jpg")`
                }`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className={styles.info__container1}>
                <div
                  onMouseEnter={() => {
                    setMouse((mouse = false));
                  }}
                  onMouseLeave={() => {
                    setMouse((mouse = true));
                  }}
                  onClick={() => {
                    setMouse((mouse = true));
                  }}
                  className={styles.zone}
                >
                  <div className={styles.circle}>
                    <a href={state[0].image_url_new1}>
                      {t("read")} {state[0].read_story1}
                    </a>
                  </div>
                </div>
                <p className={mouse ? styles.myk : styles.mykDis}>
                  {state[0].child_name1} <br /> {state[0].child_age1}
                </p>
              </div>
              <motion.div
                className={styles.text}
                initial="hidden"
                whileInView="visible"
              >
                <svg
                  className={styles.line}
                  xmlns="http://www.w3.org/2000/svg"
                  width="384"
                  height="101"
                  viewBox="0 0 384 101"
                  fill="none"
                >
                  <path
                    d="M251.157 5.09801C236.279 5.09799 135.666 2.31958 49.0106 26.3503C-8.51028 42.3016 -10.8188 70.7764 49.0107 83.9263C137.525 103.381 239.879 97.4785 331.588 79.333C381.046 69.5472 412.746 42.7503 317.459 26.3503C301.447 23.5943 254.629 20.7476 208.286 22.9524"
                    stroke="#649612"
                    stroke-width="9"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  className={styles.line1}
                  xmlns="http://www.w3.org/2000/svg"
                  width="296"
                  height="63"
                  viewBox="0 0 296 63"
                  fill="none"
                >
                  <path
                    d="M193.87 3.06139C182.334 3.06138 104.319 1.32106 37.1258 16.3733C-7.47589 26.3647 -9.2659 44.2006 37.1259 52.4374C105.76 64.6232 185.125 60.9261 256.237 49.5602C294.587 43.4307 319.167 26.6458 245.281 16.3733C232.865 14.647 196.563 12.8639 160.629 14.2449"
                    stroke="#649612"
                    stroke-width="6"
                    stroke-linecap="round"
                  />
                </svg>
                <motion.h1 variants={textAnimation} className={styles.title}>
                  {t("title1")}
                </motion.h1>
                <motion.h3
                  variants={textAnimation}
                  className={styles.description}
                >
                  {t("subtitle")}
                </motion.h3>
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslide}>
            <div
              className={styles.secondImage}
              style={{
                width: "100%",
                height: "100%",
                background: `linear-gradient(180deg, rgba(24, 24, 24, 0.15) 0%, rgba(15, 15, 15, 0.44) 78.66%), url("https://timoshas-smile.org/img${state[0].image2.replace('/media_storage/media_storage', '')}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className={styles.info__container1}>
                <div
                  onMouseEnter={() => {
                    setMouse((mouse = false));
                  }}
                  onMouseLeave={() => {
                    setMouse((mouse = true));
                  }}
                  onClick={() => {
                    setMouse((mouse = true));
                  }}
                  className={`${styles.zone2} ${styles.zone}`}
                >
                  <div className={styles.circle}>
                    <a href={state[0].image_url_new2}>
                      {t("read")} {state[0].read_story2}
                    </a>
                  </div>
                </div>
                <p className={mouse ? styles.myk : styles.mykDis}>
                  {state[0].child_name2} <br /> {state[0].child_age2}
                </p>
              </div>
              <div className={styles.text}>
                <svg
                  className={styles.line}
                  xmlns="http://www.w3.org/2000/svg"
                  width="501"
                  height="101"
                  viewBox="0 0 501 101"
                  fill="none"
                >
                  <path
                    d="M328.163 5.09801C308.631 5.09799 176.543 2.31958 62.7786 26.3503C-12.7368 42.3016 -15.7674 70.7764 62.7787 83.9263C178.983 103.381 313.357 97.4785 433.756 79.333C498.686 69.5472 540.303 42.7503 415.207 26.3503C394.185 23.5943 332.722 20.7476 271.881 22.9524"
                    stroke="#649612"
                    stroke-width="9"
                    stroke-linecap="round"
                  />
                </svg>
                <h1 className={styles.title}>{t("title2")}</h1>
                <h3 className={styles.description}>{t("subtitle")}</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslide}>
            <div
              className={styles.thirdImage}
              style={{
                width: "100%",
                height: "100%",
                background: `linear-gradient(180deg, rgba(24, 24, 24, 0.15) 0%, rgba(15, 15, 15, 0.44) 78.66%), url("url("https://timoshas-smile.org/img${state[0].image3.replace('/media_storage/media_storage', '')}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className={styles.info__container1}>
                <div
                  onMouseEnter={() => {
                    setMouse((mouse = false));
                  }}
                  onMouseLeave={() => {
                    setMouse((mouse = true));
                  }}
                  onClick={() => {
                    setMouse((mouse = true));
                  }}
                  className={`${styles.zone3} ${styles.zone}`}
                >
                  <div className={styles.circle}>
                    <a href={state[0].image_url_new3}>
                      {t("read")} {state[0].read_story3}
                    </a>
                  </div>
                </div>
                <p className={mouse ? styles.myk : styles.mykDis}>
                  {state[0].child_name3} <br /> {state[0].child_age3}
                </p>
              </div>
              <div className={styles.text}>
                <svg
                  className={styles.line}
                  xmlns="http://www.w3.org/2000/svg"
                  width="468"
                  height="101"
                  viewBox="0 0 468 101"
                  fill="none"
                >
                  <path
                    d="M306.444 5.09801C288.224 5.09799 165.014 2.31958 58.8953 26.3503C-11.5447 42.3016 -14.3717 70.7764 58.8954 83.9263C167.29 103.381 292.633 97.4785 404.94 79.333C465.506 69.5472 504.325 42.7503 387.638 26.3503C368.028 23.5943 310.696 20.7476 253.944 22.9524"
                    stroke="#649612"
                    stroke-width="9"
                    stroke-linecap="round"
                  />
                </svg>
                <h1 className={styles.title}>{t("title3")}</h1>
                <h3 className={styles.description}>{t("subtitle")}</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslide}>
            <div
              className={styles.fourthImage}
              style={{
                width: "100%",
                height: "100%",
                background: `linear-gradient(180deg, rgba(24, 24, 24, 0.15) 0%, rgba(15, 15, 15, 0.44) 78.66%), url("https://timoshas-smile.org/img${state[0].image4.replace('/media_storage/media_storage', '')}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className={styles.info__container1}>
                <div
                  onMouseEnter={() => {
                    setMouse((mouse = false));
                  }}
                  onMouseLeave={() => {
                    setMouse((mouse = true));
                  }}
                  onClick={() => {
                    setMouse((mouse = true));
                  }}
                  className={`${styles.zone4} ${styles.zone}`}
                >
                  <div className={styles.circle}>
                    <a href={state[0].image_url_new4}>
                      {t("read")} {state[0].read_story4}
                    </a>
                  </div>
                </div>
                <p className={mouse ? styles.myk : styles.mykDis}>
                  {state[0].child_name4} <br /> {state[0].child_age4}
                </p>
              </div>
              <div className={styles.text}>
                <svg
                  className={styles.line}
                  xmlns="http://www.w3.org/2000/svg"
                  width="298"
                  height="101"
                  viewBox="0 0 298 101"
                  fill="none"
                >
                  <path
                    d="M194.554 5.09801C183.097 5.09799 105.62 2.31958 38.8905 26.3503C-5.40364 42.3016 -7.18131 70.7764 38.8906 83.9263C107.051 103.381 185.869 97.4785 256.49 79.333C294.576 69.5472 318.986 42.7503 245.61 26.3503C233.28 23.5943 197.228 20.7476 161.541 22.9524"
                    stroke="#649612"
                    stroke-width="9"
                    stroke-linecap="round"
                  />
                </svg>
                <h1 className={styles.title}>{t("title4")}</h1>
                <h3 className={styles.description}>{t("subtitle")}</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslide}>
            <div
              className={styles.fifthImage}
              style={{
                width: "100%",
                height: "100%",
                background: `linear-gradient(180deg, rgba(24, 24, 24, 0.15) 0%, rgba(15, 15, 15, 0.44) 78.66%), url("https://timoshas-smile.org/img${state[0].image5.replace('/media_storage/media_storage', '')}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className={styles.info__container1}>
                <div
                  onMouseEnter={() => {
                    setMouse((mouse = false));
                  }}
                  onMouseLeave={() => {
                    setMouse((mouse = true));
                  }}
                  onClick={() => {
                    setMouse((mouse = true));
                  }}
                  className={`${styles.zone5} ${styles.zone}`}
                  id="read5"
                >
                  <div className={styles.circle}>
                    <a href={state[0].image_url_new5}>
                      {t("read")} {state[0].read_story5}
                    </a>
                  </div>
                </div>
                <p className={mouse ? styles.myk : styles.mykDis}>
                  {state[0].child_name5} <br /> {state[0].child_age5}
                </p>
              </div>
              <div className={styles.text}>
                <svg
                  className={styles.line}
                  xmlns="http://www.w3.org/2000/svg"
                  width="378"
                  height="101"
                  viewBox="0 0 378 101"
                  fill="none"
                >
                  <path
                    d="M247.208 5.09801C232.568 5.09799 133.57 2.31958 48.3045 26.3503C-8.29354 42.3016 -10.565 70.7764 48.3046 83.9263C135.399 103.381 236.111 97.4785 326.349 79.333C375.013 69.5472 406.204 42.7503 312.447 26.3503C296.691 23.5943 250.624 20.7476 205.025 22.9524"
                    stroke="#649612"
                    stroke-width="9"
                    stroke-linecap="round"
                  />
                </svg>
                <h1 className={styles.title}>{t("title5")}</h1>
                <h3 className={styles.description}>{t("subtitle")}</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperslide}>
            <div
              className={styles.thixImage}
              style={{
                width: "100%",
                height: "100%",
                background: `linear-gradient(180deg, rgba(24, 24, 24, 0.15) 0%, rgba(15, 15, 15, 0.44) 78.66%), url("https://timoshas-smile.org/img${state[0].image6.replace('/media_storage/media_storage', '')}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className={styles.info__container1}>
                <div
                  onMouseEnter={() => {
                    setMouse((mouse = false));
                  }}
                  onMouseLeave={() => {
                    setMouse((mouse = true));
                  }}
                  onClick={() => {
                    setMouse((mouse = true));
                  }}
                  className={styles.zone}
                >
                  <div className={styles.circle}>
                    <a href={state[0].image_url_new6}>
                      {t("read")} {state[0].read_story6}
                    </a>
                  </div>
                </div>
                <p className={mouse ? styles.myk : styles.mykDis}>
                  {state[0].child_name6} <br /> {state[0].child_age6}
                </p>
              </div>
              <div className={styles.text}>
                <svg
                  className={styles.line}
                  xmlns="http://www.w3.org/2000/svg"
                  width="363"
                  height="101"
                  viewBox="0 0 363 101"
                  fill="none"
                >
                  <path
                    d="M237.335 5.09801C223.292 5.09799 128.329 2.31958 46.5394 26.3503C-7.75168 42.3016 -9.93056 70.7764 46.5395 83.9263C130.084 103.381 226.691 97.4785 313.25 79.333C359.931 69.5472 389.851 42.7503 299.915 26.3503C284.801 23.5943 240.613 20.7476 196.872 22.9524"
                    stroke="#649612"
                    stroke-width="9"
                    stroke-linecap="round"
                  />
                </svg>
                <h1 className={styles.title}>{t("title6")}</h1>
                <h3 className={styles.description}>{t("subtitle")}</h3>
              </div>
            </div>
          </SwiperSlide>
          <BtnsFirstSwiper></BtnsFirstSwiper>
        </Swiper>
      )}
    </>
  );
}
