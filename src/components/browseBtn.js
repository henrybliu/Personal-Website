import React from "react";
import { Link } from "react-scroll";
import { styled } from "@mui/system";

const BrowseBtn = () => {
  return (
    <div>
      <Link to="portfolio" spy={true} smooth={true} offset={-90} duration={500}>
        <BtnContainer className="browseBtnContainer">
          Browse Portfolio
        </BtnContainer>
      </Link>
    </div>
  );
};

const BtnContainer = styled("div")({
  boxShadow: "0 0 15px 4px rgba(0, 0, 0, 0.15)",
  borderRadius: "16px",
  transform: "scale(1)",
  transition: "transform 0.2s",
  fontFamily: "Ubuntu",
  fontSize: "1.5rem",
  fontWeight: 800,
  padding: "15px 25px",
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

export default BrowseBtn;
