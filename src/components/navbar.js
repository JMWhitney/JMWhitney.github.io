import React from 'react';
import Logo from './logo';
import { Link } from "gatsby";

const NavBar = () => ( 
  <div id="nav-wrapper">

    <input className="burger-check" id="burger-check" type="checkbox"></input>
    <label htmlFor="burger-check" className="burger"></label>


    <nav id="navbar">

      <Logo />
      <div className="placeholder"></div>

      <div id="contact-icons">

        <a href="https://github.com/JMWhitney">
          <i className="fab fa-github"></i>
        </a>

        <a href="https://www.linkedin.com/in/justin-whitney-7b7796172/">
          <i className="fab fa-linkedin-in"></i>
        </a>

      </div>
    
      <div id="links">

        <Link className="active" to="/">
          <i className="fas fa-home"></i>
        </Link>

        <Link to="/skills">
          <i className="fas fa-toolbox"></i>
        </Link>

        <Link to="/portfolio">
          <i className="fas fa-image"></i>
        </Link>

        <Link to="/contact">
          <i className="fas fa-envelope"></i>
        </Link>

      </div>
    
    </nav>
    
    
  </div>
);

export default NavBar;