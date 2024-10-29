import React from "react";
import { styled } from "@mui/material";
import { profPic } from "../images";
import { Dash, SecondaryButton, FadeInSection } from "../components";

const About = () => {
  return (
    <AboutContainer id="about">
      <FadeInSection slide={true}>
        <AboutContent>
          <LeftAbout>
            <div className="imgContainer">
              <img src={profPic} alt="profilePic" />
            </div>
          </LeftAbout>
          <RightAbout>
            <Dash />
            <AboutTitle>
              <h1>👀 About me </h1>
            </AboutTitle>

            <h2>
              I'm a Computer Engineering student at the University of
              California, San Diego with experience in full stack development,
              cloud infrastructure, network software engineering, and machine
              learning.
            </h2>
            <h2 id="bottomH2">
              In my free time, I love snowboarding, soccer, cutting hair, and
              trying new recipes. Currently, I am working towards benching 225
              lbs!
            </h2>
            <div id="buttons">
              <SecondaryButton
                text="Resumé"
                link="https://drive.google.com/file/d/1RP7j51_27Tmp-WYZyj2d0Dd68xVCg9nW/view"
              />
              <SecondaryButton
                text="Connect"
                link="https://www.linkedin.com/in/henrybliu/"
              />
            </div>
          </RightAbout>
        </AboutContent>
      </FadeInSection>
    </AboutContainer>
  );
};

const AboutContainer = styled("div")({
  height: "calc(100vh - 90px)",
  width: "100vw",
  color: "#2a2a2a",
  display: "flex",
  justifyContent: "center",

  "@media screen and (max-width: 950px)": {
    display: "block",
    height: "auto",
    minHeight: "calc(100vh - 80px)",
  },
});

const AboutContent = styled("div")({
  height: "100%",
  width: "100%",
  maxWidth: "2000px",
  padding: "90px 120px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media screen and (max-width: 950px)": {
    width: "100vw",
    padding: "30px 30px",
    flexDirection: "column-reverse",
    justifyContent: "center",

    "& h1": {
      fontSize: "2.5rem",
    },
    "& h2": {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
  },

  "@media screen and (max-width: 768px)": {
    "& h2": {
      fontSize: "1.3rem",
    },
  },
});

const LeftAbout = styled("div")({
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",

  "@media screen and (max-width: 950px)": {
    height: "auto",
    width: "100%",
    justifyContent: "center",
    marginTop: "5%",
  },

  "@media screen and (max-width: 768px)": {
    marginTop: "15%",
  },

  "& .imgContainer": {
    height: "auto",
    width: "85%",
    borderRadius: "16px",
    overflow: "hidden",
  },

  "& .imgContainer img": {
    width: "100%",
    height: "auto",
    objectFit: "scale-down",
  },
});

const RightAbout = styled("div")({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  fontSize: "1rem",

  "& h2": {
    color: "#474747",
    fontSize: "1.5rem",
    lineHeight: 1.5,
  },

  "& #bottomH2": {
    marginTop: "20px",
    marginBottom: "20px",
  },

  "@media screen and (min-width: 2000px)": {
    "& h2": {
      fontSize: "2rem",
    },
  },

  "@media screen and (max-width: 950px)": {
    height: "auto",
    "& #buttons": {
      display: "flex",
      justifyContent: "center",
      padding: "0 20px",
    },
  },

  "& #buttons": {
    display: "flex",
    gap: "25px",
  },
});

const AboutTitle = styled("div")({
  display: "flex",
  alignItems: "center",
  fontSize: "1.85rem",

  "@media screen and (min-width: 2000px)": {
    "& h1": {
      fontSize: "5rem",
    },
  },
});

export default About;
