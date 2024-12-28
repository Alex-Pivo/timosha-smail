"use client";
import { useState, useEffect } from "react";
import { useRef } from "react";
import React, { PureComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BtnsHistory from "../history-page/components/btnsHistory";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import axios from "axios";

import styles from "./styles/reports.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "./styles/historySwipe.css";
import Slider from "../main-page/first-part/pages/slider";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const PATH = "/history/slider/1.png";
const PATH2 = "/history/slider/2.png";
const PATH3 = "/history/slider/3.png";
const PATH4 = "/history/slider/4.png";

export default function Reports({ locale }: any) {
  const t = useTranslations("Reports");
  const g = useTranslations("zmi");
  let [active, setActive] = useState(true);
  let [index, setIndex] = useState(3);
  const [scrollPosition, setScrollPosition] = useState(0);
  let localeValue = locale;

  let [state, setState] = useState<any[]>([]); // Assuming state is an array of objects with various properties
  let [article, setArticle] = useState<any[]>([]); // Assuming article is an array of objects with various properties
  let [value1, setValue1] = useState(0);
  let [value2, setValue2] = useState(0);
  let [value3, setValue3] = useState(0);
  let [value4, setValue4] = useState(0);

  const [isLastSlide, setIsLastSlide] = useState(false);
  const c = useTranslations("History");

  const handleSlideChange = (swiper: any) => {
    if (swiper.activeIndex === 3) {
      swiper.allowSlideNext = false;
      setIsLastSlide(true);
    } else {
      swiper.allowSlideNext = true;
      setIsLastSlide(false);
    }
  };

  const [isValid, setIsValid] = useState(false);

  const [selectedItem, setSelectedItem] = useState(3);

  function componentDidMount() {
    if (localeValue === "ua") {
      localeValue = "uk";
    }
    try {
      let data;
      axios
        .get(`https://timoshas-smile.org:8443/reports_articles/${localeValue}`)
        .then((res) => {
          data = res.data;
          setState((state = data.data));
          setValue1((value1 = data.data[index].first_diagram_percent));
          setValue2((value2 = data.data[index].second_diagram_percent));
          setValue3((value3 = data.data[index].third_diagram_percent));
          setValue4((value4 = data.data[index].fourth_diagram_percent));
        })
        .catch((err) => {});
    } catch (error) {
      console.log("error", error);
    }
  }

  function getArticle() {
    if (localeValue === "ua") {
      localeValue = "uk";
    }
    try {
      let data;
      axios
        .get(`https://timoshas-smile.org:8443/reports_articles/${localeValue}`)
        .then((res) => {
          data = res.data;
          setArticle((article = data.articles));
        })
        .catch((err) => {});
    } catch (error) {
      console.log("error", error);
    }
  }

  let dataCircle = [
    { name: "Group A", value: value1 * 10, numbers: "35%" },
    { name: "Group B", value: value2 * 10, numbers: "5%" },
    { name: "Group C", value: value3 * 10, numbers: "60%" },
    { name: "Group D", value: value4 * 10, numbers: "60%" },
  ];

  const COLORS = ["#5380A1", "#B0CB22", "#F37057", "#F29E9E"];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + (radius / 1.2) * Math.cos(-midAngle * RADIAN);
    const y = cy + (radius / 1.2) * Math.sin(-midAngle * RADIAN);

    const returnNumber = () => {
      if (percent * 100 === 100) {
        return (percent * 100).toFixed(0) + "%";
      } else if (percent * 100 === 0) {
        return "";
      } else {
        return (percent * 100).toFixed(1) + "%";
      }
    };

    return (
      <text
        x={x}
        y={y}
        fill={isValid ? "black" : "white"}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        className={styles.numbers}
        id={"key" + percent}
      >
        {returnNumber()}
      </text>
    );
  };

  const handleClick = (index: any) => {
    setSelectedItem(index);
  };

  const getIndex = (index: any) => {
    setIndex(index);
  };

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = (event: any) => {
      if (event.deltaY !== 0 && container) {
        event.preventDefault();
        const scrollAmount = 30;
        container.scrollLeft += event.deltaY > 0 ? scrollAmount : -scrollAmount;
      }
    };

    if (container)
      container.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      if (container) container.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const getPadding = () => {
    if (state.length > 0) {
      if (state[index] && state[index].second_description === "") {
        return 0;
      } else return 3;
    }
  };

  const handleClickDonwload = async () => {
    const url = `https://timoshas-smile.org:8443/media/${state[index].statement_file}`;
    const destination = `${state[index].statement_file_name}.png`;

    try {
      await downloadFile(url, destination);
      console.log("Файл успешно загружен");
    } catch (error) {
      console.error("Ошибка загрузки файла:", error);
    }
  };

  async function downloadFile(url: any, destination: any) {
    const res = await fetch(url);
    const blob = await res.blob();
    const file = new File([blob], destination);
    const downloadUrl = URL.createObjectURL(file);

    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = destination;
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(downloadUrl);
  }

  // const scrollRight = () => {
  //   const element = document.getElementById('scrollableBlock');
  //   if (element) {
  //     const scrollWidth = element.scrollWidth;
  //     const clientWidth = element.clientWidth;
  //     const maxScroll = scrollWidth - clientWidth;
  //     const newScrollPosition = Math.min(scrollPosition + 100, maxScroll);
  //     element.scrollTo({
  //       left: newScrollPosition,
  //       behavior: 'smooth',
  //     });
  //     setScrollPosition(newScrollPosition);
  //   }
  // };

  // const scrollLeft = () => {
  //   const element = document.getElementById('scrollableBlock');
  //   if (element) {
  //     const newScrollPosition = Math.max(scrollPosition - 100, 0);
  //     element.scrollTo({
  //       left: newScrollPosition,
  //       behavior: 'smooth',
  //     });
  //     setScrollPosition(newScrollPosition);
  //   }
  // };

  // const [scrollPosition, setScrollPosition] = useState(0);

  const scrollableRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  function isValidColor(color: string) {
    const s = new Option().style;
    s.color = color;
    return s.color === color;
  }

  useEffect(() => {
    const elementId = "sektor"; // Идентификатор блока, цвет которого нужно проверить
    const block = document.getElementById(elementId);

    if (block) {
      const color = window.getComputedStyle(block).backgroundColor;
      setIsValid(isValidColor(color));
      console.log(color);
    }
  }, []);

  useEffect(() => {
    componentDidMount();
    getArticle();
  }, []);

  const [isAnimationActive, setIsAnimationActive] = useState(false);

  useEffect(() => {
    setIsAnimationActive(true);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 767) {
      setActive((active = false));
    }
  }, []);

  useEffect(() => {
    componentDidMount();
  }, [index]);

  return (
    <>
      <div className={styles.reports}>
        <div className={styles.reports__fond}>
          <p className={styles.pages}>
            <Link href="/" className={styles.main}>
              {t("main")}{" "}
            </Link>
            /
            <Link href="/reports" className={styles.historyLink}>
              {" "}
              {t("mTitle")}
            </Link>
          </p>
          <div className={styles.titlebox}>
            <div className={styles.cartoonsLeft}></div>
            <h2 className={styles.title}>{t("mTitle")}</h2>
            <div className={styles.cartoonsRight}></div>
          </div>

          <div
            id="scrollableBlock"
            ref={scrollableRef}
            className={styles.btn__container1}
            // ref={containerRef}
          >
            {state.map((stat, i) => (
              <button
                key={stat.id}
                className={
                  selectedItem === i ? styles.btn__active : styles.btn__
                }
                onClick={() => {
                  handleClick(i);
                  getIndex(i);
                }}
              >
                {stat.year} рік
              </button>
            ))}
          </div>

          <div className={styles.container}>
            <div className={styles.diagram}>
              <PieChart
                width={708}
                height={725}
                style={{
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                <Pie
                  data={dataCircle}
                  innerRadius={150}
                  outerRadius={320}
                  fill="#8884d8"
                  paddingAngle={getPadding()}
                  strokeLinecap="butt"
                  dataKey="value"
                  labelLine={false}
                  cornerRadius={20}
                  label={renderCustomizedLabel}
                  isAnimationActive={isAnimationActive}
                  animationDuration={1500} // Длительность анимации в миллисекундах
                >
                  {dataCircle.map((entry, index) => (
                    <Cell
                      className={styles.cell}
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </div>
            <div className={styles.info}>
              <div className={styles.track}>
                <button className={styles.btnArr} onClick={scrollLeft}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="22"
                    viewBox="0 0 13 22"
                    fill="none"
                  >
                    <path
                      d="M11 2.25L2.25 11L11 19.75"
                      stroke="#649612"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                <div
                  id="scrollableBlock"
                  className={styles.btn__container}
                  ref={scrollableRef}
                >
                  {state.map((stat, i) => (
                    <button
                      key={stat.id}
                      className={
                        selectedItem === i ? styles.btn__active : styles.btn__
                      }
                      onClick={() => {
                        handleClick(i);
                        getIndex(i);
                      }}
                    >
                      {stat.year} рік
                    </button>
                  ))}
                </div>

                <button className={styles.btnArr} onClick={scrollRight}>
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

              <div className={styles.info__container}>
                <div className={styles.sektor}>
                  <div
                    className={styles.number}
                    style={{
                      backgroundColor: COLORS[0],
                    }}
                  >
                    1
                  </div>
                  <p className={styles.text}>
                    {state && state[index] && state.length > 0 && (
                      <p>{state[index].first_description}</p>
                    )}
                  </p>
                </div>
                {state.length > 0 &&
                  state[index] &&
                  state[index].second_description !== "" && (
                    <div id="sektor" className={styles.sektor}>
                      <div
                        className={styles.number}
                        style={{
                          backgroundColor: COLORS[1],
                        }}
                      >
                        2
                      </div>
                      <p className={styles.text}>
                        {state.length > 0 && (
                          <p>{state[index].second_description}</p>
                        )}
                      </p>
                    </div>
                  )}
                {state.length > 0 &&
                  state[index] &&
                  state[index].third_description !== "" && (
                    <div className={styles.sektor}>
                      <div
                        className={styles.number}
                        style={{
                          backgroundColor: COLORS[2],
                        }}
                      >
                        3
                      </div>
                      <p className={styles.text}>
                        {state.length > 0 && (
                          <p>{state[index].third_description}</p>
                        )}
                      </p>
                    </div>
                  )}
                {state.length > 0 &&
                  state[index] &&
                  state[index].fourth_description !== "" && (
                    <div className={styles.sektor}>
                      <div
                        className={styles.number}
                        style={{
                          backgroundColor: COLORS[3],
                        }}
                      >
                        4
                      </div>
                      <p className={styles.text}>
                        {state.length > 0 && (
                          <p>{state[index].fourth_description}</p>
                        )}
                      </p>
                    </div>
                  )}
              </div>

              <div className={styles.text__container}></div>
              {state.length > 0 &&
                state[index] &&
                state[index].statement_file && (
                  <button onClick={handleClickDonwload} className={styles.btn}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.8438 2.89675C15.2113 2.7895 14.3477 2.78125 12.7912 2.78125C10.1554 2.78125 8.28125 2.784 6.86225 2.97375C5.47075 3.15938 4.67187 3.51 4.09025 4.09025C3.50862 4.67187 3.15938 5.46937 2.97375 6.85262C2.784 8.26612 2.78125 10.1279 2.78125 12.7514V18.2514C2.78125 20.8721 2.784 22.7339 2.97375 24.1474C3.15938 25.5306 3.50862 26.3281 4.09025 26.9111C4.67187 27.4914 5.46937 27.8406 6.85262 28.0263C8.26612 28.2174 10.1279 28.2188 12.75 28.2188H18.25C20.8721 28.2188 22.7353 28.216 24.1488 28.0263C25.5306 27.8406 26.3281 27.4914 26.9097 26.9097C27.4914 26.3281 27.8406 25.5306 28.0263 24.1474C28.216 22.7352 28.2188 20.8721 28.2188 18.25V17.6491C28.2188 15.5371 28.205 14.5361 27.9795 13.7812H23.6757C22.1179 13.7812 20.846 13.7813 19.8395 13.6465C18.7904 13.5049 17.8801 13.1996 17.1528 12.4722C16.4254 11.7449 16.1201 10.836 15.9785 9.78413C15.8437 8.78037 15.8438 7.50712 15.8438 5.94788V2.89675ZM17.9062 3.96375V5.875C17.9062 7.525 17.909 8.658 18.0231 9.50912C18.1331 10.3314 18.3311 10.7343 18.6116 11.0134C18.8907 11.2939 19.2936 11.4919 20.1159 11.6019C20.967 11.716 22.1 11.7188 23.75 11.7188H26.5275C25.9998 11.2163 25.4635 10.7231 24.9188 10.2393L19.4751 5.34013C18.9616 4.87071 18.4385 4.41182 17.9062 3.96375ZM12.9906 0.71875C14.895 0.71875 16.1256 0.71875 17.2572 1.15188C18.3889 1.58638 19.2991 2.40588 20.7085 3.675L20.8556 3.807L26.2979 8.70613L26.4698 8.86012C28.0978 10.3245 29.151 11.2719 29.7161 12.5424C30.2826 13.8129 30.2826 15.2291 30.2812 17.4181V18.327C30.2812 20.8542 30.2812 22.8563 30.0709 24.4224C29.8536 26.0339 29.3971 27.3387 28.3686 28.3686C27.3387 29.3971 26.0339 29.8536 24.4224 30.0709C22.8549 30.2812 20.8542 30.2812 18.327 30.2812H12.673C10.1458 30.2812 8.14375 30.2812 6.57763 30.0709C4.96613 29.8536 3.66125 29.3971 2.63138 28.3686C1.60287 27.3387 1.14638 26.0339 0.929125 24.4224C0.71875 22.8549 0.71875 20.8542 0.71875 18.327V12.6744C0.71875 10.1471 0.71875 8.14513 0.929125 6.579C1.14638 4.9675 1.60287 3.66263 2.63138 2.63275C3.66263 1.60287 4.97025 1.14775 6.58862 0.9305C8.16162 0.720125 10.1733 0.720125 12.7142 0.720125H12.7912L12.9906 0.71875Z"
                        fill="#5380A1"
                      />
                    </svg>
                    {state.length > 0 &&
                      state[index] &&
                      state[index].statement_file_name && (
                        <p>{state[index].statement_file_name}</p>
                      )}
                  </button>
                )}
            </div>
          </div>
        </div>

        <div className={styles.we}>
          <div className={styles.box}>
            <h3 className={styles.title}>{g("title")}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="222"
              height="14"
              viewBox="0 0 222 14"
              fill="none"
            >
              <path
                d="M1.5 13L6.47727 4.5C8.70499 0.695595 14.2041 0.695595 16.4318 4.5V4.5C18.6595 8.3044 24.1587 8.3044 26.3864 4.5V4.5C28.6141 0.695595 34.1132 0.695595 36.3409 4.5V4.5C38.5686 8.3044 44.0677 8.3044 46.2955 4.5V4.5C48.5232 0.695595 54.0223 0.695595 56.25 4.5V4.5C58.4777 8.3044 63.9768 8.3044 66.2045 4.5V4.5C68.4323 0.695595 73.9314 0.695595 76.1591 4.5V4.5C78.3868 8.3044 83.8859 8.3044 86.1136 4.5V4.5C88.3414 0.695595 93.8405 0.695595 96.0682 4.5V4.5C98.2959 8.3044 103.795 8.3044 106.023 4.5V4.5C108.25 0.695595 113.75 0.695595 115.977 4.5V4.5C118.205 8.3044 123.704 8.3044 125.932 4.5V4.5C128.16 0.695595 133.659 0.695595 135.886 4.5V4.5C138.114 8.3044 143.613 8.3044 145.841 4.5V4.5C148.069 0.695595 153.568 0.695595 155.795 4.5V4.5C158.023 8.3044 163.522 8.3044 165.75 4.5V4.5C167.978 0.695595 173.477 0.695595 175.705 4.5V4.5C177.932 8.3044 183.431 8.3044 185.659 4.5V4.5C187.887 0.695595 193.386 0.695595 195.614 4.5V4.5C197.841 8.3044 203.34 8.3044 205.568 4.5V4.5C207.796 0.695595 213.295 0.695595 215.523 4.5L220.5 13"
                stroke="#649612"
                stroke-width="3"
              />
            </svg>
          </div>

          <p className={styles.descr}>{g("sub")}</p>
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
            {article.map((entry: any, index: any) => {
              return (
                <SwiperSlide className={styles.slide}>
                  <div className={styles.inSlide}>
                    <div
                      className={styles.photo}
                      style={{
                        backgroundImage: `url(https://timoshas-smile.org:8443/media_storage/${entry.article_image})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div className={styles.info}>
                      <p className={styles.year}>{entry.article_title}</p>
                      <p className={styles.text}>{entry.article_content}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            {/*                   {active && (
                  <SwiperSlide/>
                )} */}
            <BtnsHistory />
          </Swiper>
        </div>
      </div>
    </>
  );
}
