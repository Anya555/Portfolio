import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";
import "./projects.css";

function Bidbot() {
  AOS.init({
    duration: 1200,
  });

  return (
    <>
      <Navbar />

      <div className="container">
        <br></br>
        <br></br>
        <h6 className="projectInfo">#MongoDB, Express, React.js, Node.js#</h6>
        <li className="min"> 5 min read</li>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <br></br>
            <br></br>
            <p>
              Online auctions have picked up and grown alongside the thriving
              digital world. They allow extreme convenience for bidders, as they
              don't have to leave their homes, but can instead just open up the
              browser and find their desired items.
            </p>
          </div>

          <div className="col-md-6 offset-sm-1 col-sm-12">
            <div className="card" data-aos="fade-left" data-aos-once="true">
              <img
                src="/images/bot1.png"
                width="100%"
                height="300px"
                alt="bidbot"
              />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="row">
          <div className="col-md-6  col-sm-12">
            <div className="card">
              <img
                src="/images/bid.png"
                width="100%"
                height="300px"
                alt="bidbot"
              />
            </div>
          </div>
          <div className="col-md-5 offset-sm-1 col-sm-12">
            <p>
              Just make yourself a cup of coffee and find your favorite pieces
              in different categories while still wearing pajamas
            </p>
            <div className="card" data-aos="fade-up" data-aos-once="true">
              <img
                src="/images/biditems.png"
                width="100%"
                height="200px"
                alt="bidbot"
              />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2>Start bidding once you found it </h2>
        <br></br>
        <div className="row">
          <div className="col-md-6 offset-sm-3 col-sm-12">
            <div className="card" data-aos="flip-down" data-aos-once="true">
              <img
                src="/images/b2.png"
                width="100%"
                height="300px"
                alt="bidbot"
              />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <h2>Not willing to buy, but have something to sell?</h2>
        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-md-5 offset-sm-1 col-sm-12">
            <br></br>
            <br></br>
            <br></br>
            <p data-aos="zoom-out-down" data-aos-once="true">
              Online auctions are benefitial to sellers, because sellers don't
              have to pay fees to hold an auction event in a certain location.
              Just post your item and make some extra cash{" "}
              <span className="arrow">
                <FaArrowRight />
              </span>
            </p>
          </div>

          <div className="col-md-3 offset-sm-1 col-sm-12">
            <div className="card">
              <img
                src="/images/post.png"
                width="100%"
                height="400px"
                alt="bidbot"
              />
            </div>
          </div>

          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
      <br></br>
      <br></br>
      <a
        href="https://github.com/vormc2005/Project3"
        target="_blank"
        rel="noopener noreferrer"
        className="projectInfo"
      >
        #See project on GitHub#
      </a>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
}

export default Bidbot;
