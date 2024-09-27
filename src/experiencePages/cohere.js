import React from "react";
import { Dash } from "../components";
import "../style/page.css";

const Cohere = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <Dash />
        <h1>Cohere Health</h1>
        <h2>Full Stack Software Engineer Intern</h2>
        <h4>January 2024 - June 2024</h4>
        <h3>What does Cohere Health do?</h3>
        <p>
          <a
            href="https://coherehealth.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cohere Health&nbsp;
          </a>
          is a startup that leverages AI and natural language processing to
          improve healthcare coordination, communication, and decision-making.
          Key solutions include a care coordination platform to identify gaps
          and recommend interventions, virtual assistants for patient
          engagement, clinical NLP to structure health data, automated patient
          outreach to improve adherence, and real-time workflow tools to assist
          providers with diagnoses, medications, referrals, etc. The goal is to
          use AI and automation to enable better outcomes and efficiency across
          patients, providers, and payers.
        </p>

        <h3>What I worked on</h3>
        <p>
          My primary focus was on feature development within the clinical
          operations workstream, the segment of the application most users
          engage with. Additionally, I led a project to enhance the existing
          feature flag service, which significantly improved the efficiency of
          the product and engineering teams in developing and rolling out new
          features.
        </p>
        <br></br>
        <p>Key contributions include: </p>
        <li>
          Spearheaded the improvement of the feature flag UI and service
          utilized by our engineering and product teams for efficient feature
          deployment and maintenance -- deprecated feature flags and their
          expected use case were more clearly identified and feature rollout
          waves could be more quickly configured
        </li>
        <li>
          Developed a scalable PDF generation service serving over 420,000
          users: incorporating payer configuration for content inclusion using a
          GORM listener triggering JSON payload creation upon request
          finalization, and securely transferred via SFTP to the Matrix
          integration for real-time communication
        </li>

        <li>
          Revised interactions with ML suggestions on the PDF letter
          customization page, leading to a remarkable 70% increase in ML model
          accuracy
        </li>
        <li>
          Collaborated with designers to expand our component library, enhancing
          the user experience and code reusability
        </li>
        <h3> My work's tech stack</h3>
        <p>Frontend</p>
        <li>React</li>
        <li>TypeScript</li>
        <p>Backend</p>
        <li> Java</li>
        <li> Groovy</li>
        <li> Grails</li>
        <li>ElasticSearch</li>
        <li> MongoDB</li>
        <p>Infrastructure/DevOps</p>
        <li>AWS</li>
        <li>Docker</li>
        <li>Kafka</li>
        <p>Tools</p>
        <li>Sentry</li>
        <li>Kibana</li>
        <p>Testing</p>
        <li>Cypress</li>
        <li>JUnit</li>
      </div>
    </div>
  );
};

export default Cohere;
