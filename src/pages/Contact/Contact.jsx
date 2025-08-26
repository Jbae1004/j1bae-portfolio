import { useState } from "react";
import styles from "./Contact.module.scss";
import { logo } from "../../assets/images";
import clsx from "clsx";

export const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "2215e0e9-8af7-4001-a17b-fd3086c58509");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form submitted successfully ✅");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong ❌");
      }
    } catch (error) {
      setResult("Error submitting form ❌");
      console.error(error);
    }
  };

  return (
    <section className={styles.contact}>
      <div className={styles.left}>
        <img src={logo} alt="ContactDuck" />
      </div>

      <form className={styles.form} onSubmit={onSubmit} noValidate>
        <div className={styles.field}>
          <input type="text" name="name" placeholder="Name*" required />
          <p className={clsx(styles.error, styles.required)}>
            This is a required field.
          </p>
        </div>

        <div className={styles.field}>
          <input type="email" name="email" placeholder="Email*" required />
          <p className={clsx(styles.error, styles.required)}>
            This is a required field.
          </p>
          <p className={clsx(styles.error, styles.invalid)}>
            Please enter a valid email address.
          </p>
        </div>

        <div className={styles.field}>
          <input type="text" name="subject" placeholder="Subject*" required />
          <p className={clsx(styles.error, styles.required)}>
            This is a required field.
          </p>
        </div>

        <div className={styles.field}>
          <textarea name="message" placeholder="Message" />
        </div>

        <button type="submit">SEND</button>

        <p className={styles.formError}>
          Please correct errors before submitting this form.
        </p>
      </form>
      {result && <span className={styles.result}>{result}</span>}
    </section>
  );
};
export default Contact;
