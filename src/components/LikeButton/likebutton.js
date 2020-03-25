import React, { Component} from 'react';
import { FacebookProvider, Share } from 'react-facebook';
 
export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <Share href="http://www.facebook.com">
          {({ handleClick, loading }) => (
            <button type="button" disabled={loading} onClick={handleClick}>Share</button>
          )}
        </Share>
      </FacebookProvider>
    );
  }
}