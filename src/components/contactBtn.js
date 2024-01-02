import React from "react";
import "../style/contactBtn.css";

const ContactBtn = () => {
  return (
    <div className="contactContainer">
      <a
        href="mailto:11.henrybliu@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact
      </a>
    </div>
  );
};

export default ContactBtn;
