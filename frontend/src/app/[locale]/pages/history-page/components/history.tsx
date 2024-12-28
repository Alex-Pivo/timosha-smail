"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import BtnsHistory from "./btnsHistory";
import { useTranslations } from "next-intl";
import styles from "../styles/history.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/historySwipe.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLocale } from "next-intl";

const PATH = "/history/slider/1.png";
const PATH2 = "/history/slider/2.png";
const PATH3 = "/history/slider/3.png";
const PATH4 = "/history/slider/4.png";
const PATH5 = "/history/slider/en.jpg";

export default function HistoryPart() {
  const [isLastSlide, setIsLastSlide] = useState(false);
  const t = useTranslations("History");
  let [active, setActive] = useState(true);
  let locale = useLocale();

  const handleSlideChange = (swiper: any) => {
    if (swiper.activeIndex === 4) {
      swiper.allowSlideNext = false;
      setIsLastSlide(true);
    } else {
      swiper.allowSlideNext = true;
      setIsLastSlide(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 767) {
      setActive((active = false));
    }
  }, []);

  return (
    <>
      <div className={styles.history}>
        <div className={styles.container}>
          <p className={styles.pages}>
            <Link href="/" className={styles.main}>
              {t("main")}{" "}
            </Link>
            /
            <Link href="/history" className={styles.historyLink}>
              {" "}
              {t("mTitle")}
            </Link>
          </p>
          <div className={styles.titlebox}>
            <div className={styles.cartoonsLeft}></div>
            <h2 className={styles.title}>{t("mTitle")}</h2>
            <div className={styles.cartoonsRight}></div>
          </div>
          <div className={styles.histories}>
            <Swiper
              // slidesPerView={1.19}
              autoHeight={true}
              slidesPerView="auto"
              breakpoints={{
                376: {
                  autoHeight: true,
                },
              }}
              spaceBetween={99}
              className="historySwipe"
              allowTouchMove={!isLastSlide}
              slideActiveClass="active"
              onActiveIndexChange={handleSlideChange}
            >
              <SwiperSlide className={styles.slide}>
                <div className={styles.inSlide}>
                  <div
                    className={styles.photo}
                    style={{
                      background: `url(${PATH})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className={styles.info}>
                    <p className={styles.year}>{t("year1")}</p>
                    <p className={styles.text}>{t("text1")}</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.inSlide}>
                  <div
                    className={styles.photo}
                    style={{
                      background: `url(${PATH2})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className={styles.info}>
                    <p className={styles.year}>{t("year2")}</p>
                    <p className={styles.text}>{t("text2")}</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.inSlide}>
                  <div
                    className={styles.photo}
                    style={{
                      background: `url(${PATH3})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className={styles.info}>
                    <p className={styles.year}>{t("year3")}</p>
                    <p className={styles.text}>{t("text3")}</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.inSlide}>
                  <div
                    className={styles.photo}
                    style={{
                      background: `url(${PATH4})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className={styles.info}>
                    <p className={styles.year}>{t("year4")}</p>
                    <p
                      className={styles.text}
                      id={styles.slideText}
                      // style={{
                      //   width: "100%",
                      // }}
                    >
                      {t("text4")}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                {locale === "en" && (
                  <div className={styles.inSlide}>
                    <div
                       className={`${styles.photo} ${styles.photo1}`}
                      style={{
                        background: `url(${PATH5})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div className={styles.info}>
                      <p className={styles.year}>{t("year5")}</p>
                      <p className={styles.text}>
                        {t("text5")}(
                        <a
                          style={{
                            textDecoration: "underline",
                          }}
                          className={styles.text}
                          href="https://sankostory.com/"
                        >
                          www.SankoStory.com
                        </a>
                        , 
                        <a
                          style={{
                            textDecoration: "underline",
                          }}
                          className={styles.text}
                          href="https://www.instagram.com/sankostory_book?igsh=MXZkMGpiNzRiYWFudw=="
                        >
                          @sankostory_book)
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                {locale === "ua" && (
                  <div className={styles.inSlide}>
                    <div
                      className={styles.photo}
                      style={{
                        background: `url("/history/slider/ua.jpg")`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div className={styles.info}>
                      <p className={styles.year}>{t("year5")}</p>
                      <p className={styles.text}>
                        {t("text5")}(
                        <a
                          style={{
                            textDecoration: "underline",
                          }}
                          className={styles.text}
                          href="https://sankostory.com/"
                        >
                          www.SankoStory.com
                        </a>
                        , 
                        <a
                          style={{
                            textDecoration: "underline",
                          }}
                          className={styles.text}
                          href="https://www.instagram.com/sankostory_book?igsh=MXZkMGpiNzRiYWFudw=="
                        >
                          @sankostory_book)
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                {locale === "it" && (
                  <div className={styles.inSlide}>
                    <div
                      className={styles.photo}
                      style={{
                        background: `url("/history/slider/it.jpg")`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div className={styles.info}>
                      <p className={styles.year}>{t("year5")}</p>
                      <p className={styles.text}>
                        {t("text5")}(
                        <a
                          style={{
                            textDecoration: "underline",
                          }}
                          className={styles.text}
                          href="https://sankostory.com/"
                        >
                          www.SankoStory.com
                        </a>
                        , 
                        <a
                          style={{
                            textDecoration: "underline",
                          }}
                          className={styles.text}
                          href="https://www.instagram.com/sankostory_book?igsh=MXZkMGpiNzRiYWFudw=="
                        >
                          @sankostory_book)
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                {locale === "ru" && (
                  <div className={styles.inSlide}>
                    <div
                      className={styles.photo}
                      style={{
                        background: `url("/history/slider/ru.jpg")`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div className={styles.info}>
                      <p className={styles.year}>{t("year5")}</p>
                      <p className={styles.text}>
                        {t("text5")}(
                        <a
                          style={{
                            textDecoration: "underline",
                          }}
                          className={styles.text}
                          href="https://sankostory.com/"
                        >
                          www.SankoStory.com
                        </a>
                        , 
                        <a
                          style={{
                            textDecoration: "underline",
                          }}
                          className={styles.text}
                          href="https://www.instagram.com/sankostory_book?igsh=MXZkMGpiNzRiYWFudw=="
                        >
                          @sankostory_book)
                        </a>
                      </p>
                    </div>
                  </div>
                )}
              </SwiperSlide>
              {active && <SwiperSlide />}
              <BtnsHistory />
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
