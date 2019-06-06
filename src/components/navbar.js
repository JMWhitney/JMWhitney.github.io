import React from 'react';
import Logo from './logo';
import { Link } from "gatsby";

class NavBar extends React.Component {

  componentDidMount() {
    this.setState(() => {
      return {links: document.getElementById("links")};
    })
  }

  highlight = (event) => {
    // Clear previous effect
    this.state.links.childNodes.forEach((element) => {
      if(element.className === "active") element.className = "";
    })
  
    //Set effect on target
    event.target.parentElement.className = "active";
  }

  render() { 
    return ( 
      
      <div id="nav-wrapper">

        <nav id="navbar">

          <Logo />

          <div id="contact-icons">

            <a href="https://github.com/JMWhitney">
              <i className="fab fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/justin-whitney-7b7796172/">
              <i className="fab fa-linkedin-in"></i>
            </a>

          </div>
        
          <div id="links">

            <Link onClick={ this.highlight } className="active" to="/">
              <i className="fas fa-home"></i>
            </Link>

            <Link onClick={ this.highlight } to="/skills">
              <i className="fas fa-toolbox"></i>
            </Link>

            <Link onClick={ this.highlight } to="/portfolio">
              <i className="fas fa-image"></i>
            </Link>

            <Link onClick={ this.highlight } to="/contact">
              <i className="fas fa-envelope"></i>
            </Link>

          </div>
        
        </nav>

        <div className="burger-wrapper">
          <input className="burger-check" id="burger-check" type="checkbox"></input>
          <label htmlFor="burger-check" className="burger"></label>
        </div>
        
      </div>
    );
  }
}

export default NavBar;