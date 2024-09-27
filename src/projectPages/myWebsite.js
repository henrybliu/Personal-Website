import React from "react";
import { Dash } from "../components";
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
          my doodles! Additionally, my website incorporates a CDN to enhance the
          loading speed of images, given the significant number of visuals
          featured. I am actively optimizing various file types, including
          scripts and stylesheets, through the CDN to reduce latency and
          accelerate the overall user experience.
        </p>
        <h3> Project tech stack</h3>
        <p>Frontend</p>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <p>Infrastructure</p>
        <li>Netlify CDN</li>
        <li>Netlify</li>
      </div>
    </div>
  );
};

export default MyWebsite;
