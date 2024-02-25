import React from "react";
import { pageLinks } from "../data";
const PageLinks = ({ parentCSSClass, childCSSClass }) => {
  return (
    <ul className={parentCSSClass}>
      {pageLinks.map((link) => {
        return (
          <li>
            <a href={link.href} className={childCSSClass}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
