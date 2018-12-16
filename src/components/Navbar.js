import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  const getActiveUrl = currentPath => {
    if (typeof window !== `undefined`) {
      return document.location.pathname === currentPath ? "active" : null;
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-section">
        <Link className={`navbar-item ${getActiveUrl("/")}`} to="/">
          About
        </Link>
      </div>
      <div className="nav-section">
        <Link className={`navbar-item ${getActiveUrl("/notes")}`} to="/notes">
          Notes
        </Link>
      </div>
      <div className="nav-section">
        <Link className={`navbar-item ${getActiveUrl("/ideas")}`} to="/ideas">
          Ideas
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
