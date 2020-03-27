import React, { Component } from "react";
import "./style.css";
import ScrollUpButton from "react-scroll-up-button";
import { AiOutlineLike } from 'react-icons/ai';


class Footer extends Component {
  constructor(props){

    super(props);
    this.state ={
      count: 0,
      updated: false
    }
    this. handleIncrement = this. handleIncrement.bind(this);
  }


  // updating likes count
  handleIncrement = () => {
   
    if(!this.state.updated) {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1,
          updated: true
        };
      });
    } else {

      this.setState((prevState) => {
        return {
          count: prevState.count - 1,
          updated: false
        };
      });
    }
  };


  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 foot">
            <footer className="page-footer">

              <ScrollUpButton  style={{ backgroundColor: "#660033", height:"38px", width:"38px" }} />

              <div className="footer">

                <AiOutlineLike className="like-icn" onClick={this.handleIncrement} /> <span className="count"> Likes: {this.state.count}</span>

               Anna Panas <span className="copy">©2020</span>
              </div>

            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
