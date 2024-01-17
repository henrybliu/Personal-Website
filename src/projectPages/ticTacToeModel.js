import React from "react";
import Dash from "../components/dash";
import "../style/page.css";

const TicTacToeModel = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <Dash />
        <h1>Tic-Tac-Toe Model</h1>
        <h2>***In progress***</h2>

        <h3>About the project</h3>
        <p>
          Inspired by&nbsp;
          <a
            href="https://en.wikipedia.org/wiki/AlphaZero"
            target="_blank"
            rel="noopener noreferrer"
          >
            AlphaZero
          </a>
          , I am keen on creating my own ML model that can, overtime, learn
          Tic-Tac-Toe strategy that can defeat its human opponent after several
          games!
        </p>
      </div>
    </div>
  );
};

export default TicTacToeModel;
