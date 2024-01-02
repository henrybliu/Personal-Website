import React from "react";
import "../style/about.css";
import profPic from "../images/profPic.webp";

import Dash from "../components/dash";
import ContactBtn2 from "../components/contactBtn2";
import ResumeBtn from "../components/resumeBtn";

const About = () => {
  return (
    <div className="aboutContainer" id="about">
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
            I'm a Computer Engineering student at the University of California,
            San Diego with experience in full stack development, network
            software engineering, and machine learning.
            <br></br>
            <br></br>
            In my free time, I love snowboarding, soccer, and anything outdoors.
            Currently, I am training for my first marathon!
          </h2>
          <div className="buttons">
            <ResumeBtn />
            <ContactBtn2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
