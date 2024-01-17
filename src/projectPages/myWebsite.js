import React from "react";
import Dash from "../components/dash";
import "../style/page.css";

const MyWebsite = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <Dash />
        <h1>My Personal Website</h1>
        <h2>
          <a
            href="https://github.com/henrybliu/Personal-Website"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/henrybliu/Personal-Website
          </a>
        </h2>

        <h3>About the project</h3>
        <p>
          This project serves as my "digital resume" and an excuse to show off
          my doodles! Future plans for this website include implementing a CDN
          to expedite the loading of images, considering the substantial number
          of visuals featured.
        </p>
        <h3> Project tech stack</h3>

        <p>Frontend</p>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <p>DevOps</p>
        <li>Cloudflare CDN (in progress)</li>
        <li>Netlify</li>
      </div>
    </div>
  );
};

export default MyWebsite;
