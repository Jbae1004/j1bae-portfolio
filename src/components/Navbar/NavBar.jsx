import React, { useState } from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={open ? styles.barOpen : styles.bar}></div>
        <div className={open ? styles.barOpen : styles.bar}></div>
        <div className={open ? styles.barOpen : styles.bar}></div>
      </div>
      <ul className={`${styles.menu} ${open ? styles.menuOpen : ""}`}>
        <li>
          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => setOpen(false)}>
            Contact
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
