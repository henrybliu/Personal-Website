import React from "react";
import "../style/about.css";
import profPic from "../images/profPic.png";

import { Dash, SecondaryButton, FadeInSection } from "../components";

const About = () => {
  return (
    <div className="aboutContainer" id="about">
      <FadeInSection slide={true}>
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
              I'm a Master's student at the University of California, San Diego
              studying Machine Learning & Data Science with experience in full
              stack development, network software engineering, and machine
              learning.
            </h2>
            <h2 id="bottomH2">
              In my free time, I love snowboarding, soccer, and trying new
              recipes. Currently, I am training for my first Spartan race!
            </h2>
            <div className="buttons">
              <SecondaryButton
                text="Resumé"
                link="https://drive.google.com/file/d/1RP7j51_27Tmp-WYZyj2d0Dd68xVCg9nW/view"
              />
              <SecondaryButton
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
