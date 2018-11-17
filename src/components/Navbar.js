import React from "react";
import { Link } from "gatsby";
import kaldiLogo from "../img/kaldiLogo.svg";

const Navbar = () => (
  <nav className="" style={{ backgroundColor: "salmon" }}>
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={kaldiLogo} alt="Kaldi" style={{ width: "88px" }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        {/*add link to tags, and link to landing page*/}
      </div>
    </div>
  </nav>
);

export default Navbar;
