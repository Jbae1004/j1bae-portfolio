import { useState } from "react";
import styles from "./Contact.module.scss";
import { MailDuck } from "../../assets/images";
import clsx from "clsx";

export const Contact = () => {
  const [result, setResult] = useState("");
  const [validated, setValidated] = useState(false);

  const [email, setEmail] = useState("");
  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setValidated(true);
      setResult("");
      return;
    }

    setValidated(false);
    setResult("Sending...");

    const formData = new FormData(form);
    formData.append("access_key", "2215e0e9-8af7-4001-a17b-fd3086c58509");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Form submitted successfully");
        form.reset();
        setEmail("");
      } else {
        setResult(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      setResult("Error submitting form");
    }
  };

  const showRequiredEmail =
    validated && email.trim() === "";

  const showInvalidEmail =
    validated && email.trim() !== "" && !isValidEmail(email);


  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.left}>
        <img src={MailDuck} alt="ContactLogo" />
      </div>

      <form
        className={clsx(styles.form, { [styles.wasValidated]: validated })}
        onSubmit={onSubmit}
        noValidate
      >
        <div className={styles.field}>
          <input type="text" name="name" placeholder="Name*" required />
          <p className={clsx(styles.error, styles.required)}>
            This is a required field.
          </p>
        </div>

        <div className={styles.field}>
          <input type="email" name="email" placeholder="Email*" required valid={email} onChange={(e) => setEmail(e.target.value)} />
          {showRequiredEmail && (
            <p className={clsx(styles.error, styles.required)}>
              This is a required field.
            </p>
          )}
          {showInvalidEmail && (
            <p className={clsx(styles.error, styles.invalid)}>
              Please enter a valid email address.
            </p>
          )}
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

        {validated && (

          <p className={styles.formError}>
            Please correct errors before submitting this form.
          </p>
        )}

        {result && <span className={styles.result}>{result}</span>}
      </form>
    </div>
  );
};
export default Contact;
