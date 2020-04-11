
import React from 'react';
import "./homepage.css";

// react-bootstrap
import Footer from "../components/Footer/index";
import Navbar from "../components/Navbar/index";



function Home() {



    return (
        <>
            <Navbar />

            <div className="container-fluid home">
                <div className="row">
                    <div className="col-12">
                        <br></br><br></br><br></br><br></br><br></br>

                        <div className="row">
                            <div className="col-md-4 offset-sm-5 col-sm-12">
                                <h1 className="hello">Hello, I'm Anna &</h1>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-md-1 offset-sm-1 col-sm-12">
                                <br></br><br></br>
                                <h1 className="coding cod">I</h1>
                            </div>

                            <div className="col-md-3  col-sm-12">
                                <img src="/images/pizap.jpg" height="180px" className="show" />
                            </div>
                            <div className="col-md-1 offset-sm-1  col-sm-12">
                                <br></br><br></br>
                                <h1 className="coding">CODING</h1>
                            </div>
                        </div>
                      
                    </div>
                </div>
               <br></br><br></br><br></br>
            </div>


            <Footer />
        </>
    );

}

export default Home;

