import React from "react";
import "./Resume.css";

function Resume() {
  const frontEnd = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "jQuery",
    "responsive design",
    "bootstrap",
    "Material UI",
  ];

  const backEnd = [
    "Api's",
    "Node.js",
    "Express",
    "MySQL, Sequuelize",
    "MongoDB, Mongoose",
    "Rest",
    "GraphQl",
    "MERN Stack",
  ];

  return (
    <body className="marginal text">
      <h1 className="marginal text"> Resume </h1>

      <div>
        <h3>
          Download my{" "}
          <a href="https://docs.google.com/document/d/1cl3W5P5dSCN4ONSy7ufSGd0pIiJBFyvGK3cjj0SyJkg/edit">
            Resume
          </a>
        </h3>
      </div>

      <div className="marginal text">
        <div>
          <h2>Front-End Technologies</h2>
          <ul>
            {frontEnd.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2>Back-End Technologies</h2>
          <ul>
            {backEnd.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </body>
  );
}

export default Resume;
