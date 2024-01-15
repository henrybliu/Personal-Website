import React from "react";
import "../style/experienceItem.css";

const ExperienceItem = ({ position, company, duration, background }) => {
  return (
    <div className="experienceContainer">
      <div className="experienceContent">
        <div className="topExperience">
          <img src={background} alt="background" />
        </div>
        <div className="bottomExperience">
          <h2>{position}</h2>
          <h3>{company}</h3>
          <h4>{duration}</h4>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
