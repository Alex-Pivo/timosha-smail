import styles from "./styles/bankQR.module.scss";
import { useTranslations } from "next-intl";

const PATH1 = "/QR/1.png";
const PATH2 = "/QR/2.png";
const PATH3 = "/QR/31.png";
const PATH4 = "/QR/41.png";

const LOGO2 = "/QR/LOGO2.png";
const LOGO3 = "/QR/LOGO3.png";
const LOGO4 = "/QR/LOGO4.png";

export default function BankQR() {
  const t = useTranslations("Donate");

  return (
    <>
      <div className={styles.bank}>
        <div className={styles.container}>
          <h2 className={styles.title}>Monobank, PayPal, Venmo, Cash App</h2>

          <div className={styles.box}>
            <div className={styles.card}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="147"
                height="56"
                viewBox="0 0 147 56"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.3116 38.4342V27.7478C23.3116 24.7151 21.6508 23.271 18.9792 23.271C16.7409 23.271 14.7191 24.6429 13.8526 25.9426C13.275 24.2819 11.9031 23.271 9.73689 23.271C7.49852 23.271 5.47676 24.7151 4.89911 25.5816V23.632H1V38.4342H4.89911V28.4698C5.47676 27.6756 6.63205 26.7369 7.93175 26.7369C9.52028 26.7369 10.1701 27.7478 10.1701 29.1197V38.5064H14.0692V28.4698C14.6469 27.6756 15.73 26.7369 17.1019 26.7369C18.6904 26.7369 19.3403 27.7478 19.3403 29.1197V38.5064H23.3116V38.4342ZM33.998 38.7953C29.088 38.7953 26.1998 35.2572 26.1998 30.997C26.1998 26.8091 29.1602 23.271 33.998 23.271C38.908 23.271 41.8684 26.8091 41.8684 30.997C41.8684 35.2572 38.908 38.7953 33.998 38.7953ZM33.998 35.3294C36.453 35.3294 37.8249 33.3076 37.8249 30.997C37.8249 28.6864 36.453 26.7369 33.998 26.7369C31.543 26.7369 30.2433 28.7587 30.2433 30.997C30.2433 33.3798 31.6152 35.3294 33.998 35.3294ZM58.6202 38.4342V27.9644C58.6202 25.0762 57.0317 23.271 53.7824 23.271C51.3274 23.271 49.5223 24.4263 48.5836 25.5816V23.632H44.6845V38.4342H48.6558V28.4698C49.3056 27.6034 50.4609 26.7369 52.0495 26.7369C53.7102 26.7369 54.7933 27.459 54.7933 29.4807V38.4342H58.6202ZM69.3788 38.7953C64.4688 38.7953 61.5806 35.2572 61.5806 30.997C61.5806 26.8091 64.541 23.271 69.3788 23.271C74.2888 23.271 77.2493 26.8091 77.2493 30.997C77.2493 35.2572 74.2888 38.7953 69.3788 38.7953ZM69.3788 35.3294C71.8338 35.3294 73.2057 33.3076 73.2057 30.997C73.2057 28.6864 71.8338 26.7369 69.3788 26.7369C66.9238 26.7369 65.6241 28.7587 65.6241 30.997C65.6241 33.3798 66.9238 35.3294 69.3788 35.3294ZM84.0366 33.7408C84.6865 34.6795 86.1306 35.4016 87.3581 35.4016C89.5964 35.4016 91.1128 33.6686 91.1128 31.1414C91.1128 28.542 89.5964 26.8091 87.3581 26.8091C86.1306 26.8091 84.6865 27.5312 84.0366 28.542V33.7408ZM84.0366 38.4342H80.1375V18H84.0366V25.5816C85.1919 24.0653 86.8526 23.3432 88.5856 23.3432C92.3403 23.3432 95.1563 26.3037 95.1563 31.1414C95.1563 36.0514 92.3403 38.8675 88.5856 38.8675C86.7804 38.8675 85.1919 38.0732 84.0366 36.6291V38.4342ZM110.897 38.4342H106.998V36.9179C105.987 38.1454 104.254 38.7953 102.305 38.7953C99.9219 38.7953 97.178 37.2067 97.178 33.8853C97.178 30.4194 99.9941 29.1197 102.305 29.1197C104.254 29.1197 105.987 29.7695 106.998 30.9248V28.9031C106.998 27.3867 105.698 26.4481 103.749 26.4481C102.16 26.4481 100.716 27.0257 99.4164 28.181L97.9723 25.5816C99.7775 23.9931 102.088 23.271 104.471 23.271C107.864 23.271 110.969 24.6429 110.969 28.9031V38.4342H110.897ZM103.821 36.1958C105.048 36.1958 106.276 35.7626 106.926 34.8961V33.091C106.276 32.2245 105.048 31.7913 103.821 31.7913C102.305 31.7913 101.005 32.5856 101.005 34.0297C101.077 35.4016 102.305 36.1958 103.821 36.1958ZM128.66 38.4342V27.9644C128.66 25.0762 127.071 23.271 123.822 23.271C121.367 23.271 119.562 24.4263 118.623 25.5816V23.632H114.724V38.4342H118.623V28.4698C119.273 27.6034 120.428 26.7369 122.017 26.7369C123.678 26.7369 124.761 27.459 124.761 29.4807V38.4342H128.66ZM147 38.4342L140.935 30.3472L146.783 23.632H142.018L136.386 30.2028V18H132.487V38.4342H136.386V34.6073L138.191 32.73L142.09 38.4342H147Z"
                  fill="black"
                />
              </svg>
              <a className={styles.a} href="https://send.monobank.ua/jar/2jSVJ9SeVu">
                <div
                  className={styles.qr}
                  style={{
                    background: `url(${PATH1})`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </a>
              <a
              href="https://send.monobank.ua/jar/2jSVJ9SeVu"
                style={{
                  textDecoration: "none",
                }}
                className={styles.text}
              >
                {t("qrText")}
              </a>
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
              className={styles.a}
              style={{
                textDecoration: "none",
              }}
              href="https://www.paypal.me/TimoshasSmileUSA">
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
              className={styles.text}>{t("qrText")}</a>
            </div>

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
              <a 
              className={styles.a}
              href="https://www.venmo.com/u/timoshassmile">
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
                  background: `url(${LOGO4})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <a 
              className={styles.a}
              href="https://cash.app/$TimoshasSmile">
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
              style={{
                textDecoration: "none",
              }}
              href="https://cash.app/$TimoshasSmile"
              id="crypto" className={styles.text}>
                {t("qrText")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
