import React from "react";
// import { logo2 } from "../../assets/images";
import styles from "./Banner.module.scss";

export const Banner = () => {
  return (
    <section id="home" className={styles.banner}>
      {/* <img src={logo2} alt="Portfolio Logo" className={styles.bannerImage} /> */}
      <div className={styles.textContainer}>
        <h1>
          <span className={styles.jua}> Hi, I'm</span> {""}
          <span className={styles.gaegu}> Jiwon</span>
        </h1>
        <p>
          <span className={styles.gaegu}> Welcome</span> {""}
          <span className={styles.jua}> to my </span> {""}
          <span className={styles.gaegu}> portfolio! </span> {""}
        </p>
      </div>
    </section>
  );
};

export default Banner;
