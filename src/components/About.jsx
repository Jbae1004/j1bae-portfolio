import { title } from "motion/react-client";
import React, { useState } from "react";

const Tab_Data = [
  {
    title: "Programming Languages",
    id: "programming-languages",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Python</li>
        <li>C</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    ),
  },

  {
    title: "Technologies",
    id: "technologies",
    content: (
      <ul className="list-disc pl-2">
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
      <ul className="list-disc pl-2">
        <li>
          University of Alaska Anchorage Bachelor of Science in Computer Science
          Minors: Mathematics and Computer Systems Engineering
        </li>
      </ul>
    ),
  },
];

export const About = () => {};

export default About;
