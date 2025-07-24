import React from "react";
import logo from "../assets/image/LogoR.png";
import { TypeAnimation } from "react-type-animation";
import "../App.css";

// style={{ marginTop: "150px", padding: "0 20px" }}

export const Banner = () => {
  return (
    <section
      className="grid-container"
    >
      <div>
        <h1
          style={{
            fontSize: "55px",
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
              backgroundImage: "linear-gradient(to right, #9CAEA9, #CCDAD1)",
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
            fontWeight: "900",
            fontSize: "20px",
            marginTop: "20px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          BLAH BLAH
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
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            backgroundColor: "#474044",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={logo}
            alt="Portfolio Logo"
            style={{
              width: "400px",
              height: "400px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
