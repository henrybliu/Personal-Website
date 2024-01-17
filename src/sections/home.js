import React from "react";
import "../style/home.css";
import cartoon from "../images/landingCartoon.png";

import Dash from "../components/dash";
import BrowseBtn from "../components/browseBtn";
import FadeInSection from "../components/fadeInSection";

const Home = () => {
  return (
    <div className="homeContainer" id="home">
      <FadeInSection>
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
            <BrowseBtn />
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
