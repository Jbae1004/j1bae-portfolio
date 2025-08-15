import React from "react";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <div id="contact" className="grid-container" style={{ minHeight: "400px" }}>
      <div className="grid-container" style={{ minHeight: "400px" }}>
        <div className="contact-form">
          <h2>Contact Me</h2>
          <form>
            <label htmlFor="name">Your Name</label>
            <input type="name" id="name" name="name" required />

            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required />

            <button type="submit">Send</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>
            Email: <a href="mailto:your@email.com">g1bae96@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:+1234567890">+1 (907) 444-7789</a>
          </p>
        </div>
      </div>
    </div>
  );
}
