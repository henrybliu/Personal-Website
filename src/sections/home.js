import React from "react";
import { cartoon } from "../images";
import { styled } from "@mui/material";

import { Dash, BrowseBtn, FadeInSection } from "../components";

const Home = () => {
  return (
    <HomeContainer id="home">
      <FadeInSection slide={true}>
        <HomeContent>
          <LeftHome>
            <Dash />
            <TopLeftHome>
              <h1>
                👋 Hey! I'm <span style={{ color: "#4361ee" }}>Henry</span>
              </h1>
            </TopLeftHome>
            <h2>
              a software engineer with a zeal for designing creative solutions!
            </h2>
            <ButtonContainer>
              <BrowseBtn />
            </ButtonContainer>
          </LeftHome>
          <RightHome>
            <img src={cartoon} alt="cartoon" />
          </RightHome>
        </HomeContent>
      </FadeInSection>
    </HomeContainer>
  );
};

const HomeContainer = styled("div")({
  height: "calc(100vh - 90px)",
  width: "100vw",
  color: "#2a2a2a",
  display: "flex",
  justifyContent: "center",
});

const HomeContent = styled("div")({
  height: "100%",
  width: "100%",
  maxWidth: "2000px",
  padding: "0 120px",
  display: "flex",
  alignItems: "center",

  "@media screen and (max-width: 950px)": {
    flexDirection: "column",
    justifyContent: "center",
    padding: "30px 30px",
  },
});

const LeftHome = styled("div")({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  "& h2": {
    color: "#474747",
    marginBottom: "20px",
    fontSize: "2.2rem",
    lineHeight: 1.5,
  },

  "@media screen and (min-width: 2000px)": {
    "& h2": {
      fontSize: "2.5rem",
    },
  },

  "@media screen and (max-width: 950px)": {
    height: "auto",
    width: "100%",

    "& h1": {
      fontSize: "2.5rem",
    },

    "& h2": {
      fontSize: "1.7rem",
    },
  },
});
const TopLeftHome = styled("div")({
  display: "flex",
  alignItems: "center",
  fontSize: "2.3rem",

  "@media screen and (min-width: 2000px)": {
    "& h1": {
      fontSize: "6rem",
    },
  },
});
const ButtonContainer = styled("div")({
  "@media screen and (max-width: 950px)": {
    padding: "0 20px",
  },
});

const RightHome = styled("div")({
  height: "100%",
  width: "100%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    padding: "15px",
  },

  "@media screen and (max-width: 950px)": {
    height: "100%",
    marginTop: "5%",
  },
});

export default Home;
