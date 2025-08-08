import React, { useState } from "react";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      <ul className={`${styles.menu} ${isOpen ? styles.showMenu : ""}`}>
        <li className={styles.menuItem}>Home</li>
        <li className={styles.menuItem}>About</li>
        <li className={styles.menuItem}>Services</li>
        <li className={styles.menuItem}>Contact</li>
      </ul>
    </>
  );
}
