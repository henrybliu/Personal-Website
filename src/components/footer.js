import React from "react";
import { styled } from "@mui/system";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import FadeInSection from "./fadeInSection";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <FadeInSection>
        <FooterContent>
          <TopFooter>
            <LeftFooter>
              <h1>Thanks for visiting!</h1>
              <h2>
                I'd love to hear from you! Please feel free to reach out with
                any questions, comments, or just to say hello.
              </h2>
            </LeftFooter>
            <RightFooter>
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
            </RightFooter>
          </TopFooter>
          <h3> Henry Liu © {currentYear}</h3>
        </FooterContent>
      </FadeInSection>
    </FooterContainer>
  );
};

const FooterContainer = styled("div")({
  height: "25vh",
  width: "100vw",
  backgroundColor: "#d3d3d3",
  display: "flex",
  justifyContent: "center",

  "@media screen and (min-height: 1000px)": {
    height: "20vh",
  },

  "@media screen and (max-width: 950px)": {
    height: "auto",
  },
});

const FooterContent = styled("div")({
  height: "100%",
  width: "100%",
  maxWidth: "2000px",
  padding: "0 120px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "& h3": {
    color: "#474747",
    fontSize: "0.9rem",
    marginTop: "10px",
  },

  "@media screen and (max-width: 950px)": {
    padding: "30px",
  },
});

const TopFooter = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "@media screen and (max-width: 950px)": {
    flexDirection: "column",
  },
});

const LeftFooter = styled("div")({
  height: "100%",
  width: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  rowGap: "15px",
  marginRight: "15px",

  "& h1": {
    color: "#4361ee",
    fontSize: "1.5rem",
  },

  "& h2": {
    color: "#2a2a2a",
    fontSize: "1.3rem",
    lineHeight: 1.5,
  },

  "@media screen and (min-width: 1500px)": {
    "& h1": {
      fontSize: "2.5rem",
    },
    "& h2": {
      fontSize: "1.8rem",
    },
  },

  "@media screen and (max-width: 950px)": {
    width: "100%",
    marginRight: "0px",
    textAlign: "center",
    padding: "0 100px",
  },

  "@media screen and (max-width: 768px)": {
    padding: "0 10px",

    "& h2": {
      fontSize: "1.1rem",
      fontWeight: 500,
    },
  },
});

const RightFooter = styled("div")({
  padding: "20px",
  height: "100%",
  width: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "4rem",
  lineHeight: 1.5,
  gap: "30px",

  "& a": {
    color: "#4361ee",
    transform: "scale(1)",
    transition: "transform 0.2s",
  },

  "& a:hover": {
    transform: "scale(1.1)",
    cursor: "pointer",
  },

  "@media screen and (max-width: 950px)": {
    width: "100%",
    fontSize: "3rem",
  },
});

export default Footer;
