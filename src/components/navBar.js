import React, { useState } from "react";
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

import PrimaryButton from "./primaryButton";
import Menu from "./menu";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleNav = (section, offset) => {
    navigate("/");

    setTimeout(() => {
      const element = document.getElementById(section);

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      if (element) {
        window.scrollTo({
          behavior: "smooth",
          top: offsetPosition,
        });
      }
    }, 0);
  };

  const closeMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <NavContainer>
      <NavContent>
        <Name>
          <h2 onClick={() => handleNav("home", 90)}>Henry Liu</h2>
        </Name>
        <Sections>
          <h2 onClick={() => handleNav("home", 90)}>Home</h2>
          <h2 onClick={() => handleNav("portfolio", 90)}>Portfolio</h2>
          <h2 onClick={() => handleNav("about", 90)}>About</h2>
        </Sections>
        <Contact>
          <PrimaryButton
            id="connectBtn"
            text="Connect"
            link="https://www.linkedin.com/in/henrybliu/"
          />
        </Contact>
        <MenuToggle>
          <FontAwesomeIcon
            icon={faBurger}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        </MenuToggle>
      </NavContent>
      <Menu show={showMenu} handleNav={handleNav} closeMenu={closeMenu}></Menu>
    </NavContainer>
  );
};

const NavContainer = styled("div")({
  position: "sticky",
  top: 0,
  zIndex: 9999,
  height: "90px",
  width: "100vw",
  backgroundColor: "#faf9f6",
  boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
  display: "flex",
  justifyContent: "center",

  "@media screen and (max-width: 950px)": {
    height: "80px",
  },
});

const NavContent = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "2000px",
  height: "100%",
  fontFamily: "Ubuntu",
  padding: "20px 120px",
  color: "#4361ee",

  "@media screen and (max-width: 950px)": {
    padding: "0 30px",
  },
});

const Name = styled("div")({
  "& h2": {
    color: "#2a2a2a",
    fontSize: "2rem",
    fontWeight: 800,
    transform: "scale(1)",
    transition: "transform 0.2s",
  },

  "& h2:hover": {
    transform: "scale(1.1)",
    cursor: "pointer",
  },

  "@media screen and (max-width: 950px)": {
    "& h2": {
      fontSize: "1.8rem",
    },
  },
});

const Sections = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",

  "& h2": {
    transform: "scale(1)",
    transition: "transform 0.2s",
    fontSize: "1.5rem",
    fontWeight: 500,
    marginLeft: "15px",
    marginRight: "15px",
  },

  "& h2:hover": {
    cursor: "pointer",
    transform: "scale(1.15)",
  },

  "@media screen and (max-width: 950px)": {
    display: "none",
  },
});
const Contact = styled("div")({
  "@media screen and (max-width: 950px)": {
    display: "none",
  },
});

const MenuToggle = styled("div")({
  display: "none",

  "@media screen and (max-width: 950px)": {
    display: "block",
    fontSize: "2.8rem",
    transform: "scale(1)",
    transition: "transform 0.2s",
    color: "#4361ee",

    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.15)",
    },
  },
});

export default NavBar;
