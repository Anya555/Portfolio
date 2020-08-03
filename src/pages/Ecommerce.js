import React from "react";
// react-bootstrap
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import AOS from "aos";
import "aos/dist/aos.css";

const Ecommerce = () => {
  AOS.init({
    duration: 1200,
  });
  return (
    <>
      <Navbar />
      <div className="container">
        <br></br>
        <br></br>
        <h6 className="projectInfo">
          #MongoDB, Express, React.js, Node.js, Firebase, Nodemailer#
        </h6>
        <li className="min"> 5 min read</li>
        <br></br>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <p>
              Kitchen Land is an online store that sells products in following
              categories: Blenders, Juicers, Oil Presses and Dehydrators. Each
              product has a 'Learn More' section that provides more detailed
              information and product specifications.
            </p>
            <img
              src="/images/learnMore.png"
              width="100%"
              height="220px"
              data-aos="fade-right"
              data-aos-once="true"
            />
          </div>
          <div className="col-md-5 offset-sm-1 col-sm-12">
            <img src="/images/kl-home.png" width="100%" height="280px" />
            <p>
              <br></br>
              For easier user experience, users can search for items by name or
              select different categories.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6  col-sm-12">
            <br></br> <br></br> <br></br> <br></br>
            <img src="/images/user-cart.png" width="100%" height="400px" />
          </div>
          <div className="col-md-5 offset-sm-1 col-sm-12">
            <p>
              <br></br> <br></br> <br></br> <br></br>
              <br></br>
              Secure login system provides reliable user authentication and
              shopping cart management.
            </p>
            <img
              src="/images/logiN.png"
              width="100%"
              height="280px"
              data-aos="fade-up"
              data-aos-once="true"
            />
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="row">
          <div
            className="col-md-6 col-sm-12"
            data-aos="fade-right"
            data-aos-once="true"
          >
            <br></br>
            <br></br>
            <p>
              Cloud based management lets admin keep track of inventory from
              anywhere anytime.
            </p>
            <img src="/images/admin.png" width="100%" height="280px" />
          </div>
          <div
            className="col-md-5 offset-sm-1 col-sm-12"
            data-aos="fade-left"
            data-aos-once="true"
          >
            <br></br>
            <br></br>
            <img src="/images/40.png" width="100%" height="280px" />
            <p>
              Access Control feature restricts any users other than admin from
              accessing admin dashboard and all data stored in there.
            </p>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="row">
          <div
            className="col-md-4 offset-sm-2 col-sm-12"
            data-aos="flip-left"
            data-aos-once="true"
          >
            <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
            <p>
              Customer service is our top priority. Users can contact the store
              regarding any questions by simply filling out a form.
            </p>
          </div>
          <div className="col-md-3 offset-sm-1 col-sm-12">
            <br></br> <br></br> <br></br>
            <img src="/images/contact.png" width="100%" height="280px" />
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
      <a
        href="https://github.com/Anya555/ReactEcommerceApp"
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
export default Ecommerce;
