import React, { useState } from "react";
import { logo } from "../../assets/images";

const TAB_DATA = [
  {
    title: "Programming Languages",
    id: "programming-languages",
    content: (
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "5px",
          listStyleType: "none",
          fontSize: "15px",
          padding: "0",
          margin: "0",
        }}
      >
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Python</li>
        <li>C</li>
      </ul>
    ),
  },
  {
    title: "Technologies",
    id: "technologies",
    content: (
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "10px",
          listStyleType: "none",
          fontSize: "15px",
          padding: "0",
          margin: "0",
        }}
      >
        <li>ReactJS</li>
        <li>TailwindCSS</li>
        <li>Bootstrap</li>
        <li>Vite</li>
        <li>Node.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "10px",
          listStyleType: "none",
          fontSize: "15px",
          padding: "0",
          margin: "0",
        }}
      >
        <li>
          University of Alaska Anchorage — Bachelor of Science in Computer
          Science
        </li>
        <li>Minors: Mathematics and Computer Systems Engineering</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("programming-languages");

  // const handleTabChange = (id) => {
  //   setTab(id);
  // };

  return (
    <section
      style={{
        color: "white",
        // padding: "50px 75px",
        backgroundColor: "#75716eff",

      }}
      id="about"
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "35px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={logo}
          alt="aboutimage"
          style={{
            width: "400px",
            height: "400px",
            objectFit: "cover",
            flexShrink: 0,
          }}
        />

        <div
          style={{
            flex: 1,
            minWidth: "300px",
          }}
        >
          <h2
            style={{
              background: "linear-gradient(to right, #A4C3B2, #F6FFF8)",
              color: "#081c15",
              fontSize: "35px",
              fontWeight: "bold",
              margin: "0 20px 50px 20px",
            }}
          >
            About Me
          </h2>

          <p
            style={{
              fontSize: "15px",
              fontWeight: "500",
              lineHeight: "20px",
              margin: "20px",
              textAlign: "left",
            }}
          >
            Blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah
          </p>

          <div
            style={{
              display: "flex",
              gap: "30px",
              margin: "20px",
              padding: "10px",
              justifyContent: "center",
            }}
          ></div>
          <div
            style={{
              marginTop: "10px",
            }}
          >
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section >
  );
};

export default About;
