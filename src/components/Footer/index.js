import React from "react";
import "./style.css";
import ScrollUpButton from "react-scroll-up-button";
// import { AiOutlineLike } from 'react-icons/ai';
import { FacebookProvider, Like } from 'react-facebook';

function Footer() {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 foot">
          <footer className="page-footer">


            <ScrollUpButton style={{ backgroundColor: "#4AA69F", height: "42px", width: "38px" }} />

            <div className="footer">

              <div className="row">
                <div className="col-md-4 offset-sm-2">

                  <FacebookProvider appId="221365929122472">
                    <Like href="http://www.codingwithanya.com/.com" layout="button_count" />
                  </FacebookProvider>
                  </div>
                  <div className="col-md-4 offset-sm-2">
                  <span className="copy"> Anna Panas <span className="copyright">©2020</span></span>
                </div>
              </div>
            </div>

          </footer>
        </div>
      </div>
    </div>
  );

}

export default Footer;
