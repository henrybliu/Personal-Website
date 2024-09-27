import React from "react";
import { Dash } from "../components";

import "../style/page.css";

const Viasat2023 = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <Dash />
        <h1>Viasat</h1>
        <h2>Full Stack Software Engineer Intern</h2>
        <h4>June 2023 - September 2023</h4>
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
          During my internship, as a part of the Advanced Networks and
          Cybersecurity Solutions team, I took a lead role in developing a
          robust full-stack feature that showcased a network's health data and
          assessed interference across connected devices' locations. I
          engineered a systemd service, ensuring the seamless transmission of
          device noise data to an aggregator. My contributions spanned the
          creation of both the service and the application for collecting and
          visualizing sampled data. I also contributed to the configuration of
          the CI/CD pipeline. Additionally, I demonstrated leadership by
          effectively assigning tasks to fellow interns in the absence of our
          manager during his vacation. This experience highlights my skills in
          full-stack development, system design, networking fundamentals, and
          project management.
        </p>
        <h3> My work's tech stack</h3>
        <p>Frontend</p>
        <li>Angular</li>
        <li>TypeScript</li>
        <li>Python</li>
        <p>Backend</p>
        <li>TypeScript</li>
        <li>TypeORM</li>
        <li>PostgreSQL</li>
        <li>Flask</li>
        <li>Python</li>
        <p>Infrastructure</p>
        <li>AWS</li>
        <li>systemd</li>
        <li>Docker</li>
        <p>Network OS</p>
        <li>VyOS</li>
        <p>Testing</p>
        <li>JUnit</li>
        <li>Jenkins</li>
      </div>
    </div>
  );
};

export default Viasat2023;
