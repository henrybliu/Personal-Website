import React from "react";
import { styled } from "@mui/system";

const SkillItem = ({ term }) => {
  return <ItemContainer>{term}</ItemContainer>;
};

const ItemContainer = styled("div")({
  fontSize: "1.2rem",
  backgroundColor: "#4361ee",
  width: "fit-content",
  padding: "5px 10px",
  borderRadius: "20px",
  color: "#faf9f6",
  fontFamily: "Ubuntu",
  marginTop: "5px",
  marginBottom: "5px",
  marginRight: "5px",
  fontWeight: 500,
  "@media (max-width: 600px)": {
    fontSize: "1.1rem",
    marginRight: "2px",
  },
});

export default SkillItem;
