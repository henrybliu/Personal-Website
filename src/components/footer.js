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
        <div className="leftFooter">
          <div className="topLeftFooter">
            <h1>Thanks for visiting!</h1>
          </div>
          <h2>
            If you have any questions or comments, feel free to reach out and
            contact me! I'd love to hear from you, or if you just want to say hi
            and connect!
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
    </div>
  );
};

export default Footer;
