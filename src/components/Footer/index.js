import React from "react";
import "./style.css";
import ScrollUpButton from "react-scroll-up-button";


function Footer() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 foot">
          <footer className="page-footer">

            <ScrollUpButton className="scroll" style={{ backgroundColor: "#660033" }} />

            <div className="footer">

              Anna Panas <span className="copy">©2020</span>
            </div>

          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
