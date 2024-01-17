import React from "react";
import "../style/about.css";
import profPic from "../images/profPic.png";

import Dash from "../components/dash";
import Btn2 from "../components/btn2";
import FadeInSection from "../components/fadeInSection";

const About = () => {
  return (
    <div className="aboutContainer" id="about">
      <FadeInSection>
        <div className="aboutContent">
          <div className="leftAbout">
            <div className="imgContainer">
              <img src={profPic} alt="profilePic" />
            </div>
          </div>
          <div className="rightAbout">
            <Dash />
            <div className="topRightAbout">
              <h1>👀 About me </h1>
            </div>

            <h2>
              I'm a Computer Engineering student at the University of
              California, San Diego with experience in full stack development,
              network software engineering, and machine learning.
            </h2>
            <h2 id="bottomH2">
              In my free time, I love snowboarding, soccer, and trying new
              recipes. Currently, I am training for my first half-marathon!
            </h2>
            <div className="buttons">
              <Btn2
                text="Resumé"
                link="https://drive.google.com/file/d/1RP7j51_27Tmp-WYZyj2d0Dd68xVCg9nW/view"
              />
              <Btn2
                text="Connect"
                link="https://www.linkedin.com/in/henrybliu/"
              />
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
