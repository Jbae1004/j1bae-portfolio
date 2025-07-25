import React, { useState, useEffect } from "react";
import logo from "../assets/image/logo.png";
import navIcon1 from "../assets/image/nav-icon1.svg";
import navIcon2 from "../assets/image/nav-icon2.svg";
import "../App.css";

export const Footer = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className={`footer ${scrolled ? "scrolled" : ""}`}>
      <div>
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "40px",
          }}
        />
      </div>

      <div style={{ fontSize: "14px" }}>
        © {new Date().getFullYear()} Jiwon Bae
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <a
          href="https://www.linkedin.com/in/jiwonbae1004"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <img src={navIcon1} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/Jbae1004"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <img src={navIcon2} alt="GitHub" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
