import React, { useEffect } from "react";
import "../style/menu.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Menu = ({ show, handleNav, closeMenu }) => {
  // disable scrolling
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  if (!show) return null;
  return (
    <div className="menuContainer">
      <div className="menuContent">
        <h1
          onClick={() => {
            handleNav("home", 90);
            closeMenu();
          }}
        >
          Home
        </h1>
        <h1
          onClick={() => {
            handleNav("portfolio", 90);
            closeMenu();
          }}
        >
          Portfolio
        </h1>
        <h1
          onClick={() => {
            handleNav("about", 90);
            closeMenu();
          }}
        >
          About
        </h1>
        <a
          href="https://www.linkedin.com/in/henrybliu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect
        </a>
        <FontAwesomeIcon
          id="closeMenu"
          icon={faXmark}
          onClick={() => {
            closeMenu();
          }}
        />
      </div>
    </div>
  );
};

export default Menu;
