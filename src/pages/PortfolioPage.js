import React, { Component } from "react";
// react-router
import { Link } from "react-router-dom";
// components
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import Button from "react-bootstrap/Button";
// icons/css/animations
import { FaArrowRight } from "react-icons/fa";
import "./portfoliopage.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          image: "/images/ecom.png",
          description: "Online shopping store",
          address: "https://powerful-beyond-85459.herokuapp.com/",
          link: "./E-commerce",
        },

        {
          id: 2,
          image: "/images/bid.png",
          description: "Online auction",
          address: "https://bidbot-auction.herokuapp.com/",
          link: "./Bidbot",
        },
        {
          id: 3,
          image: "/images/todo.png",
          description: "To do list",
          address: "https://nameless-beyond-06673.herokuapp.com/",
          link: "./ToDo",
        },
        {
          id: 4,
          image: "/images/weather.png",
          description: "Online weather forecast",
          address: "https://anya555.github.io/WeatherDashborad/",
          link: "./WeatherDashboard",
        },
      ],
    };
  }

  renderCardData() {
    return this.state.data.map((item) => {
      const { id, image, description, link, address } = item;

      return (
        <>
          <div className="col-md-4 col-sm-12">
            <div className="card portfolio-card" key={id} data-aos="fade-up">
              <div className="img-container">
                <img src={image} className="portfolio-pic" alt="project" />
                <Button variant="link" className="centered">
                  <a
                    href={address}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="address"
                  >
                    Visit website
                    <span className="arrow2">
                      <FaArrowRight />
                    </span>
                  </a>
                </Button>
              </div>
              <br></br>
              <div className="content">
                <p className="description"> {description} </p>
                <br></br>
                <Link to={link} className="learn">
                  Learn more{" "}
                </Link>
                <br></br>
                <br></br>
              </div>
            </div>

            <br></br>
          </div>
        </>
      );
    });
  }

  render() {
    AOS.init({
      duration: 1200,
    });

    return (
      <>
        <Navbar />
        <br></br>
        <br></br>
        <h2 className="projects">PROJECTS</h2>
        <br></br>
        <br></br>
        <br></br>
        <div className="container">
          <div className="row">{this.renderCardData()}</div>
        </div>
        <br></br> <br></br> <br></br> <br></br>
        <Footer />
      </>
    );
  }
}

export default Portfolio;
