import React from "react";
import { Dash } from "../components";
import "../style/page.css";

const Everglow = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <Dash />
        <h1>Everglow</h1>
        <h2>
          <a
            href="https://github.com/henrybliu/Everglow"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/henrybliu/Everglow
          </a>
        </h2>
        <h3>About the project</h3>
        <p>
          During the Winter quarter of my Freshman year, I collaborated with 14
          fellow students on a project addressing quarantine boredom amid the
          COVID-19 pandemic. Our creation, Everglow, is a "pet plant" concept
          involving a solar-powered lamp that reacts based on the amount of
          sunlight it receives. The plant's mood is reflected in real-time on a
          connected web application. In this project, I took charge of the CAD
          design for the hardware housing and coordinated closely with the
          hardware team to ensure budget compliance and the proper fit of
          electronic components.
        </p>
        <h3> Project tech stack</h3>

        <p>Tools</p>
        <li>OnShape</li>
        <li>Fritzing</li>
        <li>Arduino</li>
      </div>
    </div>
  );
};

export default Everglow;
