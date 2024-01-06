import React from "react";
import "../style/portfolio.css";

import Dash from "../components/dash";

const Portfolio = () => {
  return (
    <div className="portfolioContainer" id="portfolio">
      <div className="portfolioContent">
        <div className="portfolioTitle">
          <Dash></Dash>
          <h1>My portfolio 🎨</h1>
        </div>
        <div className="filters"> Filters</div>

        <div className="showcase">showcase section</div>
      </div>
    </div>
  );
};

export default Portfolio;
