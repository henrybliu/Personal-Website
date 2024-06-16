import React from "react";
import { Dash } from "../components";
import "../style/page.css";

const Leetcode = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <Dash />
        <h1>Leetcode</h1>
        <h2>
          <a
            href="https://henrybliu.github.io/Leetcode/"
            target="_blank"
            rel="noopener noreferrer"
          >
            henrybliu.github.io/Leetcode/
          </a>
        </h2>
        <h2>
          <a
            href="https://github.com/henrybliu/Leetcode"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/henrybliu/Leetcode
          </a>
        </h2>
        <h3>About the project</h3>
        <p>
          I thoroughly enjoy Leetcoding as a hobby. My GitHub page serves as a
          documentation of my learning journey and some of the problems I've
          successfully tackled. Feel free to follow along and share your
          insights, or let me know if you have a more efficient solution! Happy
          coding!
        </p>
        <h3> Project tech stack</h3>

        <p>Languages</p>
        <li>Markdown (this isn't really a language though!)</li>
        <li>Python</li>
      </div>
    </div>
  );
};

export default Leetcode;
