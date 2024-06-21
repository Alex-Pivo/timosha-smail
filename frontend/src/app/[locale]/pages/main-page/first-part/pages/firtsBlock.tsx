import styles from "../styles/main.module.scss";
import { useLocale } from "next-intl";
import Slider from "@/app/[locale]/pages/main-page/first-part/pages/slider";
import HelpComponent from "../components/HelpComponent";

export default function Firstblock() {
  let locale = useLocale();
  return (
    <>
      <div className={styles.firstBlock}>
        <Slider locale={locale}></Slider>
        <div className={styles.info}>
          <HelpComponent></HelpComponent>
        </div>
        <div className={styles.cartoons}></div>
      </div>
    </>
  );
}
