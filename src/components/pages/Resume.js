import React from "react";
import "../../App.css";
import "./Resume.css";
import ScrollToTop from "../ScrollToTop";

function Resume() {
  return (
    <>
      <ScrollToTop />

      <div className="resume">
        <div className="resume-container">
          <div className="resume-card">
            <h1>Resume</h1>
            <div className="education">
              <h2>Education</h2>
              <hr />
              <h3>Informatics: Robotics and Intelligent Systems (Master’s)</h3>
              <h4>University of Oslo</h4>
              <h5>Aug 2020 - Present</h5>
              <br></br>
              <h3>
                Informatics: Robotics and Intelligent Systems (Bachelor's)
              </h3>
              <h4>University of Oslo</h4>
              <h5>Aug 2018 - Jun 2020</h5>
            </div>

            <div className="experience">
              <h2>Experience</h2>
              <hr />

              <h3>Group Teacher</h3>
              <h4>Department of Informatics, University of Oslo</h4>
              <h5>Aug 2019 - Present</h5>
              <p>
                During five semesters I have worked as a group teacher in the
                following courses:
              </p>
              <ul>
                <li>IN1000 – Introduction to Object Oriented Programming</li>
                <li>IN1010 – Object Oriented Programming</li>
                <li>IN2010 – Algorithms and Data Structures</li>
              </ul>
              <p>
                The job consists of holding weekly seminars and labs in addition
                to giving feedback on obligatory assignments.
              </p>
              <br />
              <h3>Summer Intern</h3>
              <h4>NRK</h4>
              <h5>Jun 2021 - Aug 2021</h5>
              <p>
                Backend Software Engineer for NRK TV, developed a page for
                downloadable content in .NET and C#.
              </p>
              <br />
              <h3>Store Employee</h3>
              <h4>Obs Sport - City Lade</h4>
              <h5>Nov 2017 - Jan 2021</h5>
              <p>
                Sales, customer relations, workshop- and warehouse work at the
                skiing/biking-department.
              </p>
            </div>
            <div className="skills">
              <h2>Skills</h2>
              <hr />

              <h3>Programming:</h3>
              <h5>
                A lot of experience with Python, Java and C#, but I have also
                worked with F#, Scheme, Scala, Assembler, VHDL, R, JavaScript
                and HTML.
              </h5>
              <br></br>
              <h3>Languages:</h3>
              <h5>
                Norwegian, fluent
                <br />
                English, fluent
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
