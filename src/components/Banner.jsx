import React from "react";
import logo from "../assets/image/LogoR.png";
import { TypeAnimation } from "react-type-animation";
import "../App.css";

export const Banner = () => {
  return (
    <section className="grid-container">
      <div>
        <h1
          style={{
            fontSize: "40px",
            fontWeight: 800,
            color: "white",
            marginTop: "50px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Hello! I'm{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(to right, #A4C3B2, #F6FFF8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
              fontWeight: "700",
            }}
          >
            <TypeAnimation
              sequence={[
                "Jiwon",
                500,
                "a web developer",
                1000,
                "a Software Engineer",
                1000,
                () => {},
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ color: "inherit" }}
              speed={50}
            />
          </span>
        </h1>

        <p
          style={{
            color: "white",
            fontWeight: "500",
            fontSize: "18px",
            marginTop: "20px",
            marginBottom: "20px",
            textAlign: "left",
          }}
        >
          Blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah
        </p>
      </div>

      <div
        style={{
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <div
          style={{
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            backgroundColor: "#4e4a48ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={logo}
            alt="Portfolio Logo"
            style={{
              width: "700px",
              height: "700px",
              objectFit: "center",
              justifyContent: "center",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
