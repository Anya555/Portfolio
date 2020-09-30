import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

// react-bootstrap
import Footer from "../components/Footer/index";
import Navbar from "../components/Navbar/index";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <>
      <Navbar />

      <div className="container-fluid home">
        <div className="row">
          <div className="col-12">
            <br></br>
            <br></br>
            <br></br>

            <div className="row">
              <div className="col-md-5 offset-sm-2 col-sm-12">
                <h1 className="hello">Hello I'm Anna,</h1>
                <br></br>

                <h2 className="web">I'm a full stack web developer</h2>
                <br></br>
                <h1 className="hello">&</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-md-1 offset-sm-2 col-sm-12">
                <br></br>
                <br></br>
                <h1 className="coding cod">I</h1>
              </div>

              <div className="col-md-3  col-sm-12">
                <Image src="/images/pizap.jpg" fluid />
              </div>

              <div className="col-md-3  col-sm-12">
                <br></br>
                <br></br>
                <h1 className="coding">CODING</h1>
                <br></br>
                <div className="col-md-10">
                  <Link to="/AboutPage">
                    <Button variant="outline-light" className="knowme">
                      Get to know me
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>

      <Footer />
    </>
  );
}

export default Home;
