import React from "react";
import { HashLink } from "react-router-hash-link";
import Headroom from "react-headroom";

require("../App.css");

function Navbar() {
  return (
    <Headroom>
      <div className="Navbar">
        <HashLink className="Link" smooth to="/#info">
          <span className="NavTitle">About Me</span>
        </HashLink>

        <HashLink className="Link" smooth to="/#projects">
          <span className="NavTitle">Projects</span>
        </HashLink>

        <HashLink className="Link" smooth to="/#contact">
          <span className="NavTitle">Contact</span>
        </HashLink>
      </div>
    </Headroom>
  );
}

export default Navbar;
