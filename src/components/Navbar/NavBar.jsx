import { useState } from "react";
import styles from "./NavBar.module.scss";
import clsx from "clsx";

const menuNames = ["Home", "About", "Skills", "Contact"];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setHasToggled(true);
  };

  return (
    <div className={styles.navWrapper}>
      <ul
        className={clsx(
          styles.menu,
          hasToggled && (isOpen ? styles.showMenu : styles.hideMenu)
        )}
      >
        {menuNames.map((name) => (
          <li key={name} className={styles.menuItem}>
            {name}
          </li>
        ))}
      </ul>

      <div
        className={clsx(styles.hamburger, { [styles.open]: isOpen })}
        onClick={toggleMenu}
      >
        {[1, 2, 3].map((_bar) => (
          <span key={_bar} className={styles.bar} />
        ))}
      </div>
    </div>
  );
};

export default NavBar;
