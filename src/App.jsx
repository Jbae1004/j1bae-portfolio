import styles from "./App.module.scss";
import { Banner, NavBar, MainBorder } from "./components";
import { About, Contact } from "./pages";
// import clsx from 'clsx';

export default function App() {
  return (
    <div className={styles.body}>
      <MainBorder />

      <div className={styles.container}>
        <NavBar />
        <div className={styles.scrollSnapContainer}>
          <section className={styles.snapSection}>
            <Banner />
          </section>
          {/* <section className={styles.snapSection}>
            <About />
          </section> */}

          {/* <section className={clsx(styles.snapSection, styles.aboutSection)}>
            <About />
          </section> */}


          <section className={styles.snapSection}>
            <Contact />
          </section>
        </div>
      </div>
    </div >
  );
}