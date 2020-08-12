import React from "react";

// react-bootstrap
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import AOS from "aos";
import "aos/dist/aos.css";
import "./projects.css";

const RubberDuck = () => {
  AOS.init({
    duration: 1200,
  });
  return (
    <>
      <Navbar />
      <div className="container">
        <br></br>
        <h6 className="projectInfo">
          #React.js, Node.js, Express.js, React Bootstrap, MySQL#
        </h6>
        <li className="min"> 3 min read</li>
        <br></br>
        <br></br>

        <div className="row">
          <div className="col-md-6 col-sm-12">
            <p>
              <br></br>
              <br></br>
              Getting stuck in a programming problem is a very common thing. For
              example, when you are learning to code or a new programming
              language or face a new problem, you have never solved before.
              Rubber Duck is a coding forum for programmers, where they can post
              issues they're having with code and get help from other
              developers.
            </p>
            <br></br>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="card" data-aos="fade-left" data-aos-once="true">
              <img
                src="/images/askQ.png"
                width="100%"
                height="300px"
                alt="codingForum"
              />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="card" data-aos="fade-up" data-aos-once="true">
              <img
                src="/images/question.png"
                width="100%"
                height="300px"
                alt="codingForum"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <p>
              <br></br>
              <br></br>
              In order for other developers to be able to understand the issue
              and help, it's important to be specific and add code where you
              think the problem might be. In order to add code blocks, just wrap
              it in three back ticks like a following example:
              ```location.pathname``` and it will be formatted.
            </p>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          <div
            className="col-md-6 col-sm-12"
            data-aos="fade-right"
            data-aos-once="true"
          >
            <p>
              <br></br> <br></br>
              If developers know the solution they can post their answers under
              the question. Often developers find the solution themselves and
              post the answer so it can be helpful for others encountering the
              same problem.
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="card">
              <img
                src="/images/answer.png"
                width="100%"
                height="300px"
                alt="codingForum"
              />
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <a
        href="https://github.com/Anya555/ReactForum"
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
};
export default RubberDuck;
