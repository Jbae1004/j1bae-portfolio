import React, { useState } from "react";
import styles from "./NavBar.module.scss";

const menuNames = ["Home", "About", "Skills", "Contact"];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {[1, 2, 3].map((_bar) => (
          <span className={styles.bar} />
        ))}
      </div>

      <ul
        className={`${styles.menu} ${
          isOpen ? styles.showMenu : styles.hideMenu
        }`}
      >
        {menuNames.map((name) => (
          <li key={name} className={styles.menuItem}>
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}
