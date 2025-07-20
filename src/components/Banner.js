import React from "react";
import logo from "../assets/image/LogoR.png";
import { TypeAnimation } from "react-type-animation";


export const Banner = () => {
  return (
    <section>
      {/* EDIT to down -> Left */}
      <div
        style={{ //
          display: "grid",
          marginTop: '70px',
          gridTemplateColumns: "1fr", // default for mobile
        }}
      >
        <div>
          <h1
            style={{
              marginBottom: "1rem",
              fontSize: "2.25rem",
              fontWeight: 800,
              color: "white",
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
                  "지원",
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
              fontSize: "1.1rem"
            }}
          >
            BLAH BLAH
          </p>
        </div>


  <div
    style={{
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      backgroundColor: "#222",
      margin: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <img
      src={logo}
      alt="Portfolio Logo"
      style={{
        width: "300px",
        height: "300px",
        objectFit: "contain"
      }}
    />
  </div>
</div>


    </section>
  );
};

export default Banner;
