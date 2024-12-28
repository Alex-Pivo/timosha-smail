"use client";
import { useState } from "react";
import styles from "./styles/cryptoUSA.module.scss";
import { useTranslations } from "next-intl";
import axios from "axios";
import { ModalText } from "@/app/[locale]/components/modal/Modal";

const PATH1 = "/QR/1.1.png";
const PATH2 = "/QR/1.2.png";
const PATH3 = "/QR/1.3.png";
const PATH4 = "/QR/1.4.png";

export default function CryptoUsa() {
  let [active, setActive] = useState(false);
  let [activeTwo, setActiveTwo] = useState(false);
  let [activeThree, setActiveThree] = useState(false);
  let [activeFour, setActiveFour] = useState(false);
  let [activeFive, setActiveFive] = useState(false);
  let [activeSix, setActiveSix] = useState(false);
  let [activeSeven, setActiveSeven] = useState(false);
  let [activeEight, setActiveEight] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState<string>("");
  const [last_name, setLastname] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const t = useTranslations("Donate");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name: name,
      last_name: last_name,
      phone: phone,
      email: email,
    };

    try {
      
      const response = await axios.post(
        `http://95.169.204.16:8000/donate/internation_payment/`,
        data
      );
      console.log(data);

      if (response.status === 201) {
        setEmail("");
        setShowModal(true);
        console.log("Yes!!!");
      } else {
        alert("Failed to subscribe. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting subscription:", error);
      alert("Failed to subscribe. Please try again later. 123");
    }
  };
  const ModalWrapper = ({
    onClose,
    children,
  }: {
    onClose: () => void;
    children: React.ReactNode;
  }) => {
    const handleClickOutside = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    };

    return (
      <div className={styles.modalWrapper}>
        <div className={styles.modalBackdrop} onClick={handleClickOutside}>
          {children}
        </div>
      </div>
    );
  };

  return (
    <>
      {showModal && (
        <ModalWrapper onClose={() => setShowModal(false)}>
          <ModalText show={showModal} onClose={() => setShowModal(false)} />
        </ModalWrapper>
      )}
      <div className={styles.crypto}>
        <div className={styles.container}>
          <h2 className={styles.title}>{t("title4")}</h2>

          <div className={styles.box}>
            <svg
              className={styles.logo}
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="43"
              viewBox="0 0 43 43"
              fill="none"
            >
              <g clip-path="url(#clip0_1_10060)">
                <path
                  d="M25.3532 17.2585C25.3994 20.0063 21.0401 19.772 19.6993 19.7529L19.6285 14.9192C21.0164 14.948 25.2944 14.3804 25.3532 17.2585ZM19.7618 22.2293L19.8567 27.5685C21.4995 27.5513 26.6621 27.7929 26.6115 24.7791C26.569 21.6296 21.399 22.1913 19.7618 22.2293ZM42.996 21.1235C43.1956 33.0014 33.7523 42.7885 21.8736 42.9885C9.99501 43.1885 0.213861 33.7444 0.00802006 21.8682C-0.0411562 19.0457 0.466222 16.2411 1.50117 13.6146C2.53613 10.9881 4.07838 8.59118 6.03985 6.56075C8.00132 4.53032 10.3436 2.90615 12.9328 1.78099C15.5221 0.655833 18.3077 0.0517385 21.1304 0.00320786C32.9883 -0.191257 42.7757 9.25115 42.996 21.1235ZM23.8941 12.0622L23.8271 8.07334L21.4032 8.16632L21.4521 12.0042C20.8108 12.0202 20.1695 12.0362 19.513 12.0786L19.4418 8.15762L17.0332 8.22426L17.0947 12.1923C16.5628 12.2013 16.0365 12.231 15.5461 12.2288L12.1983 12.28L12.2263 14.8769C12.2263 14.8769 14.0352 14.8152 13.9993 14.8471C14.9951 14.8251 15.3171 15.3621 15.4147 15.8924L15.6035 26.816C15.5775 27.1346 15.3454 27.5975 14.7152 27.6551C14.7416 27.6703 12.9423 27.6849 12.9423 27.6849L12.5163 30.5816L15.6661 30.539C16.2658 30.5341 16.8448 30.5348 17.4182 30.5147L17.4756 34.5506L19.9162 34.5199L19.8436 30.5103C20.5112 30.5095 21.1525 30.4935 21.7786 30.5038L21.8401 34.4719L24.2806 34.4412L24.2232 30.4053C28.2605 30.1026 31.132 29.0215 31.3962 25.1888C31.6834 22.1067 30.1997 20.7235 27.8389 20.2208C29.2286 19.4255 30.0998 18.1904 29.866 16.0716C29.5412 13.198 27.0275 12.2911 23.8941 12.0622Z"
                  fill="#1D1D1D"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_10060">
                  <rect width="43" height="43" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className={styles.right}>
              <div className={styles.info}>
                <p className={styles.name}>{t("bit")}</p>
                <p className={styles.code}>14n8bKaHnjsxRQ6fjRw5RwLZYTp7HzUMx</p>
                <div
                  className={styles.a}
                  onClick={() => {
                    if (activeTwo == false) {
                      setActiveTwo((activeTwo = true));
                    } else setActiveTwo((activeTwo = false));
                  }}
                >
                  <p className={styles.link}>{t("qr")}</p>
                  <svg
                    className={activeTwo ? styles.ar__active : styles.ar}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 8L12 16L20 8"
                      stroke="#6B7280"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={activeFive ? styles.massage__active : styles.massage}
              >
                Copy to clipboard
              </div>
              <svg
                className={styles.copy}
                onMouseOver={() => {
                  setActiveFive((activeFive = true));
                }}
                onMouseOut={() => {
                  setActiveFive((activeFive = false));
                }}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigator.clipboard.writeText(
                    "14n8bKaHnjsxRQ6fjRw5RwLZYTp7HzUMx"
                  );
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 1.25H13.056C14.894 1.25 16.35 1.25 17.489 1.403C18.661 1.561 19.61 1.893 20.359 2.641C21.107 3.39 21.439 4.339 21.597 5.511C21.75 6.651 21.75 8.106 21.75 9.944V16C21.75 16.8934 21.4311 17.7575 20.8507 18.4367C20.2703 19.1159 19.4665 19.5657 18.584 19.705C18.447 20.469 18.182 21.121 17.652 21.652C17.05 22.254 16.292 22.512 15.392 22.634C14.525 22.75 13.422 22.75 12.055 22.75H8.945C7.578 22.75 6.475 22.75 5.608 22.634C4.708 22.512 3.95 22.254 3.348 21.652C2.746 21.05 2.488 20.292 2.366 19.392C2.25 18.525 2.25 17.422 2.25 16.055V10.945C2.25 9.578 2.25 8.475 2.366 7.608C2.488 6.708 2.746 5.95 3.348 5.348C3.879 4.818 4.531 4.553 5.295 4.416C5.43434 3.53351 5.88408 2.72974 6.5633 2.14934C7.24251 1.56894 8.10658 1.25002 9 1.25ZM6.87 4.271C7.02206 3.827 7.30915 3.44166 7.69109 3.16893C8.07302 2.89619 8.53068 2.74971 9 2.75H13C14.907 2.75 16.261 2.752 17.29 2.89C18.295 3.025 18.875 3.279 19.298 3.702C19.721 4.125 19.975 4.705 20.11 5.711C20.248 6.739 20.25 8.093 20.25 10V16C20.2503 16.4693 20.1038 16.927 19.8311 17.3089C19.5583 17.6908 19.173 17.9779 18.729 18.13C18.75 17.52 18.75 16.83 18.75 16.055V10.945C18.75 9.578 18.75 8.475 18.633 7.608C18.513 6.708 18.253 5.95 17.652 5.348C17.05 4.746 16.292 4.488 15.392 4.367C14.525 4.25 13.422 4.25 12.055 4.25H8.945C8.17 4.25 7.48 4.25 6.87 4.271ZM16.592 6.41C16.315 6.133 15.927 5.953 15.192 5.854C14.438 5.753 13.436 5.751 12.001 5.751H9.001C7.566 5.751 6.565 5.753 5.809 5.854C5.075 5.953 4.687 6.134 4.41 6.41C4.133 6.687 3.953 7.075 3.854 7.81C3.753 8.564 3.751 9.566 3.751 11.001V16.001C3.751 17.436 3.753 18.437 3.854 19.193C3.953 19.927 4.134 20.315 4.41 20.592C4.687 20.869 5.075 21.049 5.81 21.148C6.565 21.249 7.566 21.251 9.001 21.251H12.001C13.436 21.251 14.438 21.249 15.193 21.148C15.927 21.049 16.315 20.868 16.592 20.592C16.869 20.315 17.049 19.927 17.148 19.192C17.249 18.437 17.251 17.436 17.251 16.001V11.001C17.251 9.566 17.249 8.564 17.148 7.809C17.049 7.075 16.868 6.687 16.592 6.41Z"
                  fill="#5380A1"
                />
              </svg>
            </div>
            <div
              className={
                activeTwo ? styles.QR__container__active : styles.QR__container
              }
            >
              <div
                className={styles.boxQR}
                style={{
                  background: `url(${PATH1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          </div>
          <div className={styles.box}>
            <svg
              className={styles.logo}
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="43"
              viewBox="0 0 43 43"
              fill="none"
            >
              <g clip-path="url(#clip0_1_10075)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.5 0C9.626 0 0 9.626 0 21.5C0 33.374 9.626 43 21.5 43C33.374 43 43 33.374 43 21.5C43 9.626 33.374 0 21.5 0ZM22.72 6.628C22.5812 6.43395 22.3981 6.27581 22.1859 6.16671C21.9737 6.05761 21.7386 6.0007 21.5 6.0007C21.2614 6.0007 21.0263 6.05761 20.8141 6.16671C20.6019 6.27581 20.4188 6.43395 20.28 6.628L10.28 20.628C10.0982 20.8824 10.0005 21.1873 10.0005 21.5C10.0005 21.8127 10.0982 22.1176 10.28 22.372L20.28 36.372C20.4188 36.5661 20.6019 36.7242 20.8141 36.8333C21.0263 36.9424 21.2614 36.9993 21.5 36.9993C21.7386 36.9993 21.9737 36.9424 22.1859 36.8333C22.3981 36.7242 22.5812 36.5661 22.72 36.372L32.72 22.372C32.9018 22.1176 32.9995 21.8127 32.9995 21.5C32.9995 21.1873 32.9018 20.8824 32.72 20.628L22.72 6.628ZM21.5 32.92L14.926 23.714L21.206 24.97C21.4 25.01 21.6 25.01 21.794 24.97L28.074 23.714L21.5 32.92ZM23 21.67L28.932 20.484L23 12.18V21.67ZM20 21.67V12.18L14.068 20.484L20 21.67Z"
                  fill="#1D1D1D"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_10075">
                  <rect width="43" height="43" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className={styles.right}>
              <div className={styles.info}>
                <p className={styles.name}>{t("ether")}</p>
                <p className={styles.code}>
                  0xa02226982492b0b7dccf20e563cab4644aed26e6
                </p>
                <div
                  onClick={() => {
                    if (active == false) {
                      setActive((active = true));
                    } else setActive((active = false));
                  }}
                  className={styles.a}
                >
                  <p className={styles.link}>{t("qr")}</p>
                  <svg
                    className={active ? styles.ar__active : styles.ar}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 8L12 16L20 8"
                      stroke="#6B7280"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={activeSix ? styles.massage__active : styles.massage}
              >
                Copy to clipboard
              </div>
              <svg
                className={styles.copy}
                onMouseOver={() => {
                  setActiveSix((activeSix = true));
                }}
                onMouseOut={() => {
                  setActiveSix((activeSix = false));
                }}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigator.clipboard.writeText(
                    "0xa02226982492b0b7dccf20e563cab4644aed26e6"
                  );
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 1.25H13.056C14.894 1.25 16.35 1.25 17.489 1.403C18.661 1.561 19.61 1.893 20.359 2.641C21.107 3.39 21.439 4.339 21.597 5.511C21.75 6.651 21.75 8.106 21.75 9.944V16C21.75 16.8934 21.4311 17.7575 20.8507 18.4367C20.2703 19.1159 19.4665 19.5657 18.584 19.705C18.447 20.469 18.182 21.121 17.652 21.652C17.05 22.254 16.292 22.512 15.392 22.634C14.525 22.75 13.422 22.75 12.055 22.75H8.945C7.578 22.75 6.475 22.75 5.608 22.634C4.708 22.512 3.95 22.254 3.348 21.652C2.746 21.05 2.488 20.292 2.366 19.392C2.25 18.525 2.25 17.422 2.25 16.055V10.945C2.25 9.578 2.25 8.475 2.366 7.608C2.488 6.708 2.746 5.95 3.348 5.348C3.879 4.818 4.531 4.553 5.295 4.416C5.43434 3.53351 5.88408 2.72974 6.5633 2.14934C7.24251 1.56894 8.10658 1.25002 9 1.25ZM6.87 4.271C7.02206 3.827 7.30915 3.44166 7.69109 3.16893C8.07302 2.89619 8.53068 2.74971 9 2.75H13C14.907 2.75 16.261 2.752 17.29 2.89C18.295 3.025 18.875 3.279 19.298 3.702C19.721 4.125 19.975 4.705 20.11 5.711C20.248 6.739 20.25 8.093 20.25 10V16C20.2503 16.4693 20.1038 16.927 19.8311 17.3089C19.5583 17.6908 19.173 17.9779 18.729 18.13C18.75 17.52 18.75 16.83 18.75 16.055V10.945C18.75 9.578 18.75 8.475 18.633 7.608C18.513 6.708 18.253 5.95 17.652 5.348C17.05 4.746 16.292 4.488 15.392 4.367C14.525 4.25 13.422 4.25 12.055 4.25H8.945C8.17 4.25 7.48 4.25 6.87 4.271ZM16.592 6.41C16.315 6.133 15.927 5.953 15.192 5.854C14.438 5.753 13.436 5.751 12.001 5.751H9.001C7.566 5.751 6.565 5.753 5.809 5.854C5.075 5.953 4.687 6.134 4.41 6.41C4.133 6.687 3.953 7.075 3.854 7.81C3.753 8.564 3.751 9.566 3.751 11.001V16.001C3.751 17.436 3.753 18.437 3.854 19.193C3.953 19.927 4.134 20.315 4.41 20.592C4.687 20.869 5.075 21.049 5.81 21.148C6.565 21.249 7.566 21.251 9.001 21.251H12.001C13.436 21.251 14.438 21.249 15.193 21.148C15.927 21.049 16.315 20.868 16.592 20.592C16.869 20.315 17.049 19.927 17.148 19.192C17.249 18.437 17.251 17.436 17.251 16.001V11.001C17.251 9.566 17.249 8.564 17.148 7.809C17.049 7.075 16.868 6.687 16.592 6.41Z"
                  fill="#5380A1"
                />
              </svg>
            </div>

            <div
              className={
                active ? styles.QR__container__active : styles.QR__container
              }
            >
              <div
                className={styles.boxQR}
                style={{
                  background: `url(${PATH2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          </div>
          <div className={styles.box}>
            <svg
              className={styles.logo}
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="43"
              viewBox="0 0 43 43"
              fill="none"
            >
              <path
                d="M21 0C9.40202 0 0 9.40202 0 21V22C0 33.598 9.40202 43 21 43H22C33.598 43 43 33.598 43 22V21C43 9.40202 33.598 0 22 0H21ZM24.3208 33.187C24.3208 33.3558 24.1839 33.4927 24.0151 33.4927C23.7414 33.4927 23.6056 33.1606 23.801 32.9688C23.9943 32.779 24.3208 32.916 24.3208 33.187ZM24.3208 31.2241C24.3208 31.4375 24.2349 31.6418 24.0825 31.7911L22.5759 33.2666C22.4278 33.4115 22.2289 33.4927 22.0217 33.4927C21.3128 33.4927 20.961 32.6326 21.4668 32.1358L22.9712 30.658C23.4731 30.1651 24.3208 30.5206 24.3208 31.2241ZM24.3205 28.1153C24.3207 28.3217 24.2377 28.5195 24.0904 28.6641L19.289 33.3734C19.2068 33.454 19.0963 33.4991 18.9812 33.4991C18.7384 33.4991 18.5416 33.3023 18.5416 33.0596V32.4162C18.5416 32.1256 18.6584 31.8472 18.8657 31.6436L23.015 27.5684C23.5003 27.0918 24.3198 27.4351 24.3205 28.1153ZM24.3208 25.0676C24.3208 25.2652 24.2414 25.4544 24.1005 25.5929L19.7971 29.8211C19.331 30.279 18.5438 29.9488 18.5438 29.2954C18.5438 29.0977 18.6232 28.9083 18.7643 28.7697L23.0686 24.5423C23.5343 24.0849 24.3208 24.4149 24.3208 25.0676ZM24.3208 22.0692C24.3208 22.2855 24.2339 22.4927 24.0796 22.6442L19.9134 26.736C19.404 27.2363 18.5438 26.8754 18.5438 26.1614C18.5438 25.9454 18.6306 25.7384 18.7847 25.5869L22.9501 21.4944C23.4598 20.9936 24.3208 21.3547 24.3208 22.0692ZM30.7708 12.0271C30.7708 13.3665 29.685 14.4523 28.3456 14.4523H27.5458C25.7647 14.4523 24.3208 15.8962 24.3208 17.6773V18.0397C24.3208 18.8146 24.0094 19.557 23.4567 20.1001C21.6298 21.8951 18.5438 20.6008 18.5438 18.0397V17.5382C18.5438 15.8268 17.1564 14.4394 15.4449 14.4394H14.6458C13.31 14.4394 12.227 13.3565 12.227 12.0206C12.227 10.6848 13.31 9.6019 14.6458 9.6019H28.3456C29.685 9.6019 30.7708 10.6877 30.7708 12.0271Z"
                fill="#1D1D1D"
              />
            </svg>

            <div className={styles.right}>
              <div className={styles.info}>
                <p className={styles.name}>{t("tron")}</p>
                <p className={styles.code}>
                  TTFs4EGig2Ghq48v3Z9tPVDfPNMES1BAP7
                </p>
                <div
                  className={styles.a}
                  onClick={() => {
                    if (activeThree == false) {
                      setActiveThree((activeThree = true));
                    } else setActiveThree((activeThree = false));
                  }}
                >
                  <p className={styles.link}>{t("qr")}</p>
                  <svg
                    className={activeThree ? styles.ar__active : styles.ar}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 8L12 16L20 8"
                      stroke="#6B7280"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={
                  activeSeven ? styles.massage__active : styles.massage
                }
              >
                Copy to clipboard
              </div>
              <svg
                className={styles.copy}
                onMouseOver={() => {
                  setActiveSeven((activeSeven = true));
                }}
                onMouseOut={() => {
                  setActiveSeven((activeSeven = false));
                }}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigator.clipboard.writeText(
                    "TTFs4EGig2Ghq48v3Z9tPVDfPNMES1BAP7"
                  );
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 1.25H13.056C14.894 1.25 16.35 1.25 17.489 1.403C18.661 1.561 19.61 1.893 20.359 2.641C21.107 3.39 21.439 4.339 21.597 5.511C21.75 6.651 21.75 8.106 21.75 9.944V16C21.75 16.8934 21.4311 17.7575 20.8507 18.4367C20.2703 19.1159 19.4665 19.5657 18.584 19.705C18.447 20.469 18.182 21.121 17.652 21.652C17.05 22.254 16.292 22.512 15.392 22.634C14.525 22.75 13.422 22.75 12.055 22.75H8.945C7.578 22.75 6.475 22.75 5.608 22.634C4.708 22.512 3.95 22.254 3.348 21.652C2.746 21.05 2.488 20.292 2.366 19.392C2.25 18.525 2.25 17.422 2.25 16.055V10.945C2.25 9.578 2.25 8.475 2.366 7.608C2.488 6.708 2.746 5.95 3.348 5.348C3.879 4.818 4.531 4.553 5.295 4.416C5.43434 3.53351 5.88408 2.72974 6.5633 2.14934C7.24251 1.56894 8.10658 1.25002 9 1.25ZM6.87 4.271C7.02206 3.827 7.30915 3.44166 7.69109 3.16893C8.07302 2.89619 8.53068 2.74971 9 2.75H13C14.907 2.75 16.261 2.752 17.29 2.89C18.295 3.025 18.875 3.279 19.298 3.702C19.721 4.125 19.975 4.705 20.11 5.711C20.248 6.739 20.25 8.093 20.25 10V16C20.2503 16.4693 20.1038 16.927 19.8311 17.3089C19.5583 17.6908 19.173 17.9779 18.729 18.13C18.75 17.52 18.75 16.83 18.75 16.055V10.945C18.75 9.578 18.75 8.475 18.633 7.608C18.513 6.708 18.253 5.95 17.652 5.348C17.05 4.746 16.292 4.488 15.392 4.367C14.525 4.25 13.422 4.25 12.055 4.25H8.945C8.17 4.25 7.48 4.25 6.87 4.271ZM16.592 6.41C16.315 6.133 15.927 5.953 15.192 5.854C14.438 5.753 13.436 5.751 12.001 5.751H9.001C7.566 5.751 6.565 5.753 5.809 5.854C5.075 5.953 4.687 6.134 4.41 6.41C4.133 6.687 3.953 7.075 3.854 7.81C3.753 8.564 3.751 9.566 3.751 11.001V16.001C3.751 17.436 3.753 18.437 3.854 19.193C3.953 19.927 4.134 20.315 4.41 20.592C4.687 20.869 5.075 21.049 5.81 21.148C6.565 21.249 7.566 21.251 9.001 21.251H12.001C13.436 21.251 14.438 21.249 15.193 21.148C15.927 21.049 16.315 20.868 16.592 20.592C16.869 20.315 17.049 19.927 17.148 19.192C17.249 18.437 17.251 17.436 17.251 16.001V11.001C17.251 9.566 17.249 8.564 17.148 7.809C17.049 7.075 16.868 6.687 16.592 6.41Z"
                  fill="#5380A1"
                />
              </svg>
            </div>
            <div
              className={
                activeThree
                  ? styles.QR__container__active
                  : styles.QR__container
              }
            >
              <div
                className={styles.boxQR}
                style={{
                  background: `url(${PATH3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          </div>
          <div className={styles.box}>
            <svg
              className={styles.logo}
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="43"
              viewBox="0 0 43 43"
              fill="none"
            >
              <g clip-path="url(#clip0_1_10102)">
                <circle cx="21.5" cy="21.5" r="21.5" fill="#1D1D1D" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.49534 18.7322H30.1398C30.4106 18.7322 30.6589 18.8442 30.862 19.046L34.2926 22.5423C34.9246 23.1922 34.4732 24.2904 33.5704 24.2904H11.9259C11.6551 24.2904 11.4068 24.1784 11.2037 23.9767L7.7731 20.4803C7.14115 19.8304 7.59255 18.7322 8.49534 18.7322ZM7.7731 14.0928L11.2037 10.5965C11.3843 10.3948 11.6551 10.2827 11.9259 10.2827H33.5478C34.4506 10.2827 34.902 11.3809 34.2701 12.0309L30.862 15.5272C30.6815 15.7289 30.4106 15.841 30.1398 15.841H8.49534C7.59255 15.841 7.14115 14.7428 7.7731 14.0928ZM34.2701 28.9074L30.8394 32.4037C30.6363 32.6054 30.388 32.7175 30.1172 32.7175H8.49534C7.59255 32.7175 7.14115 31.6193 7.7731 30.9693L11.2037 27.473C11.3843 27.2713 11.6551 27.1592 11.9259 27.1592H33.5478C34.4506 27.1592 34.902 28.2574 34.2701 28.9074Z"
                  fill="#F9FAFB"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_10102">
                  <rect width="43" height="43" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className={styles.right}>
              <div className={styles.info}>
                <p className={styles.name}>{t("solana")}</p>
                <p className={styles.code}>
                  748NHu4BgjCYgg1T4xsyGVJ16WNXt9XHMjdM1jsAJL7X
                </p>
                <div
                  className={styles.a}
                  onClick={() => {
                    if (activeFour == false) {
                      setActiveFour((activeFour = true));
                    } else setActiveFour((activeFour = false));
                  }}
                >
                  <p className={styles.link}>{t("qr")}</p>
                  <svg
                    className={activeFour ? styles.ar__active : styles.ar}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 8L12 16L20 8"
                      stroke="#6B7280"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={
                  activeEight ? styles.massage__active : styles.massage
                }
              >
                Copy to clipboard
              </div>
              <svg
                className={styles.copy}
                onMouseOver={() => {
                  setActiveEight((activeEight = true));
                }}
                onMouseOut={() => {
                  setActiveEight((activeEight = false));
                }}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigator.clipboard.writeText(
                    "748NHu4BgjCYgg1T4xsyGVJ16WNXt9XHMjdM1jsAJL7X"
                  );
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 1.25H13.056C14.894 1.25 16.35 1.25 17.489 1.403C18.661 1.561 19.61 1.893 20.359 2.641C21.107 3.39 21.439 4.339 21.597 5.511C21.75 6.651 21.75 8.106 21.75 9.944V16C21.75 16.8934 21.4311 17.7575 20.8507 18.4367C20.2703 19.1159 19.4665 19.5657 18.584 19.705C18.447 20.469 18.182 21.121 17.652 21.652C17.05 22.254 16.292 22.512 15.392 22.634C14.525 22.75 13.422 22.75 12.055 22.75H8.945C7.578 22.75 6.475 22.75 5.608 22.634C4.708 22.512 3.95 22.254 3.348 21.652C2.746 21.05 2.488 20.292 2.366 19.392C2.25 18.525 2.25 17.422 2.25 16.055V10.945C2.25 9.578 2.25 8.475 2.366 7.608C2.488 6.708 2.746 5.95 3.348 5.348C3.879 4.818 4.531 4.553 5.295 4.416C5.43434 3.53351 5.88408 2.72974 6.5633 2.14934C7.24251 1.56894 8.10658 1.25002 9 1.25ZM6.87 4.271C7.02206 3.827 7.30915 3.44166 7.69109 3.16893C8.07302 2.89619 8.53068 2.74971 9 2.75H13C14.907 2.75 16.261 2.752 17.29 2.89C18.295 3.025 18.875 3.279 19.298 3.702C19.721 4.125 19.975 4.705 20.11 5.711C20.248 6.739 20.25 8.093 20.25 10V16C20.2503 16.4693 20.1038 16.927 19.8311 17.3089C19.5583 17.6908 19.173 17.9779 18.729 18.13C18.75 17.52 18.75 16.83 18.75 16.055V10.945C18.75 9.578 18.75 8.475 18.633 7.608C18.513 6.708 18.253 5.95 17.652 5.348C17.05 4.746 16.292 4.488 15.392 4.367C14.525 4.25 13.422 4.25 12.055 4.25H8.945C8.17 4.25 7.48 4.25 6.87 4.271ZM16.592 6.41C16.315 6.133 15.927 5.953 15.192 5.854C14.438 5.753 13.436 5.751 12.001 5.751H9.001C7.566 5.751 6.565 5.753 5.809 5.854C5.075 5.953 4.687 6.134 4.41 6.41C4.133 6.687 3.953 7.075 3.854 7.81C3.753 8.564 3.751 9.566 3.751 11.001V16.001C3.751 17.436 3.753 18.437 3.854 19.193C3.953 19.927 4.134 20.315 4.41 20.592C4.687 20.869 5.075 21.049 5.81 21.148C6.565 21.249 7.566 21.251 9.001 21.251H12.001C13.436 21.251 14.438 21.249 15.193 21.148C15.927 21.049 16.315 20.868 16.592 20.592C16.869 20.315 17.049 19.927 17.148 19.192C17.249 18.437 17.251 17.436 17.251 16.001V11.001C17.251 9.566 17.249 8.564 17.148 7.809C17.049 7.075 16.868 6.687 16.592 6.41Z"
                  fill="#5380A1"
                />
              </svg>
            </div>
            <div
              className={
                activeFour ? styles.QR__container__active : styles.QR__container
              }
            >
              <div
                className={styles.boxQR}
                style={{
                  background: `url(${PATH4})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="country" className={styles.country}>
        <div className={styles.container}>
          <h2 className={styles.title}>{t("title5")}</h2>
          <div className={styles.text}>
            <p>{t("text1")} </p>
            <p>{t("text2")}</p>
            <p>{t("text3")}</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <p className={styles.label}>{t("enter")}</p>
            <div className={styles.inputs__container}>
              <label className={styles.lab} htmlFor="name"></label>
              <input
                required
                className={styles.inp}
                placeholder={t("first")}
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className={styles.lab} htmlFor="lastname"></label>
              <input
                required
                className={styles.inp}
                placeholder={t("last")}
                type="text"
                name="lastname"
                value={last_name}
                onChange={(e) => setLastname(e.target.value)}
              />
              <label className={styles.lab} htmlFor="phone"></label>
              <input
                required
                className={styles.inp}
                placeholder={t("phone")}
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label className={styles.lab} htmlFor="email"></label>
              <input
                className={styles.inp}
                placeholder={t("mail")}
                type="email"
                id="email"
                size={30}
                name="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.btn__container}>
              <button className={styles.btn} type="submit">
                {t("button5")}
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </>
  );
}
