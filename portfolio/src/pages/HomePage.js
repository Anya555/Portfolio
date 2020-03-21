import React from "react";
// react-router
import { Link } from "react-router-dom";
// react - css animations
import "./homepage.css";
import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";
// react-bootstrap
import { Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';


const Pulse = styled.div`animation: 2s ${keyframes`${pulse}`} infinite`;

function Home() {
    return (
        <>
    
        <div className="container-fluid main">
           
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

            <h1 className="text-center">Hello, I'm Anna</h1>
            <h1 className="text-center">I'm a <span className="full">full-stack</span> web developer</h1>
           
            <br></br><br></br><br></br>

            <Link to="./AboutPage" style={{ textDecoration: 'none' }}> 
            <div className="btn">
                <Pulse>
                <Button variant="secondary">Get to know what I do <div className="arrow"><FaArrowRight/></div>
                </Button>
                </Pulse>
            </div>
            </Link>
           <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
        </>
    );

}

export default Home;