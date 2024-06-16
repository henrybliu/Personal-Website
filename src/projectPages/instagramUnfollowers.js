import React from "react";
import { Dash } from "../components";
import "../style/page.css";

const InstagramUnfollowers = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <Dash />
        <h1>Instagram Unfollowers</h1>
        <h2>
          <a
            href="https://github.com/henrybliu/Instagram-Unfollowers"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/henrybliu/Instagram-Unfollowers
          </a>
        </h2>
        <h3>About the project</h3>
        <p>
          This is a script that I created to find out which of my friends who I
          follow no longer follow me back! There are more details on how to use
          the script in the README of the project's repo. Quite a fun project
          for those of you are petty enough to care! 🕵️
        </p>
        <h3> Project tech stack</h3>

        <p>Languages</p>
        <li>Python</li>
      </div>
    </div>
  );
};

export default InstagramUnfollowers;
