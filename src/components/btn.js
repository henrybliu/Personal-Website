import React from "react";
import "../style/btn.css";

const Btn = ({ text, link }) => {
  return (
    <div className="btnContainer">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </div>
  );
};

export default Btn;
