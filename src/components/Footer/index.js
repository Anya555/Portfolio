import React from "react";
import "./style.css";
import ScrollUpButton from "react-scroll-up-button";
import { AiOutlineLike } from 'react-icons/ai';


function Footer() {

  const [
    count,
    setCount
  ] = useState(0, "count");

  // storing likes count
  function useState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
      const keyValue = window.localStorage.getItem(key);
      return keyValue !== null
        ? JSON.parse(keyValue)
        : defaultValue;
    });
    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }
 
 
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 foot">
            <footer className="page-footer">

              <ScrollUpButton style={{ backgroundColor: "#4AA69F", height: "38px", width: "38px" }} />

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
