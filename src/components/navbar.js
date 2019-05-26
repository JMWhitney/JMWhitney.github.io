import React from 'react';

const NavBar = () => ( 
  <nav id="navbar">
    <div id="logo">
      <noscript>
        <img src="../images/logo.png" alt="logo"></img>
      </noscript>
    </div>
    <div id="contact">
      <a href="https://github.com/JMWhitney">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/justin-whitney-7b7796172/">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
    
    <div id="links">
      <a className="active" href="/#">
        <div id="triangle"></div>
        <i className="fas fa-home"></i>
      </a>
      <a href="/#">
        <div id="triangle"></div>
        <i className="fas fa-toolbox"></i>
      </a>
      <a href="/#">
        <div id="triangle"></div>
        <i className="fas fa-address-card"></i>
      </a>
      <a href="/#">
        <div id="triangle"></div>
        <i className="fas fa-envelope"></i>
      </a>
    </div>
    
    <div id="menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    
  </nav>
 );

export default NavBar;