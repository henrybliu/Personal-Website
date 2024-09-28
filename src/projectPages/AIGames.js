import React from "react";
import { Dash } from "../components";
import "../style/page.css";

const AIGames = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <Dash />
        <h1>Games with AI</h1>
        <h2>
          <a
            href="https://github.com/henrybliu/Games-with-AI"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/henrybliu/Games-with-AI
          </a>
        </h2>
        <h3>About the project</h3>
        <p>
          Solving/beating/visualizing popular algorithms/games with Artificial
          Intelligence!
        </p>
        <br></br>
        <p>Such games/visualizers include:</p>
        <li>
          <b>Finding Paths:</b> A visualizer for popular AI search algorithms
          BFS, DFS, and A-Star
        </li>
        <li>
          <b>2048:</b> Created an AI player utilizing a minimax tree to achieve
          a perfect score of 2048 with each play
        </li>
        <li>
          <b>Blackjack:</b> Created an AI player utilizing Q-Learning and the
          Monte Carlo and Temporal Difference policy evaluations
        </li>
        <li>
          <b>Gomuku:</b> Created an AI player using the Monte Carlo Tree Search
          algorithm
        </li>
        <li>
          <b>Sudoku:</b> Created an AI player using constraint solving and
          backtracking
        </li>
      </div>
    </div>
  );
};

export default AIGames;
