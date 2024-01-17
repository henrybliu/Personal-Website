import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

import "../style/navBar.css";

import Btn from "./btn";
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
    <div className="navContainer">
      <div className="navContent">
        <div className="name">
          <h2 onClick={() => handleNav("home", 90)}>Henry Liu</h2>
        </div>
        <div className="sections">
          <h2 onClick={() => handleNav("home", 90)}>Home</h2>
          <h2 onClick={() => handleNav("portfolio", 90)}>Portfolio</h2>
          <h2 onClick={() => handleNav("about", 90)}>About</h2>
        </div>
        <div className="contact">
          <Btn
            id="connectBtn"
            text="Connect"
            link="https://www.linkedin.com/in/henrybliu/"
          />
        </div>
        <div className="menu">
          <FontAwesomeIcon
            icon={faBurger}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        </div>
      </div>
      <Menu show={showMenu} handleNav={handleNav} closeMenu={closeMenu}></Menu>
    </div>
  );
};

export default NavBar;
