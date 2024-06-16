import React from "react";
import { Dash } from "../components";
import "../style/page.css";

const TarotCardGame = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <Dash />
        <h1>Tarot Card Game</h1>
        <h2>
          <a
            href="https://tarotbutgame.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            tarotbutgame.netlify.app/
          </a>
        </h2>
        <h2>
          <a
            href="https://github.com/henrybliu/Tarot-Card-Reading-Game"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/henrybliu/Tarot-Card-Reading-Game
          </a>
        </h2>
        <h3>About the project</h3>
        <p>
          This collaborative group project was designed to explore web
          development skills using Vanilla JavaScript, HTML, and CSS, with a
          particular focus on fostering effective team collaboration and
          management. The project also included a substantial emphasis on
          configuring CI/CD pipelines, automating tasks such as build, testing,
          and document generation. In addition to technical aspects, the project
          simulated a software engineering environment by incorporating an agile
          methodology. This approach allowed for end-user research, multiple
          design iterations, and a seamless transition to programming within an
          agile framework, mirroring real-world software development practices.
        </p>
        <h3> Project tech stack</h3>

        <p>Frontend</p>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <p>CI/CD</p>
        <li>Puppeteer</li>
        <li>Jest</li>
        <li>Eslint</li>
        <li>JSDoc</li>
      </div>
    </div>
  );
};

export default TarotCardGame;
