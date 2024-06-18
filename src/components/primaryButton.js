import React from "react";
import { styled } from "@mui/system";

const PrimaryButton = ({ text, link }) => {
  return (
    <Container className="btnContainer">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </Container>
  );
};

const Container = styled("div")({
  boxShadow: "0 0 15px 4px rgba(0, 0, 0, 0.1)",
  borderRadius: "16px",
  transform: "scale(1)",
  transition: "transform 0.2s",
  fontFamily: "Ubuntu",
  fontSize: "1.5rem",
  fontWeight: 800,
  color: "#4361ee",
  padding: "15px 25px",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#faf9f6",

  "&:hover": {
    transform: "scale(1.1)",
    cursor: "pointer",
  },

  "& a": {
    textDecoration: "none",
    color: "#3e5dd2",
  },
});

export default PrimaryButton;
