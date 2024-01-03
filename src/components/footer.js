import React from "react";
import "../style/footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContent">
        <div className="topFooter">
          <div className="leftFooter">
            <div className="topLeftFooter">
              <h1>Thanks for visiting!</h1>
            </div>
            <h2>
              I'd love to hear from you! Please feel free to reach out with any
              questions, comments, or just to say hello.
            </h2>
          </div>
          <div className="rightFooter">
            <a
              href="https://www.linkedin.com/in/henrybliu/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/henrybliu"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="mailto:11.henrybliu@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="https://www.instagram.com/xhenryliu/"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <h3> Henry Liu © 2024</h3>
      </div>
    </div>
  );
};

export default Footer;
