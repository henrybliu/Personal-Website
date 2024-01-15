import React from "react";
import { NavLink as Link } from "react-router-dom";
import "../style/project.css";

const Project = ({ projectName, background, link }) => {
  return (
    <Link to={link}>
      <div className="projectContainer">
        <div className="projectContent">
          <div className="topProject">
            <img src={background} alt="background" />
          </div>
          <div className="bottomProject">
            <h2>{projectName}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Project;
