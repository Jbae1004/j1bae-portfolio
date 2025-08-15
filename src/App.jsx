import styles from "./App.module.scss";
import { Home, NavBar, MainBorder, SocialHeaders, ScrollHint } from "./components";
import { AAbout, Contact } from "./pages";
// import clsx from 'clsx';

export default function App() {
  return (
    <div className={styles.body}>
      <MainBorder />

      <div className={styles.container}>
        <SocialHeaders />
        <ScrollHint />
        <NavBar />

        <div id='hello' className={styles.scrollSnapContainer}>
          <section className={styles.snapSection}>
            <Home />
          </section>

          <section className={styles.snapSection}>
            <AAbout />
          </section>

          {/* <section className={clsx(styles.snapSection, styles.aboutSection)}>
            <About />
          </section> */}


          <section className={styles.snapSection}>
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
}