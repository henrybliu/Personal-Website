import React from "react";
import { styled } from "@mui/system";

const Dash = () => {
  return <DashElement className="dashContainer" />;
};

const DashElement = styled("div")({
  height: "10px",
  width: "100px",
  backgroundColor: "#4361ee",
  marginBottom: "20px",

  "@media screen and (max-width: 950px)": {
    height: "7px",
  },
});

export default Dash;
