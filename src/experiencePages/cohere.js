import React from "react";
import Dash from "../components/dash";
import "../style/page.css";

const Cohere = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <Dash />
        <h1>Cohere Health</h1>
        <h2>Full Stack Software Engineer Intern</h2>
        <h4>January 2024 - Present</h4>
        <h3>What does Cohere Health do?</h3>
        <p>
          <a
            href="https://coherehealth.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cohere Health&nbsp;
          </a>
          is a startup leverages AI and natural language processing to improve
          healthcare coordination, communication, and decision-making. Key
          solutions include a care coordination platform to identify gaps and
          recommend interventions, virtual assistants for patient engagement,
          clinical NLP to structure health data, automated patient outreach to
          improve adherence, and real-time workflow tools to assist providers
          with diagnoses, medications, referrals, etc. The goal is to use AI and
          automation to enable better outcomes and efficiency across patients,
          providers, and payers.
        </p>

        <h3>What I am working on</h3>
        <p>
          A major focus of my work is on the preauthorization workflow backend
          service. Over 90% of requests get auto-approved by AI, while the 10%
          not auto-approved are reviewed by nurses and doctors. Medical
          professionals use this service to retrieve the pertinent documentation
          and to upload their decisions. As a full stack software engineer
          intern, I work with designers and engineers to add and improve
          features for this crucial review process.
        </p>
        <h3> My work's tech stack</h3>
        <p>Frontend</p>
        <li>React</li>
        <li>TypeScript</li>
        <p>Backend</p>
        <li> Java</li>
        <li> Groovy</li>
        <li>ElasticSearch</li>
        <li> MongoDB</li>
        <p>DevOps</p>
        <li>Elastic (ELK Stack)</li>
        <li>Salesforce</li>
        <li>AWS</li>
        <li>Docker</li>
        <li>Kafka</li>
        <p>Testing</p>
        <li>Cypress</li>
        <li>JUnit</li>
      </div>
    </div>
  );
};

export default Cohere;
