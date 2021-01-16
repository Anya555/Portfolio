import React from "react";
// react-bootstrap
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import AOS from "aos";
import "aos/dist/aos.css";
import "./projects.css";
const justBookIt = () => {
  AOS.init({
    duration: 1200,
  });
  return (
    <>
      <Navbar />
      <div className="container">
        <br></br>
        <h6 className="projectInfo">
          #Angular, Angular Powered Bootstrap, Node.js, Express.js, Mongoose,
          Nodemailer, jsonwebtoken, bcrypt#
        </h6>
        <li className="min"> 5 min read</li>
        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          <div
            className="col-md-4 col-sm-12"
            data-aos="fade-right"
            data-aos-once="true"
          >
            <br></br>
            <p>
              'Just Book It' is an appointment booking software. It's a great
              solution for businesses to automate their planning and management.
              It's designed for standard business operation hours: Monday-Friday
              9am - 5pm but can be modified to individual needs. All available
              dates are shown in black color and disabled dates in grey color.
            </p>
          </div>

          <div className="col-md-7 offset-sm-1 col-sm-12">
            <div className="card">
              <img
                src="/images/calendar.png"
                width="100%"
                height="300px"
                alt="bookingapp"
              />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <p>
              Instantly receive confirmation email with details about
              appointment when form is submitted.
            </p>
            <div className="card">
              <img
                src="/images/email.png"
                width="100%"
                height="300px"
                alt="todoList"
              />
            </div>
          </div>
          <div
            className="col-md-5 col-sm-12"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <img
              src="/images/bookItCancel.png"
              width="100%"
              height="300px"
              alt="todoList"
            />

            <p>
              To cancel appointment, simply follow a link included in the email.
            </p>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="row">
          <div
            className="col-md-4 offset-sm-1 col-sm-12"
            data-aos="fade-right"
            data-aos-once="true"
          >
            <p>
              Appointments management is very easy through admin dashboard that
              is strictly design for admin use only. All data is secured and
              stored in cloud.
            </p>
            <img
              src="/images/bookItLogin.png"
              width="100%"
              height="300px"
              alt="todoList"
            />
          </div>
          <div
            className="col-md-6 offset-sm-1 col-sm-12"
            data-aos="fade-left"
            data-aos-once="true"
          >
            <br></br>
            <img
              src="/images/bookItTable.png"
              width="100%"
              height="300px"
              alt="todoList"
            />

            <p>
              Search engine is also implemented for admin to easily find an
              appointment and delete if needed.
            </p>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
      <a
        href="https://github.com/Anya555/AngularScheduler"
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
export default justBookIt;
