"use client";
import styles from "../styles/main.module.scss";
import { useState } from "react";

import Slider from "@/app/[locale]/pages/main-page/first-part/pages/slider";
import HelpComponent from "../components/HelpComponent";

export default function Firstblock() {
  let [btn, setBtn] = useState(false);
  let [btnTwo, setBtnTwo] = useState(false);
  let [btnThree, setBtnThree] = useState(false);
  let [btnFour, setBtnFour] = useState(false);
  let [btnFive, setBtnFive] = useState(false);
  let [btnSix, setBtnSix] = useState(false);

  let [mouse, setMouse] = useState(true);
  let [active, setActive] = useState(true);


  return (
    <>
      <div className={styles.firstBlock}>
        <Slider></Slider>
        <div className={styles.info}>
          <HelpComponent></HelpComponent>
        </div>
        <div className={styles.cartoons}></div>
      </div>
    </>
  );
}
