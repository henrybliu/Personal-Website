import React from "react";
import "../style/home.css";
import cartoon from "../images/landingCartoon.png";

import { Dash, BrowseBtn, FadeInSection } from "../components";

const Home = () => {
  return (
    <div className="homeContainer" id="home">
      <FadeInSection slide={true}>
        <div className="homeContent">
          <div className="leftHome">
            <Dash />
            <div className="topLeftHome">
              <h1>
                👋 Hey! I'm <span style={{ color: "#4361ee" }}>Henry</span>
              </h1>
            </div>
            <h2>
              a software engineer with a zeal for designing creative solutions!
            </h2>
            <div className="btnArea">
              <BrowseBtn />
            </div>
          </div>
          <div className="rightHome">
            <img src={cartoon} alt="cartoon" />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Home;
