"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import useLocale from "next-intl";

import styles from "./styles/articles.module.scss";

import Popup from "@/app/[locale]/components/popup/popup";

import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation';

interface News {
  title: string;
}

export default function Articles({ locale }: any) {
  const t = useTranslations("news");

  let [state, setState] = useState<any[]>([]);
  let [active, setActive] = useState<boolean>(true);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  let [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [news, setNews] = useState<any[]>([]);
  const [visibleNews, setVisibleNews] = useState<any[]>([]);
  const [newsPerPage, setNewsPerPage] = useState<number>(6);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  let [indexPage, setIndexPage] = useState(0);

  const router = useRouter();
  let localeValue = locale;
  const searchParams = useSearchParams();
  const myString = searchParams.get('new');

  const filters = [
    "evacuation",
    "fond_achievments",
    "clinic",
    "your_help",
    "life_of_fond",
    "interview",
    "important",
  ];

  function categoryGet(category: any) {
    let cat = "";
    if (category == "evacuation") {
      cat = t("btn2");
    }
    if (category == "fond_achievments") {
      cat = t("btn3");
    }
    if (category == "clinic") {
      cat = t("btn4");
    }
    if (category == "your_help") {
      cat = t("btn5");
    }
    if (category == "life_of_fond") {
      cat = t("btn6");
    }
    if (category == "life_of_fond") {
      cat = t("btn6");
    }
    if (category == "interview") {
      cat = t("btn7");
    }
    if (category == "important") {
      cat = t("btn8");
    }
    return cat;
  }

  function componentDidMount() {
    if (localeValue === "ua") {
      localeValue = "uk";
    }
    try {
      let data;
      axios
        .get("https://timoshas-smile.org:8443/news/" + localeValue + "/")
        .then((res) => {
          data = res.data.reverse();
          setState(data);
          setFilteredItems(state);
          setVisibleNews(
            filterNewsByCategory(data, selectedCategory).slice(0, newsPerPage)
          );
        })
        .catch((err) => {});
    } catch (error) {
      console.log("error", error);
    }
  }

  function filterItems() {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory: string) => {
        let temp = state.filter((stat) => stat.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
      setVisibleNews(tempItems.flat().slice(0, newsPerPage));
    } else {
      const filterFromURL = searchParams.get('new');
      if (!filterFromURL){
        setActive((active = true));
      } 
      setFilteredItems(state);
      setVisibleNews(
        filterNewsByCategory(state, selectedCategory).slice(0, newsPerPage)
      );
    }
  }
  

  useEffect(() => {
    componentDidMount();
    const filterFromURL = searchParams.get('new');
    if (filterFromURL) {
      setSelectedFilters([filterFromURL]);
      handleCategoryClick(filterFromURL);
      setActive((active = false));
    }
  }, []);

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  useEffect(() => {
    setVisibleNews(
      filterNewsByCategory(state, selectedCategory).slice(0, newsPerPage)
    );
    setCurrentPage(1);
  }, [state, selectedCategory, newsPerPage]);

  const filterNewsByCategory = (newsList: any[], category: string | null) => {
    if (!category) return newsList;
    return newsList.filter((item) => item.category === category);
  };

  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const loadMoreNews = () => {
    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * newsPerPage;
    const endIndex = Math.min(
      startIndex + newsPerPage,
      filterNewsByCategory(state, selectedCategory).length
    );
    setVisibleNews([
      ...visibleNews,
      ...filterNewsByCategory(state, selectedCategory).slice(
        startIndex,
        endIndex
      ),
    ]);
    setCurrentPage(nextPage);
  };

  const pageCount = Math.ceil(
    filterNewsByCategory(state, selectedCategory).length / newsPerPage
  );

  const handlePageClick = (page: number) => {
    if (page <= 0) {
      page = 1;
    }
    setCurrentPage(page);
    const startIndex = (page - 1) * newsPerPage;
    const endIndex = Math.min(
      startIndex + newsPerPage,
      filterNewsByCategory(state, selectedCategory).length
    );
    console.log("total " + totalPages);
    console.log("index " + pageCount);

    setVisibleNews(
      filterNewsByCategory(state, selectedCategory).slice(startIndex, endIndex)
    );
  };

  useEffect(() => {
    setIndexPage((indexPage = currentPage));
  }, [handlePageClick]);

  const totalPages = Math.ceil(
    filterNewsByCategory(state, selectedCategory).length / newsPerPage
  );

  ////////////////////////////////////////////////////////////////////

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  /////////////////////////////////////////////////////////////////////

  return (
    <>
      <div className={styles.articles}>
        <p className={styles.pages}>
          <Link href="/" className={styles.main}>
            {t("main")}{" "}
          </Link>
          /
          <Link href="/news" className={styles.historyLink}>
            {" "}
            {t("news")}
          </Link>
        </p>
        <div className={styles.menu}>
          <button
            onClick={() => {
              handleCategoryClick(null);
              setSelectedFilters([]);
              setActive((active = true));
              componentDidMount();
            }}
            className={active ? styles.menu__btn__active : styles.menu__btn}
          >
            {t("btn1")}
          </button>
          {filters.map((category, idx) => (
            <button
              onClick={() => {
                handleCategoryClick(category);
                setActive((active = false));
              }}
              className={`button ${
                selectedCategory === category
                  ? styles.menu__btn__active
                  : styles.menu__btn
              }`}
              key={`filters-${idx}`}
            >
              {categoryGet(category)}
            </button>
          ))}
        </div>

        <div className={styles.card__container}>
          {visibleNews.map((item: any, idx: any) => (
            <div key={`items-${idx}`} className={styles.card}>
              <div
                className={styles.image}
                style={{
                  backgroundImage: `url(https://timoshas-smile.org/img/${item.main_image.replace('media_storage/media_storage/', '')})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <Link href={"/news/" + item.slug} className={styles.title}>
                {item.title}
              </Link>
              <p className={styles.descr}>{item.short_description}</p>
              <Link href={"/news/" + item.slug} className={styles.btn}>
                {t("read")}
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.bottom__menu}>
          {filterNewsByCategory(state, selectedCategory).length >
            visibleNews.length &&
            indexPage < totalPages && (
              <button className={styles.bottom__btn} onClick={loadMoreNews}>
                {t("load")}
              </button>
            )}
          {/* {pageCount > 1 && (
            <div className={styles.pages}>
                <svg
                  onClick={() => {handlePageClick(indexPage - 1)
                    scrollToTop();
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M15.5 18L9.5 12L15.5 6"
                    stroke="#374151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              {Array.from({ length: pageCount }, (_, index) => (
                <button key={index + 1} 
                className={styles.pages__link}
                onClick={() => {handlePageClick(index + 1);
                  scrollToTop();
                }
              }>{index + 1}</button>
              ))}
                <svg
                  onClick={() => {handlePageClick(indexPage+1)
                  scrollToTop();
                }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M9.5 18L15.5 12L9.5 6"
                    stroke="#374151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
            </div>
          )} */}
          {pageCount > 1 && (
            <div className={styles.pages}>
              <svg
                onClick={() => {
                  handlePageClick(indexPage - 1);
                  scrollToTop();
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M15.5 18L9.5 12L15.5 6"
                  stroke="#374151"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {Array.from({ length: pageCount }, (_, index) => (
                <button
                  key={index + 1}
                  className={
                    indexPage === index + 1
                      ? styles.pages__link__on
                      : styles.pages__link
                  }
                  onClick={() => {
                    handlePageClick(index + 1);
                    scrollToTop();
                  }}
                >
                  {index + 1}
                </button>
              ))}
              <svg
                onClick={() => {
                  if (indexPage < totalPages) {
                    handlePageClick(indexPage + 1);
                  } else {
                    handlePageClick(indexPage);
                  }
                  scrollToTop();
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M9.5 18L15.5 12L9.5 6"
                  stroke="#374151"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
