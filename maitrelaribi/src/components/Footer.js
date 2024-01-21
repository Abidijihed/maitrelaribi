// Footer.js

import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-contact">
          <p><FaPhone /> Phone: +216 71 562 938</p>
          <p><FaEnvelope /> Email: <a href="mailto:your@email.com">your@email.com</a></p>
          <p><FaLinkedin /> LinkedIn: <a href="#" target="_blank" rel="noopener noreferrer">Your LinkedIn</a></p>
        </div>
        <div className="footer-resources">
          <div>
            <h3>Links</h3>
            <ul>
              <li><a href="https://avocat.org.tn/fr/">ONAT</a></li>
              <li><a href="#">Resource 2</a></li>
              <li><a href="http://www.tunisieindustrie.nat.tn/fr/home.asp">APII</a></li>
              <li><a href="#">Resource 4</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><a href="#">Resource 5</a></li>
              <li><a href="#">Resource 6</a></li>
              <li><a href="#">Resource 7</a></li>
              <li><a href="#">Resource 8</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Noja Team. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
