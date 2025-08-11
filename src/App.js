// import { Footer } from "./components/Footer/Footer";
// import Contact from "./pages/Contact/Contact";
// import About from "./pages/About/About";
import styles from "./App.module.scss";
import { Banner, NavBar } from "./components";

export default function App() {
  return (
    <div className={styles.body}>
      {/* <div className={styles.leftBorder} />
      <div className={styles.rightBorder} />
      <div className={styles.topBorder} />
      <div className={styles.bottomBorder} /> */}
      <div className={styles.container}>
        <NavBar />
        <Banner />

        {/* <About /> */}
        {/* <Contact />
        <Footer /> */}
      </div>
    </div>
  );
}
