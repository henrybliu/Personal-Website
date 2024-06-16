import React from "react";
import { Dash } from "../components";
import "../style/page.css";

const PaloVerde = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <Dash />
        <h1>Palo Verde Generating Station</h1>
        <h2>Software Engineer Intern</h2>
        <h4>June 2021 - August 2021</h4>
        <h3>What does the Palo Verde Generating Station do?</h3>
        <p>
          The&nbsp;
          <a
            href="https://www.paloverde.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Palo Verde Generating Station&nbsp;
          </a>
          is a nuclear power plant in Arizona, USA. Despite being in a desert,
          it uses a cooling pond for reactor cooling. The plant supplies
          electricity to the Southwestern U.S. and is a major contributor to
          clean energy with its carbon-free nuclear power. It is the largest
          power plant in the U.S. and the second-largest globally.
        </p>

        <h3>What I worked on</h3>
        <p>
          As a member of the Electronic Rework Team, I played a key role in the
          development of a web application aimed at consolidating tens of
          thousands of physical and digital files scattered throughout the power
          plant and various databases. This innovative solution significantly
          enhanced the efficiency of locating essential rework items and
          updating their statuses.
        </p>
        <h3> My work's tech stack</h3>
        <p>Frontend</p>
        <li>React</li>
        <li>JavaScript</li>
        <li>Axios</li>
        <li>HTML</li>
        <li>CSS</li>
        <p>Backend</p>
        <li>MongoDB</li>
        <li>Node.js</li>
        <li>Express</li>
      </div>
    </div>
  );
};

export default PaloVerde;
