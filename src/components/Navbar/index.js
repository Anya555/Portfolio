import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { IoIosMenu } from 'react-icons/io';
import { FaLinkedinIn} from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg nav1">

    <a href="https://www.linkedin.com/in/anna-panas-0a51a8a8/"  target="_blank"><FaLinkedinIn className="linkedin"/></a>
    <a href="https://github.com/Anya555?tab=repositories"  target="_blank"><FaGithub className="github"/></a>
    
      <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="menu"><IoIosMenu/></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ? "nav-link" : "nav-link"}
            >
           home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/AboutPage"
              className={window.location.pathname === "/AboutPage" ? "nav-link" : "nav-link"}
            >
              <span className="about">about </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/PortfolioPage"
              className={window.location.pathname === "/PortfolioPage" ? "nav-link" : "nav-link"}
            >
             portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/ContactPage"
              className={window.location.pathname === "/ContactPage" ? "nav-link" : "nav-link"}
            >
              contact
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