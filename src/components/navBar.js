import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/navBar.css";

import Btn from "./btn";

const NavBar = () => {
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
          <Btn text="Connect" link="https://www.linkedin.com/in/henrybliu/" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
