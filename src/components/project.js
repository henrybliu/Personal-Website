import React from "react";
import { NavLink as Link } from "react-router-dom";
import { styled } from "@mui/system";

const Project = ({ projectName, background, link }) => {
  return (
    <Link to={link}>
      <ProjectContainer>
        <ProjectContent>
          <ProjectTop>
            <img src={background} alt="background" />
          </ProjectTop>
          <ProjectBottom>
            <h2>{projectName}</h2>
          </ProjectBottom>
        </ProjectContent>
      </ProjectContainer>
    </Link>
  );
};

const ProjectContainer = styled("div")({
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
    height: "250px",
  },
});

const ProjectContent = styled("div")({ height: "100%", width: "100%" });

const ProjectTop = styled("div")({
  height: "80%",
  width: "100%",
  overflow: "hidden",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    padding: "15px",
  },
});

const ProjectBottom = styled("div")({
  padding: "10px 30px",
  width: "100%",
  height: "20%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  lineHeight: 1.5,
  backgroundColor: "#d3d3d3",

  "& h2": {
    fontSize: "1.8rem",
    fontWeight: 600,
    color: "#2a2a2a",

    "@media screen and (max-width: 1400px)": {
      fontSize: "1.4rem",
    },

    "@media screen and (max-width: 1150px)": {
      fontSize: "1.4rem",
    },

    "@media screen and (max-width: 768px)": {
      fontSize: "1.3rem",
    },
  },
});

export default Project;
