import React from "react";

// react-bootstrap
import Navbar from "../components/Navbar/index";
import Image from 'react-bootstrap/Image';
import Footer from '../components/Footer/index'

// react- css animations

import { slideInLeft } from "react-animations";
import { slideInRight } from "react-animations";
import styled, { keyframes } from "styled-components";
import "./aboutpage.css";

// react-icons

import { FaCoffee } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaLongArrowAltDown } from 'react-icons/fa'


// keyframes
const SlideInLeft = styled.div`animation: 1s ${keyframes`${slideInLeft}`} `;
const SlideInRight = styled.div`animation: 1s ${keyframes`${slideInRight}`} `;



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
                        <h4>read<span className="text-black">m</span>e</h4>
                    </div>
                    <div className="col-4">
                        <hr></hr>
                    </div>
                </div>

                <br></br>

                <div className="row">

                    <div className="col-md-4 col-sm-12">
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
                               <u className="success">Success</u> = <span className="formula">Coffee</span> <FaCoffee className="icon" /> + <span className="formula">Persistence</span> <img src="/images/persistence.jpg" height="45px" width="45px"/>
                            </p>
                        </SlideInLeft>
                    </div>

                    <div className="col-md-4 col-sm-12 img">
                        <Image src="/images/pic.jpg" roundedCircle width="230px" height="250px" />
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <SlideInRight>
                            <br></br>
                            <span className="code"><FaAngleLeft className="bracket" />
                                <span className="coder">background</span>
                                <FaAngleRight className="bracket" /></span>
                            <br></br>

                            <p>Recent graduate of <span className="stack"> MERN</span> stack Bootcamp at George Washington University, where I learned how to develop end-to-end web applications using modern coding tools and libraries.</p>

                                <div className="mern">
                                <DiMongodb className="mongo"/>
                                <span className="express"> express </span>  
                                <span> <FaReact className="react"/> </span>
                                <span>   <FaNodeJs className="node"/> </span>
                                </div>
                                
                        </SlideInRight>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 offset-sm-3">
                       
                        <h1 className="h1">My skills<FaLongArrowAltDown className="arrow"/> </h1>
                        <br></br>

                        {/* Skills chart */}
                     
                        <div className="skills-chart">
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "90%" }} ><span className="label">HTML</span></div>
                            </div>
                            <br></br>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "80%" }} ><span className="label">CSS</span></div>
                            </div>
                            <br></br>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "70%" }} ><span className="label">JS</span></div>
                            </div>
                            <br></br>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "70%" }} ><span className="label">NODE.js</span></div>
                            </div>
                            <br></br>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "50%" }} ><span className="label">REACT.js</span></div>
                            </div>
                            <br></br>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "60%" }} ><span className="label">EXPRESS</span></div>
                            </div>
                            <br></br>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "70%" }} ><span className="label">MongoDB</span></div>
                            </div>
                            <br></br>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "70%" }} ><span className="label">MySQL</span></div>
                            </div>
                            <br></br>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "80%" }} ><span className="label">BOOTSTRAP</span></div>
                            </div>
                            <br></br>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "80%" }} ><span className="label">MUI</span></div>
                            </div>
                            <br></br>
                        </div>
                        

                    </div>
                </div>
            </div>
            <br></br><br></br><br></br>
<Footer/>

        </>
    );
}

export default About;