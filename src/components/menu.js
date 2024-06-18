import React, { useEffect } from "react";
import { styled } from "@mui/system";

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
    <MenuContainer>
      <MenuContent>
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
      </MenuContent>
    </MenuContainer>
  );
};

const MenuContainer = styled("div")({
  top: 0,
  position: "fixed",
  height: "100vh",
  width: "100vw",
  backgroundColor: "#faf9f6",
  zIndex: 99999,
  display: "flex",
  justifyContent: "center",

  "& h1:hover, & a:hover, & #closeMenu:hover": {
    transform: "scale(1.1)",
    cursor: "pointer",
  },
});

const MenuContent = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "30px",
  fontFamily: "Ubuntu",
  paddingBottom: "100px",

  "& h1, & a, & #closeMenu": {
    fontSize: "3rem",
    margin: "20px",
    fontWeight: 600,
    color: "#4361ee",
    transform: "scale(1)",
    transition: "transform 0.2s",
  },
});

export default Menu;
