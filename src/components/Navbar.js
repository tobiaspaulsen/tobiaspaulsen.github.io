import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="nav-links">
            Home
          </a>
          <a href="/#projects" className="nav-links">
            Projects
          </a>
          <Link to="/resume" className="nav-links">
            Resume
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
