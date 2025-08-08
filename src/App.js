import  NavBar  from "./components/Navbar/NavBar";
import { Banner } from "./components/Banner/Banner";
import { Footer } from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={styles.body}>
      <div className={styles.leftBorder} />
      <div className={styles.rightBorder} />
      <div className={styles.topBorder} />
      <div className={styles.bottomBorder} />
      <div className={styles.container}>
        <NavBar />
        <Banner />
        <About />
        {/* <Contact />
        <Footer /> */}
      </div>
    </div>
  );
}
