import React from "react";
import { Dash } from "../components";
import "../style/page.css";

const Amazon = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <Dash />
        <h1>Amazon Web Services</h1>
        <h2>Software Development Engineer Intern</h2>
        <h4>June 2024 - September 2024</h4>

        <h3>What does AWS Unified Signin do?</h3>
        <p>
          The Unified Sign-in team is part of the larger AWS Identity
          organization, which supports the management of login pages for various
          services. The team consolidates the different styles and UIs into a
          single React application. Associated services include Identity Center,
          Workspaces, and many more.
        </p>
        <h3>What I worked on</h3>
        <p>
          Over time, the bundling of these various assets into a single React
          application caused slower initial load times. My solution was to
          create a CDN service to help speed up the load time,
          <b> achieving a 55% improvement in load times </b>.
        </p>
        <br></br>
        <p>Key contributions include:</p>
        <li>
          Implemented code splitting to load bundled assets in parallel,
          allowing large files to be rendered more quickly
        </li>
        <li>
          Created a fully automated CI/CD pipeline using AWS CDK to manage the
          services backing the CDN: CloudFront, S3, CloudWatch, and cache
          busting on asset updates—this step is crucial to avoid serving stale
          data to clients
        </li>
        <li>
          Integrated performance metrics graphs and alarms for observability
          into the CDN service, helping to track the service's reliability and
          proactively identify issues
        </li>
        <li>
          Decoupled the management of the React application's static assets,
          allowing the team to skip the two-phased deployment for asset
          updates—reducing production deployment across all regional hosts to
          two weeks
        </li>
        <h3>My work's tech stack</h3>
        <p>Full Stack</p>
        <li>TypeScript</li>
        <li>React</li>
        <p>Infrastructure/DevOps</p>
        <li>AWS S3</li>
        <li>AWS CloudFront</li>
        <li>AWS CloudWatch</li>
        <li>AWS CDK</li>
      </div>
    </div>
  );
};

export default Amazon;
