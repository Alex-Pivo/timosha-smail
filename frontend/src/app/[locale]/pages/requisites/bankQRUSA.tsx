import styles from "./styles/bankQR.module.scss";
import { useTranslations } from "next-intl";

const PATH1 = "/QR/1.png";
const PATH2 = "/QR/2.png";
const PATH3 = "/QR/31.png";
const PATH4 = "/QR/41.png";
const PATH5 = "/QR/1.5.png";

const LOGO2 = "/QR/LOGO2.png";
const LOGO3 = "/QR/LOGO3.png";
const LOGO4 = "/QR/LOGO4.png";
const LOGO5 = "/QR/LOGO5.png";

export default function BankQRUSA() {
  const t = useTranslations("Donate");
  return (
    <>
      <div className={styles.bank}>
        <div className={styles.container}>
          <h2 className={styles.title}>Venmo, Zelle, Cash App, PayPall</h2>

          <div className={styles.box}>
            <div className={styles.card}>
              <div
                className={styles.logo}
                style={{
                  width: "165.5px",
                  height: "56px",
                  background: `url(${LOGO3})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <a href="https://www.venmo.com/u/timoshassmile" className={styles.a}>
                <div
                  className={styles.qr}
                  style={{
                    background: `url(${PATH3})`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </a>
              <a 
              href="https://www.venmo.com/u/timoshassmile"
              style={{
                textDecoration: "none",
              }}
              className={styles.text}>{t("qrText")}</a>
            </div>

            <div className={styles.card}>
              <div
                className={styles.logo}
                style={{
                  width: "175px",
                  height: "56px",
                  background: `url(${LOGO5})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <a href="" className={styles.a}>
                <div
                  className={styles.qr}
                  style={{
                    background: `url(${PATH5})`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </a>
              <a 
              href=""
              style={{
                textDecoration: "none",
              }}
              className={styles.text}>timoshas.smile@gmail.com</a>
            </div>

            <div className={styles.card}>
              <div
                className={styles.logo}
                style={{
                  width: "175px",
                  height: "56px",
                  background: `url(${LOGO4})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <a href="https://cash.app/$TimoshasSmile" className={styles.a}>
                <div
                  className={styles.qr}
                  style={{
                    background: `url(${PATH4})`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </a>
              <a
              href="https://cash.app/$TimoshasSmile"
              style={{
                textDecoration: "none",
              }}
              className={styles.text}>{t("qrText")}</a>
            </div>

            <div className={styles.card}>
              <div
                className={styles.logo}
                style={{
                  width: "188px",
                  height: "49px",
                  background: `url(${LOGO2})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <a
                href="https://www.paypal.me/TimoshasSmileUSA"
                className={styles.a}
              >
                <div
                  className={styles.qr}
                  style={{
                    background: `url(${PATH2})`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </a>
              <a
                href="https://www.paypal.me/TimoshasSmileUSA"
                style={{
                  textDecoration: "none",
                }}
                id="chek"
                className={styles.text}
              >
                {t("qrText")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
