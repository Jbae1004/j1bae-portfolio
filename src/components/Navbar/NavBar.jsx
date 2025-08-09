import React, { useState } from "react";
import styles from "./NavBar.module.scss";

const menuNames = ["Home", "About", "Skills", "Contact"];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setHasToggled(true);
  };

  const menuClass = `${styles.menu} ${
    isOpen
      ? hasToggled
        ? styles.showMenu
        : ""
      : hasToggled
      ? styles.hideMenu
      : ""
  }`;

  return (
    <>
      <div
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        {[1, 2, 3].map((_bar) => (
          <span key={_bar} className={styles.bar} />
        ))}
      </div>

      <ul className={menuClass}>
        {menuNames.map((name) => (
          <li key={name} className={styles.menuItem}>
            {name}
          </li>
        ))}
      </ul>
    </>
  );
};
export default NavBar;
