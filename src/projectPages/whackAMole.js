import React from "react";
import { Dash } from "../components";
import "../style/page.css";

const WhackAMole = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <Dash />
        <h1>Whack-A-Mole</h1>
        <h2>
          <a
            href="https://github.com/henrybliu/Whack-A-Mole"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/henrybliu/Whack-A-Mole
          </a>
        </h2>
        <h3>About the project</h3>
        <p>
          In a span of 5 weeks, I created a Whack-A-Mole arcade game utilizing
          an Arduino board as the controller. The gameplay was visually
          presented on a screen through a MATLAB GUI.
        </p>
        <p style={{ marginTop: "15px" }}>
          Checkout the GitHub link above for a video demo and the project
          documentation!
        </p>
        <h3> Project tech stack</h3>
        <p>Languages</p>
        <li>C++</li>
        <p>Tools</p>
        <li>MATLAB GUI</li>
        <li>OnShape</li>
        <li>EagleCAD</li>
        <li>Fritzing</li>
        <li>Arduino</li>
      </div>
    </div>
  );
};

export default WhackAMole;
