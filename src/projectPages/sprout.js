import React from "react";
import Dash from "../components/dash";
import "../style/page.css";

const Sprout = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <Dash />
        <h1>Sprout</h1>
        <h2>***In progress***</h2>

        <h3>About the project</h3>
        <p>
          I am currently engaged in a project aimed at fostering the growth of
          small, local businesses. Existing review platforms, such as Yelp and
          Google Reviews, often operate on a pay-to-win model, which poses
          challenges for many small businesses with limited financial resources.
          To address this issue, particularly for businesses without a physical
          storefront, I am developing a tailored application. This application
          is designed to safeguard business privacy while offering tools for
          effective management, exposure, and scalability.
        </p>
        <p style={{ marginTop: "15px" }}>
          If you are a small business owner, your input is invaluable for
          refining this application to better suit your needs. I would greatly
          appreciate it if you could take a moment to fill out this&nbsp;
          <a
            href="https://forms.gle/ynonZsTtosxJwReG9"
            target="_blank"
            rel="noopener noreferrer"
          >
            form
          </a>
          , contributing to my user research efforts and enabling me to tailor
          the app to better serve you.
        </p>
        <h3> Project tech stack (for now)</h3>

        <p>Languages</p>
        <li>Swift</li>
        <p>Backend</p>
        <li>Firebase</li>
      </div>
    </div>
  );
};

export default Sprout;
