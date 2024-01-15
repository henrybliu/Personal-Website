import React from "react";
import { NavLink as Link } from "react-router-dom";
import "../style/experienceItem.css";

const ExperienceItem = ({ position, company, duration, background, link }) => {
  return (
    <Link to={link}>
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
    </Link>
  );
};

export default ExperienceItem;
