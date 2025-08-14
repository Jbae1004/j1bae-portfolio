import React from "react";
import { bannerIcon } from "../../assets/images";
import styles from "./Banner.module.scss";

export const Banner = () => {
  return (
    <section id="home" className={styles.banner}>
      <img src={bannerIcon} alt="Portfolio Logo" className={styles.bannerImage} />
      <div className={styles.textContainer}>
        <h1 className={styles.gaegu}>
          Hi, I&apos;m&nbsp;Jiwon</h1>
        <p className={styles.gaegu}>
          Welcome&nbsp;to my&nbsp;portfolio!
        </p>
      </div>
    </section>
  );
};

export default Banner;
