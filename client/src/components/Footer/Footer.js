import React from 'react'
import './Footer.css'
import mySvg from './logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="terrinary">
        <div className="about-us-wrapper">
          <img src={mySvg} style={{ 'maxWidth': 40, 'margin': '1em'}}/>
        	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus egestas elit, at eleifend elit ornare ut.</p>
        </div>
        <div className="terrinary-menu-container-wrap">
          <div className="first-column list-content">
            <p>Company</p>
            <ul className="menu-wrapper">
              <li className = "menu-item"><Link to="/">About Us</Link></li>
              <li className = "menu-item"><Link to="/">Our Services</Link></li>
              <li className = "menu-item"><Link to="/">The Team</Link></li>
              <li className = "menu-item"><Link to="/">Investor</Link></li>
            </ul>
          </div>
          <div className="second-column list-content">
          <p>Resources</p>
            <ul className="menu-wrapper ">
              <li className = "menu-item"><Link to="/">News & Insight</Link></li>
              <li className = "menu-item"><Link to="/">Documentation</Link></li>
              <li className = "menu-item"><Link to="/">Download</Link></li>
              <li className = "menu-item"><Link to="/">Knowledgebase</Link></li>
            </ul>
          </div>
          <div className="third-column list-content">
          <p>Support</p>
            <ul className="menu-wrapper">
              <li className = "menu-item"><Link to="/">Contact Us</Link></li>
              <li className = "menu-item"><Link to="/">FAQ</Link></li>
              <li className = "menu-item"><Link to="/">LiveChat</Link></li>
            </ul>
          </div>
          <div className="social-column list-content">
          <p>Social</p>
            <ul className="menu-wrapper">
              <li className = "menu-item"><a href="http://www.twitter.com/meetup"><i className="fab fa-twitter" ></i> Twitter</a></li>
              <li className = "menu-item"><a href="http://www.facebook.com/meetup"><i className="fab fa-facebook-square" ></i> Facebook</a></li>
              <li className = "menu-item"><a href="http://www.dribble.com"><i className="fas fa-basketball-ball"></i> Dribble</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-menu">
        <div className="copyright"><p>Copyright © 2018 <Link to="/">Grada</Link>. All rights reserved.</p></div>
        <div className="footer-menu-wrap">
          <Link to="/"> Terms & Conditions</Link>
          <Link to="/">Privacy Policy</Link>
        </div>

      </div>
    </div>
    )
}

export default Footer;
