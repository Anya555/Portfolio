import React, { Component } from "react";
// react-router
import { Link } from "react-router-dom";
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
                    "image": "/images/shop1.png",
                    "name": "Shop desk",
                    "description": "Ecommerce platform ",
                    // "link": "https://guarded-brook-11312.herokuapp.com/"
                    "link":"./Shopdesk"
                },
                {
                    "id": 2,
                    "image": "/images/bot2.png",
                    "name": "BidBot",
                    "description": "Online auction website",
                    // "link": "https://bidbot-auction.herokuapp.com/"
                    "link": "./Bidbot"
                }
               
            ]

        }
    }



    renderCardData() {
        return this.state.data.map((item) => {
            const { id, image, name, description, link } = item

            return (

                <>
                    <div className="col-md-6 col-sm-12">
                        <SlideInUp>
                        <div className="card"  key={id}>
                            <div className="img-container">
                                <img src={image} className="portfolio-pic" />
                            </div>
                  
                            <div className="content">
                                <h5> {name}</h5>
                                <p className="description"> {description} </p>
                                <Link to={link}>Learn more <FaGlasses className="glasses"/></Link>
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
                <br></br><br></br>

                <div className="container port">
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