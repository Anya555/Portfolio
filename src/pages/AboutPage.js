import React from "react";

// react-bootstrap
import Navbar from "../components/Navbar/index";
import Image from 'react-bootstrap/Image';
import Footer from '../components/Footer/index';
import ProgressBar from 'react-bootstrap/ProgressBar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./aboutpage.css";

// react-icons

import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaLongArrowAltDown } from 'react-icons/fa';


class Home extends React.Component {

    render() {

        AOS.init({
            duration: 1200,
        })


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

                        <div className="col-md-4 col-sm-12" data-aos="fade-right">
                            <br></br>

                            <span className="code"><FaAngleLeft className="bracket" />
                                <span className="coder">coder</span>
                                <FaAngleRight className="bracket" /></span>

                            <br></br>

                            <p> I'm a <span className="stack">full-stack</span> web developer, passionate about creating dynamic web applications. I enjoy making responsive design, focusing on clean and intuitive UI. Most of my time is dedicated to  learning new technologies and writing clean efficient code.  I strongly believe that any success is all about persistence. </p>

                        </div>


                        <div className="col-md-4 col-sm-12 img">
                            <Image src="/images/mememe.jpg" roundedCircle width="230px" height="250px" alt="myself"/>
                        </div>

                        <div className="col-md-4 col-sm-12" data-aos="fade-left">

                            <br></br>
                            <span className="code"><FaAngleLeft className="bracket" />
                                <span className="coder">background</span>
                                <FaAngleRight className="bracket" /></span>
                            <br></br>

                            <p>Recent graduate of <span className="stack"> MERN</span> stack Bootcamp at George Washington University. During the program I learned how to develop end-to-end web applications using modern coding tools and libraries, as well as delivering high quality code. </p>
                            <br></br>
                            <div className="mern">
                                <DiMongodb className="mongo-icn" />
                                <span className="express-icn"> express </span>
                                <span> <FaReact className="react-icn" /> </span>
                                <span>   <FaNodeJs className="node-icn" /> </span>
                            </div>


                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 offset-sm-3">
                            <br></br><br></br><br></br>
                            <h1 className="h1">My skills<FaLongArrowAltDown className="arrow" /> </h1>
                            <br></br>

                            {/* Skills chart */} 

                            <div className="skills">

                            <div className="label">HTML</div>
                                <div className="progress">
                                    <div  className="progress-bar html"  data-aos="fade-right"
                                        data-aos-easing="ease-in-out"   data-aos-once="true"  
                                        style={{ width: "80%" }}>
                                    </div>
                                </div>

                                <br></br>
                                <span className="label">CSS</span>
                                <div className="progress">
                                    <div className="progress-bar css" data-aos="fade-right"
                                        data-aos-easing="ease-in-out"   data-aos-once="true"  style={{ width: "65%" }} ></div>
                                </div>

                                <br></br>
                                <span className="label">JS</span>
                                <div className="progress">
                                    <div className="progress-bar js" data-aos="fade-right"
                                        data-aos-easing="ease-in-out"   data-aos-once="true"   style={{ width: "60%" }} ></div>
                                </div>

                                <br></br>
                                <span className="label">REACT.js</span>
                                <div className="progress">
                                    <div className="progress-bar react" data-aos="fade-right"
                                        data-aos-easing="ease-in-out"   data-aos-once="true"   style={{ width: "50%" }} ></div>
                                </div>

                                <br></br>
                                <span className="label">NODE.js</span>
                                <div className="progress">
                                    <div className="progress-bar node" data-aos="fade-right"
                                        data-aos-easing="ease-in-out"   data-aos-once="true"   style={{ width: "60%" }} ></div>
                                </div>


                                <br></br>
                                <span className="label">EXPRESS</span>
                                <div className="progress">
                                    <div className="progress-bar express" data-aos="fade-right"
                                        data-aos-easing="ease-in-out"   data-aos-once="true"   style={{ width: "55%" }} ></div>
                                </div>

                                <br></br>
                                <span className="label">MongoDB</span>
                                <div className="progress">
                                    <div className="progress-bar mongo" data-aos="fade-right"
                                        data-aos-easing="ease-in-out"   data-aos-once="true"   style={{ width: "65%" }} ></div>
                                </div>

                                <br></br>
                                <span className="label">MySQL</span>
                                <div className="progress">
                                    <div className="progress-bar mysql" data-aos="fade-right"
                                        data-aos-easing="ease-in-out"   data-aos-once="true"   style={{ width: "65%" }} ></div>
                                </div>

                                <br></br>
                                <span className="label">BOOTSTRAP</span>
                                <div className="progress">
                                    <div className="progress-bar bootstrap" data-aos="fade-right"
                                        data-aos-easing="ease-in-out"   data-aos-once="true"   style={{ width: "70%" }} ></div>
                                </div>

                                <br></br>
                                <span className="label">MUI</span>
                                <div className="progress">
                                    <div className="progress-bar mui" data-aos="fade-right"
                                        data-aos-easing="ease-in-out"   data-aos-once="true"   style={{ width: "70%" }} ></div>
                                </div>
                                <br></br><br></br>
                            
                            </div>

                    
                        </div>
                    </div>
                </div>
                <br></br><br></br><br></br>
                <Footer />

            </>
        );
    }
}

export default Home;