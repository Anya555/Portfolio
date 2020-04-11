import React, { Component } from "react";
// react-router
import { Link } from "react-router-dom";
// components
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import Button from 'react-bootstrap/Button';
// icons/css/animations
import { FaGlasses } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import './portfoliopage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


class Portfolio extends Component {


    constructor(props) {
        super(props)
        this.state = {
            data: [

                {
                    "id": 1,
                    "image": "/images/shop1.png",
                    "description": "Ecommerce platform ",
                    "address": "https://guarded-brook-11312.herokuapp.com/",
                    "link": "./Shopdesk"
                },
                {
                    "id": 2,
                    "image": "/images/bot2.png",
                    "description": "Online auction website",
                    "address": "https://bidbot-auction.herokuapp.com/",
                    "link": "./Bidbot"
                }

            ]

        }
    }




    renderCardData() {
        return this.state.data.map((item) => {
            const { id, image, description, link, address } = item

            return (

                <>
                    <div className="col-md-6 col-sm-12">

                        <div className="card portfolio-card" key={id} data-aos="fade-up">

                            <div className="img-container">
                                <img src={image} className="portfolio-pic" alt="project" />
                                <Button variant="outline-secondary" className="centered"><a href={address} className="address">Visit website<span className="arrow2"><FaArrowRight /></span></a></Button>
                            </div>
                            <br></br>
                            <div className="content">
                                <p className="description"> {description} </p>
                              
                                <Link to={link}>Learn more <FaGlasses className="glasses" /></Link>
                               
                            </div>
                            <br></br>


                        </div>

                        <br></br>
                    </div>
                </>

            )

        })
    }


    render() {

        AOS.init({
            duration: 1200,
        })

        return (
            <>

                <Navbar />
                <br></br><br></br>

                <h1 className="projects">PROJECTS</h1>


                <br></br><br></br>
                    <div className="container">
                        <div className="row">

                            {this.renderCardData()}

                        </div>
                    </div>

              
                <br></br> <br></br> <br></br>
                <Footer />

            </>
        );
    }
}

export default Portfolio;