import React from "react";
import { Dash } from "../components";
import "../style/page.css";

const thetaTauWebsite = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <Dash />
        <h1>Theta Tau Website</h1>
        <h2>
          <a
            href="https://www.ucsdthetatau.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.ucsdthetatau.com/
          </a>
        </h2>
        <h2>
          <a
            href="https://github.com/UCSD-Theta-Tau-Website/TT-Website"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/UCSD-Theta-Tau-Website/TT-Website
          </a>
        </h2>
        <h2>
          <a
            href="https://www.figma.com/file/VG2Qd1TZSExpOmNaifMDlS/TT-Website-Redesign?type=design&node-id=1-4&mode=design"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.figma.com/TT-Website
          </a>
        </h2>
        <h3>About the project</h3>
        <p>
          During the summer of 2023, I served as the project lead for the
          development of the UC San Diego Theta Tau website. Over a span of 12
          weeks, I guided a team consisting of 8 designers and developers
          through processes such as collecting user feedback, crafting multiple
          design iterations, and ultimately programming the final design.
        </p>
        <h3> Project tech stack</h3>

        <p>Languages</p>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <p>Tools</p>
        <li>Figma</li>
      </div>
    </div>
  );
};
export default thetaTauWebsite;
