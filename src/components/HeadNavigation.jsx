import React from "react";
import "./HeadNavigation.scss";

export default function HeadNavigation() {
  return (
    <nav id="HeadNavigation">
      <div className="nav-logo">John Doe</div>
      <div>
        <ul className="nav-menu">
          <li>
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
