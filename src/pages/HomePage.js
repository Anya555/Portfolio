import React from "react";
// react-router
import { Link } from "react-router-dom";
// react - css animations
import "./homepage.css";
import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";
// react-bootstrap
import { FaArrowRight } from 'react-icons/fa';
import Footer from "../components/Footer/index";
import Navbar from "../components/Navbar/index";
import Image from 'react-bootstrap/Image';



const Pulse = styled.div`animation: 2s ${keyframes`${pulse}`} infinite`;

function Home() {
    return (
        <>
            <Navbar />
            <div className="container-fluid main">
                <div className="row">
                    <div className="col-md-6 col-sm-12">

                <br></br><br></br><br></br><br></br><br></br>

                <h1 className="text-center">Hello World, I'm Anna</h1>
                <h1 className="text-center">I'm a <span className="full">full-stack</span> web developer</h1>

                <br></br><br></br><br></br>

                <Link to="./AboutPage" style={{ textDecoration: 'none' }}>
                    <div>
                        <Pulse>
                            <h6 className="h6">Get to know what I do<span className="arrow"><FaArrowRight /></span></h6>
                        </Pulse>
                    </div>
                </Link>
                </div>

                <div className="col-md-6 col-sm-12 hom">
                <br></br><br></br><br></br><br></br>
                <div className="card">
                    <Image src="/images/laptop.jpg"  height="281px"/>
            
                    </div>
                </div>
                
              
                </div>
            </div>
           <br></br><br></br><br></br>
            <Footer />
        </>
    );

}

export default Home;