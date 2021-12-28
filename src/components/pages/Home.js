import React from "react";
import { SocialIcon } from "react-social-icons";

import "../../App.css";
import "./Home.css";

import Projects from "../Projects";

function Home() {
  return (
    <div className="home">
      <div className="name-container">
        <h2 className="myName" id="title">
          Tobias Paulsen
        </h2>
      </div>
      <div className="info">
        <div className="about">
          <h1>About Me:</h1>
          <p>
            I’m a master’s student at the University of Oslo studying
            Informatics: Robotics and Intelligent Systems.
          </p>
        </div>
        <div className="contact-wrapper">
          <div className="contact">
            <h1>Contact:</h1>
            <SocialIcon
              style={{ height: 80, width: 80 }}
              className="socialIcon"
              fgColor="white"
              url="mailto:tobiasrp98@gmail.com"
            />
            <SocialIcon
              style={{ height: 80, width: 80 }}
              className="socialIcon"
              fgColor="white"
              url="https://www.linkedin.com/in/tobiaspaulsen/"
            />
            <SocialIcon
              style={{ height: 80, width: 80 }}
              className="socialIcon"
              fgColor="white"
              url="https://www.github.com/tobiaspaulsen"
            />
          </div>
        </div>
      </div>

      {/* Do I need div here? */}
      <div id="projects">
        <Projects />
      </div>
    </div>
  );
}

export default Home;
