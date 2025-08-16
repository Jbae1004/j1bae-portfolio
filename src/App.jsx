import styles from "./App.module.scss";
import { Home, NavBar, MainBorder, SocialHeaders, ScrollHint, BreadCrumbs } from "./components";
import { About, Contact } from "./pages";
import clsx from 'clsx';

export default function App() {
  return (
    <div className={styles.body}>
      <MainBorder />

      <div className={styles.container}>
        <SocialHeaders />
        <ScrollHint />
        <NavBar />

        <BreadCrumbs sections={["home", "about", "contact"]} scrollContainerId="hint" />

        <div id='hint' className={styles.scrollSnapContainer}>
          <section data-section="home" className={styles.snapSection}>
            <Home />
          </section>

          {/* <section className={clsx(styles.snapSection, styles.aboutSection)}>
            <About />
          </section> */}

          <section data-section="about" className={styles.snapSection}>
            <About />
          </section>

          <section data-section="contact" className={styles.snapSection}>
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
}