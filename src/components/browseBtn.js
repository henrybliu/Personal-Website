import React from "react";
import { Link } from "react-scroll";
import "../style/browseBtn.css";

const BrowseBtn = () => {
  return (
    <div>
      <Link
        className="browseBtnContainer"
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-90}
        duration={500}
      >
        Browse Portfolio
      </Link>
    </div>
  );
};

export default BrowseBtn;
