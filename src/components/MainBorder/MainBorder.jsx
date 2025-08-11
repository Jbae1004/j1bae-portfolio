import React from "react";
import styles from "./MainBorder.module.scss";

const MainBorder = () => (
  <>
    <div className={styles.leftBorder} />
    <div className={styles.rightBorder} />
    <div className={styles.topBorder} />
    <div className={styles.bottomBorder} />
  </>
);

export default MainBorder;
