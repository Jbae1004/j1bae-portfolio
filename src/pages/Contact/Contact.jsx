import styles from "./Contact.module.scss";
import { logo } from "../../assets/images";

export const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.left}>
        <img src={logo} alt="ContactDuck" />
        <h2>
          <span className={styles.get}>Contact</span>{" "}
          <span className={styles.touch}>Me</span>
        </h2>
      </div>

      <form className={styles.form}>
        <input type="text" placeholder="Name*" required />
        <input type="email" placeholder="Email*" required />
        <input type="subject" placeholder="Subject*" required />
        <textarea placeholder="Message"></textarea>
        <button type="submit">SEND</button>
      </form>
    </section>
  );
};

export default Contact;