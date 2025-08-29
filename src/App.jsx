import styles from "./App.module.scss";
import { Home, NavBar, MainBorder, SocialHeaders, ScrollHint, BreadCrumbs } from "./components";
import { About, Contact } from "./pages";
import clsx from 'clsx';

const BREAD_CRUMBS_SECTIONS = ["home", "about", "skills", "contact"]

export default function App() {
  return (
    <div className={styles.body}>
      <MainBorder />
      <div className={styles.container}>
        <BreadCrumbs sections={BREAD_CRUMBS_SECTIONS} scrollContainerId="hint" />
        <SocialHeaders />
        <ScrollHint />
        <NavBar />

        <div id='hint' className={styles.scrollSnapContainer}>
          <section data-section="home" className={clsx(styles.snapSection, styles.homeSection)}>
            <Home />
          </section>
          <section data-section="about" className={clsx(styles.snapSection, styles.aboutSection)}>
            <About />
          </section>
          {/* <section data-section="skills" className={clsx(styles.snapSection, styles.skillsSection)}>
            <Skills />
          </section> */}
          <section data-section="contact" className={clsx(styles.snapSection, styles.contactSection)}>
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
}