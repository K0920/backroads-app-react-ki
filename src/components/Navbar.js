import React from "react";
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/*<!-- left this comment on purpose --> */}
        <PageLinks parentCSSClass="nav-links" childCSSClass="nav-link" />
        <SocialLinks cssClass="nav-icon" />
      </div>
    </nav>
  );
};

export default Navbar;