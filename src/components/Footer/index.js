import React from "react";
import "./style.css";
import ScrollUpButton from "react-scroll-up-button";
// import { AiOutlineLike } from 'react-icons/ai';
import { FacebookProvider, Like } from 'react-facebook';

function Footer() {

  // const [
  //   count,
  //   setCount
  // ] = useState(0, "count");

  // // storing likes count
  // function useState(defaultValue, key) {
  //   const [value, setValue] = React.useState(() => {
  //     const keyValue = window.localStorage.getItem(key);
  //     return keyValue !== null
  //       ? JSON.parse(keyValue)
  //       : defaultValue;
  //   });
  //   React.useEffect(() => {
  //     window.localStorage.setItem(key, JSON.stringify(value));
  //   }, [key, value]);
  //   return [value, setValue];
  // }


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 foot">
          <footer className="page-footer">


            <ScrollUpButton style={{ backgroundColor: "#4AA69F", height: "38px", width: "38px" }} />

            <div className="footer">

              {/* <AiOutlineLike className="like-icn" onClick={() => setCount(count + 1)} /> <span className="count"> Likes: {count}</span> */}

              <div className="row">
                <div className="col-md-3">

                  <FacebookProvider appId="221365929122472">
                    <Like href="http://www.codingwithanya.com/.com" layout="button_count" />
                  </FacebookProvider>
                  </div>
                  <div className="col-md-3 offset-sm-2">
                  <span className="copy"> Anna Panas ©2020</span>
                </div>
              </div>
            </div>

          </footer>
        </div>
      </div>
    </div>
  );

}

export default Footer;
