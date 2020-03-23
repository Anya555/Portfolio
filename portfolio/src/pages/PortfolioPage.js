import React, { Component } from "react";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import { FaGlasses } from 'react-icons/fa';
import './portfoliopage.css';
import { slideInUp} from "react-animations";
import styled, { keyframes } from "styled-components";

const SlideInUp = styled.div`animation: 1s ${keyframes`${slideInUp}`} `;

class Portfolio extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    "id": 1,
                    "image": "/images/starxed.png",
                    "name": "StarXed",
                    "description": "Dating app, that let's you find your match in your area, based on zodiac sign compatibility and read daily horoscope",
                    "link": "https://brer4449.github.io/groupproject1/"
                },
                {
                    "id": 2,
                    "image": "/images/shopdesk.png",
                    "name": "Shop desk",
                    "description": "Shop desk let's you sell products online, keeping your unique brand with no web development experience",
                    "link": "https://guarded-brook-11312.herokuapp.com/"
                },
                {
                    "id": 3,
                    "image": "/images/bidbot.png",
                    "name": "BidBot",
                    "description": "Online auction website, where you can bid on items in different categories, as well as post your own products",
                    "link": "https://github.com/vormc2005/Project3"
                }
            ]

        }
    }



    renderCardData() {
        return this.state.data.map((item) => {
            const { id, image, name, description, link } = item

            return (

                <>
                    <div className="col-md-4 col-sm-12">
                        <SlideInUp>
                        <div className="card" key={id}>
                            <div className="img-container">
                                <img src={image} className="portfolio-pic" />
                            </div>
                            
                            <div className="content">
                                <h5> {name}</h5>
                                <p className="description"> {description} </p>
                                <a href={link} >See project <FaGlasses className="glasses"/></a>
                            </div>
                            <br></br>
                        </div>
                        </SlideInUp>
                        <br></br>
                    </div>
                </>


            )

        })
    }


    render() {
        return (
            <>

                <Navbar />
                <br></br>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                          
                            <br></br>

                            <div className="container">
                                <div className="row">
                                
                                        {this.renderCardData()}
                                    
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <br></br> <br></br> <br></br>
                <Footer />

            </>
        );
    }
}

export default Portfolio;