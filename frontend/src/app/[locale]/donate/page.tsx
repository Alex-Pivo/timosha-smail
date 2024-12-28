"use client";
import React from "react";
import styles from "./Requisites.module.scss";
import Header from "../components/header/Header";
import FirstHelp from "../pages/requisites/firstHelp";
import FirstHelpUsa from "../pages/requisites/firstHelpUSA";
import FirstHelpCountry from "../pages/requisites/firstHelpCountry";
import Bank from "../pages/requisites/bank";
import BankQR from "../pages/requisites/bankQR";
import BankQRUSA from "../pages/requisites/bankQRUSA";
import Crypto from "../pages/requisites/crypto";
import CryptoUsa from "../pages/requisites/cryptoUSA";
import { Footer } from "../components/footer/Footer";
import stylesRep from "../pages/reports/styles/main.module.scss";
import PopupDonate from "../components/popup-donate/popupDonate";
import Chek from "../pages/requisites/chek";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import GoFound from "@/app/[locale]/pages/requisites/goFound";

export default function Donate() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [country, setCountry] = useState("");
  const t = useTranslations("Donate");
  const c = useTranslations('Index');
  let locale = useLocale();
  useEffect(() => {
    // Показываем попап при загрузке страницы
    setIsPopupVisible(true);
  }, []);

  useEffect(() => {
    document.title = c('title1') + " | " + t("mTitle");
  }, [t]);

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleCountryChange = (selectedCountry: any) => {
    setCountry(selectedCountry);
    setIsPopupVisible(false); // Закрыть попап после выбора страны, если нужно
  };

  return (
    <>
      <div className={styles.container}>
        <Header locale={locale} />
      </div>
      <PopupDonate
        isVisible={isPopupVisible}
        onClose={handleClosePopup}
        onCountryChange={handleCountryChange}
      />
      {country === "" && (
        <div className={stylesRep.body__container}>
          <FirstHelp></FirstHelp>
          <Bank></Bank>
          <BankQR></BankQR>
          <Crypto></Crypto>
        </div>
      )}
      {country === "Ukraine" && (
        <div className={stylesRep.body__container}>
          <FirstHelp></FirstHelp>
          <Bank></Bank>
          <BankQR></BankQR>
          <Crypto></Crypto>
        </div>
      )}
      {country === "Italy" && (
        <div className={stylesRep.body__container}>
          <FirstHelpUsa></FirstHelpUsa>
          <BankQRUSA></BankQRUSA>
          <Chek></Chek>
          <GoFound></GoFound>
          <CryptoUsa></CryptoUsa>
        </div>
      )}
      {country === "USA" && (
        <div className={stylesRep.body__container}>
          <FirstHelpUsa></FirstHelpUsa>
          <BankQRUSA></BankQRUSA>
          <Chek></Chek>
          <GoFound></GoFound>
          <CryptoUsa></CryptoUsa>
        </div>
      )}
      {country === "Other" && (
        <div className={stylesRep.body__container}>
          <FirstHelpUsa></FirstHelpUsa>
          <BankQRUSA></BankQRUSA>
          <Chek></Chek>
          <GoFound></GoFound>
          <CryptoUsa></CryptoUsa>
        </div>
      )}

      <Footer />
    </>
  );
}
