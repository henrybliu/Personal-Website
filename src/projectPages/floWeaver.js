import React from "react";
import { Dash } from "../components";
import { NavLink as Link } from "react-router-dom";
import "../style/page.css";

const FloWeaver = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <Dash />
        <h1>FloWeaver</h1>
        <h2>
          <a
            href="https://floweaver.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            floweaver.netlify.app/
          </a>
        </h2>
        <h3>About the project</h3>
        <p>
          This project originated during my time as an Undergraduate Research
          Assistant at the Scripps Institution of Oceanography . For more
          information, please refer to the Experience section of my portfolio or
          click <Link to="/scripps">here</Link>!
        </p>
        <h3> Project tech stack</h3>
        <p>Frontend</p>
        <li>React-spring</li>
        <li>JavaScript</li>
        <li>Mapbox</li>
        <li>React</li>

        <p>DevOps</p>
        <li>Azure</li>
      </div>
    </div>
  );
};

export default FloWeaver;
