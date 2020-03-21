import React from "react";

// react-bootstrap
import Navbar from "../components/Navbar/index";
import Image from 'react-bootstrap/Image';

// react- css animations

import { slideInLeft } from "react-animations";
import styled, { keyframes } from "styled-components";
import "./aboutpage.css";

// react-icons

import { FaCoffee } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import { FaKeyboard } from 'react-icons/fa';


const SlideInLeft = styled.div`animation: 1s ${keyframes`${slideInLeft}`} `;

function About() {
    return (
        <>
            <Navbar />

            <br></br><br></br>

            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <hr></hr>
                    </div>
                    <div className="col-4">
                        <h4>ABOUT ME</h4>
                    </div>
                    <div className="col-4">
                        <hr></hr>
                    </div>
                </div>

                <br></br><br></br>

                <div className="row">

                    <div className="col-4 sm-12">
                        <br></br>
                        <SlideInLeft>
                            <span className="code"><FaAngleLeft className="bracket" />
                                <span className="coder">coder</span>
                                <FaAngleRight className="bracket" /></span>

                            <br></br>

                            <p> I'm a <span className="stack">full-stack</span> web developer, passionate about creating dynamic web applications.
                        I focus on learning new technologies and writing clean efficient code.
                        My Formula for Success is:
                   <br></br><br></br>
                                <u className="success">Success</u> = <span className="formula">Coffee</span> <FaCoffee className="icon" /> + <span className="formula">Persistence</span> <FaKeyboard className="icon" />
                            </p>
                        </SlideInLeft>
                    </div>

                    <div className="col-4 sm-12 img">
                        <Image src="/images/pic.jpg" roundedCircle width="230px" height="250px" />

                    </div>

                    <div className="col-4 sm-12">
                        <br></br>
                        <h3>skills</h3>
                        <br></br>

                      
                    </div>
                </div>
            </div>


        </>
    );
}

export default About;