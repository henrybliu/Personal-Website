import React from "react";
import { NavLink as Link } from "react-router-dom";
import { styled } from "@mui/system";

const ExperienceItem = ({ position, company, duration, background, link }) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <ExperienceContainer>
        <TopExperience>
          <img src={background} alt="background" />
        </TopExperience>
        <BottomExperience>
          <h2>{position}</h2>
          <h3>{company}</h3>
          <h4>{duration}</h4>
        </BottomExperience>
      </ExperienceContainer>
    </Link>
  );
};

const ExperienceContainer = styled("div")({
  width: "100%",
  height: "400px",
  borderRadius: "20px",
  overflow: "hidden",
  lineHeight: 1.5,
  boxShadow: "0 0 15px 4px rgba(0, 0, 0, 0.15)",
  transform: "scale(1)",
  transition: "transform 0.2s",

  "&:hover": {
    transform: "scale(1.03)",
    cursor: "pointer",
  },

  "@media screen and (max-width: 768px)": {
    height: "350px",
  },
});

const TopExperience = styled("div")({
  height: "70%",
  width: "100%",
  overflow: "hidden",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  "@media screen and (max-width: 768px)": {
    height: "60%",
  },
});

const BottomExperience = styled("div")({
  padding: "10px 30px",
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  lineHeight: 1.5,

  "& h2": {
    fontSize: "1.8rem",
    fontWeight: 600,
    color: "#2a2a2a",
  },

  "& h3": {
    fontSize: "1.2rem",
    fontWeight: 500,
    color: "#474747",
  },

  "& h4": {
    fontSize: "1rem",
    fontWeight: 300,
    color: "#474747",
  },

  "@media screen and (max-width: 768px)": {
    "& h2": {
      fontSize: "1.3rem",
    },
    "& h3, & h4": {
      fontSize: "1rem",
    },
  },
});

export default ExperienceItem;
