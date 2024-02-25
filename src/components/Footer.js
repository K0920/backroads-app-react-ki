import React from "react";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentCSSClass="footer-links" childCSSClass="footer-link" />
      <SocialLinks cssClass="footer-icon" />

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
