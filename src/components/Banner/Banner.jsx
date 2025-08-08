import React from "react";
import { logo2 } from "../../assets/images";
import styles from "./Banner.module.scss";

export const Banner = () => {
  return (
    <section id="home" className={styles.banner}>
      <img src={logo2} alt="Portfolio Logo" className={styles.bannerImage} />
      <div className={styles.textContainer}>
        <h1>Hi, I'm Jiwon</h1>
        <p>Welcome to my portfolio</p>
      </div>
    </section>
  );
};

export default Banner;
