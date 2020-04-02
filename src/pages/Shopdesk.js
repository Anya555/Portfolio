import React from "react";
import "./shopdesk.css"

// react-bootstrap
import Navbar from "../components/Navbar/index";
import Footer from '../components/Footer/index';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Shopdesk() {

    AOS.init({
        duration: 1200,
    })

    return (

        <>
            <Navbar />
          

            <div className="container">
                <br></br><br></br>
            <h1 className="ecommerce">E-commerce is the future</h1>
            <br></br><br></br>
            
                <div className="row">

                    <div className="col-md-4 offset-sm-1 col-sm-12">
                        <br></br><br></br><br></br>
                           <p className="p"> It's growing five times faster than retail. Small businesses can't keep up being forced to lose out on sales or accept fees and brand dilution by selling their products on Amazon. </p>

                    </div>
                    <div className="col-md-6  col-sm-12">

                        <div className="card" data-aos="zoom-in">
                            <img src="/images/s1.png" width="100%" height="300px" />
                        </div>
                    </div>
                </div>
                <br></br><br></br><br></br><br></br>
                <div className="row">
                    <div className="col-md-6 offset-sm-1 col-sm-12">
                        <div className="card" data-aos="fade-right">
                            <img src="/images/s2.png" width="100%" height="300px" />
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <br></br><br></br><br></br>
                        <p className="p">Small businesses can't compete with giants like Amazon and Wallmart</p>
                    </div>

                </div>
                <br></br><br></br><br></br><br></br>



                <h3 className="h3">We don't show our name on your website, so they only remember your unique brand</h3>
                <br></br><br></br>
                <div className="row">

                    <div className="col-md-6 offset-sm-1 col-sm-12">
                        <div className="card" >
                            <img src="/images/shopdesk.png" width="100%" height="200px" />
                        </div>
                        <br></br>
                        <div className="card" >
                            <img src="/images/bedroom.png" width="100%" height="200px" />
                        </div>
                    </div>
                    <div className="col-md-3 offset-sm-1 col-sm-12">
                        <br></br>
                        <div className="card" data-aos="flip-right">
                            <img src="/images/cart.png" width="100%" height="380px" />
                        </div>
                    </div>
                </div>
                <br></br><br></br><br></br><br></br>
                <h3 className="h3">Cloud based inventory management lets you keep track of your store from anywhere anytime </h3>
                <br></br><br></br><br></br><br></br>
                <div className="row">
                    <div className="col-md-5 offset-sm-1 col-sm-12">
                        <div className="card" data-aos="zoom-in">
                            <img src="/images/s4.png" width="100%" height="300px" />
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <div className="card" data-aos="zoom-in">
                            <img src="/images/s5.png" width="100%" height="300px" />
                        </div>
                    </div>
                </div>
                <br></br><br></br><br></br><br></br>
                <h3 className="h3">Keeping user's information safe is our highest priority</h3>
                <br></br><br></br>
                <div className="row">
                    <div className="col-md-3 offset-sm-2 col-sm-12">
                        <div className="card" data-aos="flip-left">
                            <img src="/images/s3.png" width="100%" height="350px" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <br></br><br></br><br></br><br></br>
                        <p className="p">We use a secure login system to authenticate  and persist users and shopping carts </p>
                    </div>
                </div>
                <br></br><br></br><br></br>
                <h3 className="h3">Don't get left behind</h3>
                <br></br><br></br>
                <div className="col-md-8 offset-sm-2 col-sm-12">
                    <div className="card" data-aos="flip-down">
                        <img src="/images/shop.png" width="100%" height="350px" />
                    </div>
                </div>
                <br></br><br></br><br></br>
            </div>
            <Footer />
        </>
    )
}

export default Shopdesk;