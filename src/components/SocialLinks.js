import React from "react";
import { socialLinks } from "../data";
const SocialLinks = ({ cssClass }) => {
  return (
    <ul className="footer-icons">
      {socialLinks.map((link) => {
        return (
          <li>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cssClass}
            >
              <i className={link.icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
