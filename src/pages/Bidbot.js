import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight } from 'react-icons/fa';

function Bidbot() {

    AOS.init({
        duration: 1200,
    })

    return (
        <>
            <Navbar />
            <br></br><br></br> <br></br><br></br>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <br></br><br></br>
                        <p>Online auctions have  picked up and grown alongside the thriving digital world. They allow extreme convenience for bidders, as they don't have to leave their homes, but can instead just open up the browser and find their desired items. </p>
                    </div>

                    <div className="col-md-6 offset-sm-1 col-sm-12">
                        <div className="card" data-aos="fade-left">
                            <img src="/images/bot1.png" width="100%" height="300px" />
                        </div>
                    </div>

                </div>
                <br></br><br></br><br></br><br></br>

                <div className="row">
                    <div className="col-md-6  col-sm-12">
                        <div className="card">
                            <img src="/images/bid.png" width="100%" height="300px" />
                        </div>
                    </div>
                    <div className="col-md-5  col-sm-12">
                        <p>Just make yourself a cup of coffee and find your favorite pieces in different categories while still wearing pajamas</p>
                        <div className="card" data-aos="fade-up">
                            <img src="/images/biditems.png" width="100%" height="200px" />
                        </div>
                    </div>
                </div>
                <br></br><br></br><br></br><br></br>
                <h3 className="h3">Start bidding once you found it </h3>
                <br></br>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                    <div className="card"  data-aos="fade-right">
                            <img src="/images/b1.png" width="100%" height="300px" />
                        </div>
                    </div>
               
                    <div className="col-md-6 col-sm-12">
                    <div className="card" data-aos="fade-left">
                            <img src="/images/b2.png" width="100%" height="300px" />
                        </div>
                    </div>
                    
                </div>
                <br></br><br></br><br></br>
                <h3  className="h3">Not willing to buy, but have something to sell?</h3>
                <br></br><br></br><br></br>
                <div className="row">
                    <div className="col-md-5 offset-sm-1 col-sm-12">
                        <br></br><br></br><br></br>
                    <p data-aos="zoom-out-down">Online auctions are  benefitial  to sellers, because sellers don't have to pay fees to hold an auction event in a certain location. Just post your item and make some extra cash <span className="arrow"><FaArrowRight /></span></p>
                    </div>

                    <div className="col-md-3 offset-sm-1 col-sm-12">
                    <div className="card" >
                            <img src="/images/post.png" width="100%" height="400px" />
                        </div>
                    </div>
                    
               
                <br></br><br></br><br></br>
            </div>
            </div>
            <br></br><br></br>
            <Footer />
        </>
    )
}

export default Bidbot