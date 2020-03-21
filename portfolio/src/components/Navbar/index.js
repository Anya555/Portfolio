import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg nav1">


      <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ? "nav-link" : "nav-link"}
            >
              H<span>o</span>m<span>e</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/AboutPage"
              className={window.location.pathname === "/AboutPage" ? "nav-link" : "nav-link"}
            >
              About 
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/PortfolioPage"
              className={window.location.pathname === "/PortfolioPage" ? "nav-link" : "nav-link"}
            >
              <span className="portfolio">Port</span><span className="f">f</span><span  className="portfolio">olio</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/ContactPage"
              className={window.location.pathname === "/ContactPage" ? "nav-link" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
       
      </div>
      
    </nav>
    <nav className="navbar navbar-expand-lg nav2"></nav>
    </>
  );
}

export default Navbar;