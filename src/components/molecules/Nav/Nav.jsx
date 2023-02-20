import React from "react";
import "./nav.scss";

function Nav() {
  return (
    <nav>
      <div className="ad_nav-links">
        <a href="/">
          <p className="nav-btn">Projets</p>
        </a>
        <a href="/contact">
          <p className="nav-btn">Contact</p>
        </a>
        <a href="/a-propos">
          <p className="nav-btn">A propos</p>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
