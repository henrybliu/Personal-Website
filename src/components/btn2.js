import React from "react";
import "../style/btn2.css";

const Btn2 = ({ text, link }) => {
  return (
    <div className="btn2Container">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </div>
  );
};

export default Btn2;
