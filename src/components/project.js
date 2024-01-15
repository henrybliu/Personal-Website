import React from "react";
import "../style/project.css";

const Project = ({ projectName, background }) => {
  return (
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
  );
};

export default Project;
