import React from "react";
import Dash from "../components/dash";

import "../style/page.css";

const Scripps = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <Dash />
        <h1>Scripps Institution of Oceanography</h1>
        <h2>Undergraduate Research Assistant</h2>
        <h4>August 2023 - September 2023</h4>
        <h3>My work as an undergraduate research assistant</h3>
        <p>
          Under the guidance of&nbsp;
          <a
            href=" https://www.linkedin.com/in/sarah-n-giddings-7913513a/ "
            target="_blank"
            rel="noopener noreferrer"
          >
            Professor Sarah Giddings
          </a>
          , I undertook the task of converting an existing version of&nbsp;
          <a
            href=" https://neilbanas.com/projects/flowweaver/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FlowWeaver&nbsp;
          </a>
          to be accessible through web browsers. The original FlowWeaver was
          developed as a Java application with JavaFX, limiting its use to MacOS
          users. The goal of this project was to enhance accessibility, allowing
          oceanographers and K-12 educators, beyond the MacOS environment, to
          utilize this valuable tool for simulating ocean particle transport.
          The broader accessibility aims to contribute to increased awareness
          and understanding of ocean behavior and the impacts of pollution.
        </p>
        <p style={{ marginTop: "15px" }}>
          As the lead developer, I played a central role in orchestrating
          discussions among the research team, K-12 educators, the UCSD IT
          department, and fellow student developers. This collaborative effort
          aimed to transform the vision of the research team into a tangible
          reality—a tool that is easily accessible and beneficial to a wider
          audience.
        </p>
        <p style={{ marginTop: "15px" }}>
          During my two-month project, I concentrated on the frontend
          development of the application. Utilizing Mapbox, React, and
          JavaScript, I designed an intuitive user interface that accurately
          simulates particle flow at selected "drop points" under various
          simulation parameters. Ensuring smooth performance and seamless
          simulations was crucial for a pleasant user experience, which
          necessitated a robust system architecture. To achieve this, I proposed
          leveraging AWS S3 for storage and EC2 for computation.
        </p>

        <h3>Project link</h3>
        <li>
          <a
            href="https://floweaver.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            floweaver.netlify.app/
          </a>
        </li>

        <h3> My work's tech stack</h3>
        <p>Frontend</p>
        <li>React-spring</li>
        <li>JavaScript</li>
        <li>Mapbox</li>
        <li>React</li>

        <p>DevOps</p>
        <li>Azure</li>
      </div>
    </div>
  );
};

export default Scripps;
