import React from 'react';
import init from "../scripts/logo.js";

class Logo extends React.Component {

  componentDidMount() {
    init();
  }

  render() { 
    return ( 
      <div id="logo">
        <noscript>
          <img src="../images/logo.png" alt="logo"></img>
        </noscript>
      </div>
     );
  }
}
 
export default Logo;