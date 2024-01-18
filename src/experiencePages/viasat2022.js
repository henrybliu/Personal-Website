import React from "react";
import Dash from "../components/dash";

import "../style/page.css";

const Viasat2022 = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <Dash />
        <h1>Viasat</h1>
        <h2>Software Engineer Intern</h2>
        <h4>June 2022 - September 2022</h4>
        <h3>What does Viasat do?</h3>
        <p>
          <a
            href="https://www.viasat.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Viasat&nbsp;
          </a>
          is a global communications company specializing in satellite-based
          broadband services for residential and commercial users. They provide
          secure communication solutions for government, military, and
          enterprise clients, including encrypted communication services. Viasat
          is involved in military applications, offering satellite communication
          systems and cybersecurity solutions. The company is known for its
          in-flight connectivity services, delivering high-speed internet on
          commercial and business aircraft. Additionally, Viasat is engaged in
          the development and deployment of advanced satellite technologies.
        </p>

        <h3>What I worked on</h3>
        <p>
          I automated the testing of Viasat's proprietary Link 16 radios
          (acquired by L3Harris in 2023). The certification of Link 16 radios
          was formerly a manual process, but my test framework streamlined and
          fully automated it. This significantly reduced the timeline from a
          year to just a few days. Using Python, MATLAB, and SCPI commands for
          RF equipment, I implemented a comprehensive automation solution for
          the testing procedures, also facilitating the generation of testing
          documents and reports.
        </p>
        <h3> My work's tech stack</h3>
        <li>MATLAB</li>
        <li>Python</li>
      </div>
    </div>
  );
};

export default Viasat2022;
