import React from "react";
import { styled } from "@mui/system";

const SecondaryButton = ({ text, link }) => {
  return (
    <Container className="btn2Container">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </Container>
  );
};

const Container = styled("div")({
  boxShadow: "0 0 15px 4px rgba(0, 0, 0, 0.15)",
  padding: "15px 25px",
  borderRadius: "16px",
  transform: "scale(1)",
  transition: "transform 0.2s",
  fontFamily: "Ubuntu",
  fontSize: "1.5rem",
  fontWeight: 800,
  color: "#faf9f6",
  backgroundColor: "#4361ee",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",

  "&:hover": {
    transform: "scale(1.1)",
    cursor: "pointer",
  },

  "& a": {
    textDecoration: "none",
    color: "#faf9f6",
  },

  "@media screen and (max-width: 950px)": {
    width: "100%",
  },
});

export default SecondaryButton;
