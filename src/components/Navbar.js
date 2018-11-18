import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  const getActiveUrl = currentPath => {
    return document.location.pathname === currentPath ? "active" : null;
  };

  return (
    <nav className="navbar">
      <div className="nav-section">
        <Link className={`navbar-item ${getActiveUrl("/")}`} to="/">
          By Date
        </Link>
      </div>
      <div className="nav-section">
        <Link className={`navbar-item ${getActiveUrl("/about")}`} to="/about">
          About
        </Link>
      </div>
      <div className="nav-section">
        <Link className={`navbar-item ${getActiveUrl("/tags")}`} to="/tags">
          By Tag
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
