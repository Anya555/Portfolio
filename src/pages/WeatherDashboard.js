import React from "react";

// react-bootstrap
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import AOS from "aos";
import "aos/dist/aos.css";

function Weather() {
  AOS.init({
    duration: 1200,
  });

  return (
    <>
      <Navbar />

      <div className="container">
        <br></br>
        <h6 className="projectInfo">
          #School project built with jQuery, OppenWeatherMap API, HTML5
          Geolocation API, localStorage#
        </h6>
        <li className="min"> 3 min read</li>
        <br></br>
        <br></br>

        <div className="row">
          <div className="col-md-5 col-sm-12">
            <br></br>
            <br></br>
            <br></br>
            <p>
              Weather Dashboard is an app that allows user to see current
              weather and 5-day forecast at their location or for the city they
              search for.
            </p>
          </div>

          <div className="col-md-6 offset-sm-1 col-sm-12">
            <div className="card" data-aos="fade-left" data-aos-once="true">
              <img
                src="/images/location.png"
                width="100%"
                height="300px"
                alt="weatherapp"
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
            <div className="card" data-aos="flip-down" data-aos-once="true">
              <img
                src="/images/weather.png"
                width="100%"
                height="300px"
                alt="bidbot"
              />
            </div>
          </div>
          <div className="col-md-5 offset-sm-1 col-sm-12">
            <br></br>
            <br></br>
            <p>
              User's can search weather forecast for any city worldwide. Each
              city gets added to their personal dynamically created list. User's
              can also remove cities from the list.
            </p>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="row">
          <div className="col-md-5 offset-sm-1 col-sm-12">
            <br></br>
            <br></br>
            <br></br>
            <p data-aos="zoom-out-down" data-aos-once="true">
              By default weather is shown in Farenheit units, but users can also
              convert the weather into celcius or back to farenheits by simply
              clicking "°C" or "°F" buttons on a navbar.
            </p>
          </div>

          <div className="col-md-3 offset-sm-1 col-sm-12">
            <img
              src="/images/cels.png"
              width="220px"
              height="400px"
              alt="weatherapp"
            />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <a
        href="https://github.com/Anya555/WeatherDashborad"
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

export default Weather;
