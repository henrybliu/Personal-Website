import React from "react";
import { Link } from "react-scroll";
import "../style/navBar.css";

import ContactBtn from "./contactBtn";

const NavBar = () => {
  return (
    <div className="navContainer">
      <div className="navContent">
        <div className="name">
          <Link to="home" spy={true} smooth={true} offset={-90} duration={500}>
            Henry Liu
          </Link>
        </div>
        <div className="sections">
          <Link to="home" spy={true} smooth={true} offset={-90} duration={500}>
            Home
          </Link>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Portfolio
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-90} duration={500}>
            About
          </Link>
        </div>
        <div className="contact">
          <ContactBtn />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
