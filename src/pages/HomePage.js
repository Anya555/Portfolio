
import React from 'react';
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


const Pulse = styled.div`animation: 2s ${keyframes`${pulse}`} infinite`;


function Home() {
   
     
     
    return (
        <>
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 home">
                        <div className="card">

                            <img src="/images/code.png" height="500px"/>
                            <h1 className="centered">Hello, I'm Anna &</h1>
                            <Link to="./AboutPage" style={{ textDecoration: 'none' }} className="get">
                                <div>
                                    <Pulse>
                                        <h4 >Get to know what I do<span className="arrow"><FaArrowRight /></span></h4>
                                    </Pulse>
                                </div>
                            </Link>


                        </div>
                    </div>
                </div>
            </div>

            
            <Footer />
        </>
    );

}

export default Home;

