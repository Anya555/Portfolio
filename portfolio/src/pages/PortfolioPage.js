import React, { Component } from "react";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import { FaGlasses } from 'react-icons/fa';
import './portfoliopage.css';


class Portfolio extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    "id": 1,
                    "image": "/images/me.jpg",
                    "name": "StarXed",
                    "description": "Zodiac match dating app",
                    "link": "https://github.com/brer4449/groupproject1"
                },
                {
                    "id": 2,
                    "image": "/images/me.jpg",
                    "name": "Shop desk",
                    "description": "Ecommerce platform",
                    "link": "https://github.com/brer4449/groupproject1"
                },
                {
                    "id": 3,
                    "image": "/images/me.jpg",
                    "name": "BidBot",
                    "description": "Online auction",
                    "link": "https://github.com/brer4449/groupproject1"
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
                        <div className="card" key={id}>
                            <div className="img-container">
                                <img src={image} className="portfolio-pic" />
                            </div>
                            
                            <div className="content">
                                <h5> {name}</h5>
                                <p className="description"> {description} </p>
                                <a href={link} >See project <FaGlasses className="glasses"/></a>
                            </div>
                        </div>

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
                            <h1>Projects </h1>
                            <br></br><br></br>

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