import React from "react";
// react-router
import { Link } from "react-router-dom";
// react - css animations
import "./homepage.css";
import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";
// react-bootstrap
import { FaArrowRight } from 'react-icons/fa';
import { MdRestaurant } from 'react-icons/md';
import { FaBed } from 'react-icons/fa';
import { GoCode } from 'react-icons/go';
import { AiOutlineReload } from 'react-icons/ai';
import Footer from "../components/Footer/index";
import Navbar from "../components/Navbar/index"


const Pulse = styled.div`animation: 2s ${keyframes`${pulse}`} infinite`;

function Home() {
    return (
        <>
            <Navbar />
            <div className="container-fluid main">

                <br></br><br></br><br></br><br></br><br></br>

                <h1 className="text-center">Hello, I'm Anna</h1>
                <h1 className="text-center">I'm a <span className="full">full-stack</span> web developer</h1>

                <br></br><br></br>

                <Link to="./AboutPage" style={{ textDecoration: 'none' }}>
                    <div>
                        <Pulse>
                            <h6 className="h6">Get to know what I do<span className="arrow"><FaArrowRight /></span></h6>
                        </Pulse>
                    </div>
                </Link>
                <br></br><br></br>
                <p><span className="span">eat</span>(<MdRestaurant/>)<span className="span">sleep</span>(<FaBed />)<span className="span">code</span>(<GoCode />)<span className="span">repeat</span>(<AiOutlineReload />)</p>
                <br></br><br></br>
            </div>
            <Footer />
        </>
    );

}

export default Home;