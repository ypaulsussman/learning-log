import React from "react";
import { Link } from "gatsby";

const Navbar = () => {

  return (
  <nav className="navbar" style={{ backgroundColor: "salmon" }}>
    <div className="nav-section">
      <Link className="nav-item" to="/">
        By Date
      </Link>
    </div>
    <div className="nav-section">
      <Link className="navbar-item" to="/about">
        About
      </Link>
    </div>
    <div className="nav-section">
      <Link className="navbar-item" to="/tags">
        By Tag
      </Link>
    </div>
  </nav>
)};

export default Navbar;
