import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="terrinary">
        <div className="about-us-wrapper">
        	<p>test</p>
        </div>
        <div className="terrinary-menu-container-wrap">
          <div className="first-column list-content">
            <p>Company</p>
            <ul className="menu-wrapper">
              <li className = "menu-item"><a href="">About Us</a></li>
              <li className = "menu-item"><a href="">Our Services</a></li>
              <li className = "menu-item"><a href="">The Team</a></li>
              <li className = "menu-item"><a href="">Investor</a></li>
            </ul>
          </div>
          <div className="second-column list-content">
          <p>Resources</p>
            <ul className="menu-wrapper ">
              <li className = "menu-item"><a href="">News & Insight</a></li>
              <li className = "menu-item"><a href="">Documentation</a></li>
              <li className = "menu-item"><a href="">Download</a></li>
              <li className = "menu-item"><a href="">Knowledgebase</a></li>
            </ul>
          </div>
          <div className="third-column list-content">
          <p>Support</p>
            <ul className="menu-wrapper">
              <li className = "menu-item"><a href="">Contact Us</a></li>
              <li className = "menu-item"><a href="">FAQ</a></li>
              <li className = "menu-item"><a href="">LiveChat</a></li>
            </ul>
          </div>
          <div className="social-column list-content">
          <p>Social</p>
            <ul className="menu-wrapper">
              <li className = "menu-item"><a href="">Facebook</a></li>
              <li className = "menu-item"><a href="">Twitter</a></li>
              <li className = "menu-item"><a href="">Dribble</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-menu">
        <div className="copyright"><p>Copyright © 2018 <a href="">Grada</a>. All rights reserved.</p></div>
        <div className="footer-menu-wrap">
          <a href=""> Terms & Conditions</a>
          <a href="">Privacy Policy</a>
        </div>

      </div>
    </div>
    )
}

export default Footer;
