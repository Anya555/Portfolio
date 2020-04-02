import React from "react";
import "./style.css";
import ScrollUpButton from "react-scroll-up-button";
import { AiOutlineLike } from 'react-icons/ai';


function Footer() {
  const [
    count,
    setCount
  ] = useStickyState(0, "count");

  function useStickyState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }
 

  //   constructor(props){

  //     super(props);
  //     this.state ={
  //       count: 0,
  //       updated: false
  //     }
  //   }


  //   // updating likes count
  //  handleLikesCount= () => {

  //     if(!this.state.updated) {
  //       this.setState((prevState) => {
  //         return {
  //           count: prevState.count + 1,
  //           updated: true
  //         };
  //       });
  //     } else {

  //       this.setState((prevState) => {
  //         return {
  //           count: prevState.count - 1,
  //           updated: false
  //         };
  //       });
  //     }
  //   };


 
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 foot">
            <footer className="page-footer">

              <ScrollUpButton style={{ backgroundColor: "#660033", height: "38px", width: "38px" }} />

              <div className="footer">

                <AiOutlineLike className="like-icn" onClick={() => setCount(count + 1)} /> <span className="count"> Likes: {count}</span>
              
               Anna Panas <span className="copy">©2020</span>
              </div>

            </footer>
          </div>
        </div>
      </div>
    );
 
}

export default Footer;
