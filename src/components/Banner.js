import React from "react";
import logo from "../assets/image/logo.png";

export const Banner = () => {
  return (
    <section>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr", // default for mobile
        }}
      >
        {/* Left content */}
        <div
          style={{
            gridColumn: "span 1",
            alignSelf: "center",
            padding: "1rem",
          }}
        >
          <h1
            style={{
              color: "white",
              marginBottom: "1rem",
              fontSize: "2.25rem",
              fontWeight: 800,
            }}
          >
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #a855f7, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
                color: "transparent",
              }}
            >
              Hello, I'm Jiwon Bae
            </span>
          </h1>

          <p
            style={{
              color: "#ADB7BE",
            }}
          >
            BLAH BLAH
          </p>
        </div>

        {/* Right graphic + image */}
        <div
          style={{
            borderRadius: "9999px",
            backgroundColor: "#181818",
            width: "500px",
            height: "400px",
            position: "relative",
          }}
        >
          <img
            src={logo}
            alt="Portfolio Logo"
            style={{
              position: "absolute",
              transform: "translate(0, 0)",
              width: "300px",
              height: "300px",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
