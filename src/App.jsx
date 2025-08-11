import styles from "./App.module.scss";
import { Banner, NavBar, MainBorder } from "./components";
import { About, Contact } from "./pages";

export default function App() {
  return (
    <div className={styles.body}>
      <MainBorder />
      <div className={styles.container}>
        <div> <NavBar /> </div>
        <div className={styles.scrollSnapContainer}>
          <section className={styles.snapSection}>
            <Banner />
          </section>
          <section className={styles.snapSection}>
            <About />
          </section>
          <section className={styles.snapSection}>
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
}
