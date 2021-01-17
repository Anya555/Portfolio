import React, { useEffect } from "react";

// react-bootstrap
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import AOS from "aos";
import "aos/dist/aos.css";
import "./projects.css";

const Weather = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  AOS.init({
    duration: 1200,
  });

  return (
    <>
      <Navbar />

      <div className="container">
        <br></br>
        <h6 className="projectInfo">
          #jQuery, OppenWeatherMap API, HTML5 Geolocation API, localStorage#
        </h6>
        <li className="min"> 3 min read</li>
        <br></br>
        <br></br>

        <div className="row">
          <div className="col-md-4 col-sm-12">
            <br></br>

            <p>
              Weather Dashboard is a weather forecast app that allows user to
              see current weather and 5-day forecast at their own location or
              any city they search for. By default Weather Dashboard will
              display a weather at user's location. Users will have to grant
              access to their location when using app for the first time.
            </p>
          </div>

          <div className="col-md-7 offset-sm-1 col-sm-12">
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
          <div className="col-md-7  col-sm-12">
            <div className="card" data-aos="flip-down" data-aos-once="true">
              <img
                src="/images/weather.png"
                width="100%"
                height="300px"
                alt="bidbot"
              />
            </div>
          </div>
          <div className="col-md-5  col-sm-12">
            <br></br>
            <br></br>
            <p>
              User's can search weather forecast for any city worldwide. Every
              searched city is being added to user's list for convenience, so
              users don't have to search for it every time. If they no longer
              wish to know weather forecast at certain stored city in they can
              simply remove it from the list.
            </p>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="row">
          <div className="col-md-4 offset-sm-2 col-sm-12">
            <br></br>
            <br></br>
            <br></br>
            <p data-aos="zoom-out-down" data-aos-once="true">
              By default the weather forecast is displayed in Fahrenheit units,
              but users can also convert the weather into Celsius or back to
              Fahrenheit by simply clicking "°C" or "°F" buttons on a navbar.
            </p>
          </div>

          <div className="col-md-5 offset-sm-1 col-sm-12">
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
};

export default Weather;
