"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/[locale]/news/News.module.scss";
import Header from "@/app/[locale]/components/header/Header";
import { Footer } from "@/app/[locale]/components/footer/Footer";
import Articles from "@/app/[locale]/pages/news/articles";
import stylesArticles from "@/app/[locale]/news/[slug]/styles.module.scss";
import article from "./styles.module.scss";
import { usePathname } from "next/navigation";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SlideBtnsTwo from "./btns";
import ReactPlayer from "react-player";
import { Link } from "@/navigation";
import { DonateHelp } from "@/app/[locale]/pages/main-page/second-part/donate-help/DonateHelp";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/scss/pagination";
import "./pagination.css";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import reactStringReplace from "react-string-replace";
import TextWithLinks from "./TextWithLinks";

export default function Page() {
  let [state, setState] = useState<any[]>([]);
  const pathname = usePathname();
  const t = useTranslations("new");
  const c = useTranslations('Index');
  const id = pathname.split("/").pop(); // Получить id из пути
  // const idNum = parseInt(id);
  let locale = useLocale();
  let [hidden, setHidden] = useState(true);
  let newStr: string = id ? id.slice(0, -2) : "";

  const [loading, setLoading] = useState(true);
  let [data, setData] = useState("");

  useEffect(() => {
    if (locale === "ua") {
      locale = "uk";
    }
    try {
      axios
        .get(`https://timoshas-smile.org/api/news/${locale}/`)
        .then((res) => {
          setState(res.data);
          console.log(newStr);
        })
        .catch((err) => {});
    } catch (error) {
      console.log("error", error);
    }
  }, [locale]);

  useEffect(() => {
    if (locale === "uk") {
      locale = "ua";
    }
    // Изменяем URL без перезагрузки страницы
    const newPath = `/${locale}/news/${newStr + locale}`;
    window.history.pushState({}, "", newPath);
  }, [locale]);

  useEffect(() => {
    if (locale === "ua") {
      locale = "uk";
    }
    const item = state.find((item) => item.slug === newStr + locale);
    if (item) {
      const photos = [
        item.main_image
          ? `https://timoshas-smile.org/img${item.main_image.replace('/media_storage/media_storage', '')}`
          : null,
        item.optional_image_1
          ? `https://timoshas-smile.org/img${item.optional_image_1.replace('/media_storage/media_storage', '')}`
          : null,
        item.optional_image_2
          ? `https://timoshas-smile.org/img${item.optional_image_2.replace('/media_storage/media_storage', '')}`
          : null,
        item.optional_image_3
          ? `https://timoshas-smile.org/img${item.optional_image_3.replace('/media_storage/media_storage', '')}`
          : null,
      ].filter(Boolean);

      setHidden(photos.length < 2);
      document.title = c('title1') + " | " + item.title;
    }
  }, [state, id]);

  useEffect(() => {
    setTimeout(() => {
      setData("Данные загружены!");
      setLoading(false);
    }, 1000);
  }, []);

  // useEffect(() => {
  // 	document.title = t("news");
  //   }, [t]);

  return (
    <>
      <div className={styles.container}>
        <Header locale={locale} />
      </div>
      {loading === true ? (
        <>
          <div className={article.wrapper__load}>
            <div className={article.loading}></div>
          </div>
        </>
      ) : (
        <div className={stylesArticles.body__container}>
          <p className={article.pages}>
            <Link href="/" className={article.main}>
              {t("home")}{" "}
            </Link>
            /
            <Link href="/news" className={article.historyLink}>
              {" "}
              {t("news")}{" "}
            </Link>
            /
            <Link
              href={"/news/" + newStr + locale}
              className={article.historyLink}
            >
              {" "}
              {t("new")}
            </Link>
          </p>
          {state.map((item) => {
            if (locale === "ua") {
              locale = "uk";
            }
            if (item.slug === newStr + locale) {
              const photos = [
                item.main_image
                  ? `https://timoshas-smile.org/img${item.main_image.replace('/media_storage/media_storage', '')}`
                  : null,
                item.optional_image_1
                  ? `https://timoshas-smile.org/img${item.optional_image_1.replace('/media_storage/media_storage', '')}`
                  : null,
                item.optional_image_2
                  ? `https://timoshas-smile.org/img${item.optional_image_2.replace('/media_storage/media_storage', '')}`
                  : null,
                item.optional_image_3
                  ? `https://timoshas-smile.org/img${item.optional_image_3.replace('/media_storage/media_storage', '')}`
                  : null,
              ].filter(Boolean); // Удалить null значения

              return (
                <div className={article.wrapper} key={item.slug}>
                  <div className={article.wrapper__up}>
                    <div className={article.slider}>
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className={`photos ${article.photos}`}
                      >
                        {photos.map((photo, index) => (
                          <SwiperSlide key={index} className={article.slide}>
                            <div
                              className={article.photo}
                              style={{
                                backgroundImage: `url(${photo})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                              }}
                            ></div>
                          </SwiperSlide>
                        ))}
                        <SlideBtnsTwo hidden={hidden}></SlideBtnsTwo>
                      </Swiper>
                    </div>
                    <div className={article.info}>
                      <h2 className={article.title}>{item.title}</h2>
                      <div className={article.desc__box}>
                        <svg
                          className={article.gg}
                          xmlns="http://www.w3.org/2000/svg"
                          width="89"
                          height="78"
                          viewBox="0 0 89 78"
                          fill="none"
                        >
                          <path
                            opacity="0.89772"
                            d="M85.0009 0.635971C87.2046 0.481333 89 2.29086 89 4.5V10.9813C89 12.9356 87.5803 14.5784 85.6845 15.0528C80.1652 16.4342 76.1847 18.7602 73.7429 22.0308C71.2426 25.3798 69.8178 30.9798 69.4687 38.8308C69.3705 41.0378 71.1745 42.8318 73.3837 42.8318H83.9102C86.1193 42.8318 87.9102 44.6226 87.9102 46.8318V73.5C87.9102 75.7091 86.1193 77.5 83.9102 77.5H56.3102C54.1011 77.5 52.3102 75.7091 52.3102 73.5V48.3057C52.3102 33.222 55.0952 21.5442 60.6653 13.2725C65.6607 5.63606 73.7725 1.42388 85.0009 0.635971ZM32.6907 0.635971C34.8944 0.481333 36.6898 2.29086 36.6898 4.5V10.9813C36.6898 12.9356 35.2701 14.5784 33.3743 15.0528C27.855 16.4342 23.8745 18.7602 21.4327 22.0308C18.9324 25.3798 17.5076 30.9798 17.1585 38.8308C17.0603 41.0378 18.8643 42.8318 21.0735 42.8318H31.6C33.8091 42.8318 35.6 44.6226 35.6 46.8318V73.5C35.6 75.7091 33.8091 77.5 31.6 77.5H4C1.79086 77.5 0 75.7091 0 73.5V48.3057C0 33.222 2.78503 21.5442 8.3551 13.2725C13.3505 5.63606 21.4623 1.42388 32.6907 0.635971Z"
                            fill="#649612"
                          />
                        </svg>
                        <p className={article.desc}>{item.description}</p>
                      </div>
                      <div className={article.time__box}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
                            stroke="#649612"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 6.5V12.5L16 14.5"
                            stroke="#649612"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className={article.time}>
                          {t("time")} {item.time_to_read} {t("min")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={article.wrapper__bottom}>
                    <p className={article.text}>
                      <TextWithLinks text={item.content} />
                    </p>
                  </div>
                  {item.video && (
                    <div className={article.video}>
                      <ReactPlayer
                        url={item.video}
                        playing={false}
                        controls={true}
                        width="100%"
                        height="100%"
                        style={{ position: "absolute", top: 0, left: 0 }}
                      />
                    </div>
                  )}
                </div>
              );
            }
          })}
        </div>
      )}
      <DonateHelp></DonateHelp>
      <Footer />
    </>
  );
}
