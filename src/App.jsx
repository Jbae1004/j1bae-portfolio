import styles from "./App.module.scss";
import {
  Home,
  NavBar,
  MainBorder,
  SocialHeaders,
  ScrollHint,
  BreadCrumbs,
} from "./components";
import { About, Skills, Contact } from "./pages";

const SECTIONS = [
  { label: "home", component: <Home /> },
  { label: "about", component: <About /> },
  { label: "skills", component: <Skills /> },
  { label: "contact", component: <Contact /> },
];

const BREAD_CRUMBS_LABELS = SECTIONS.map((s) => s.label);

export default function App() {
  return (
    <div className={styles.body}>
      <MainBorder />

      <div className={styles.container}>
        <BreadCrumbs sections={BREAD_CRUMBS_LABELS} scrollContainerId="hint" />
        <SocialHeaders />
        <ScrollHint />
        <NavBar />

        <div id="hint" className={styles.scrollSnapContainer}>
          {SECTIONS.map((section) => (
            <section
              key={section.label}
              data-section={section.label}
              className={styles.snapSection}
            >
              {section.component}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
