import React from "react";
import "./About.css";


// use MUI library to import the Avatar and Tooltip components.
import { Avatar, Tooltip } from "@mui/material";

function AboutMe() {
  const myName = "Majid Pourkazemi";

  return (
    < >
      <h1 className="marginal text"> About me </h1>
      <div className="flexual">
        <Tooltip className="marginal-secondary">
          <Avatar alt="Remy Sharp" src="./assets/cut.JPG" />
        </Tooltip>
      </div>

      <div className="marginal text">
        <p className="text">
          Welcome to my page!<br></br> My name is {myName}. Passionate and
          solutions-driven full stack web developer with a Web Development
          Certificate from The University of Sydney. I am skilled in front-end
          and back-end development, including databases such as SQL and NoSQL.
          With a solid foundation in HTML, CSS, JavaScript, and various
          frameworks such as React and Node.js, I am dedicated to continuously
          learning and honing my skills. I am enthusiastic about creating
          intuitive, user-friendly web applications and collaborating with a
          team of like-minded professionals to develop innovative solutions that
          meet the needs of clients and users.
        </p>
        <p className="text">
          I possess a strong capacity to create, develop, and sustain websites
          throughout their lifecycle, from initial ideation to deployment.
          Additionally, I excel at collaborating with a diverse team in a
          fast-paced environment to craft effective solutions that surpass
          expectations.
        </p>
      </div>
    </>
  );
}

export default AboutMe;
