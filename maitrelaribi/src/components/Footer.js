// Footer.js
import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-contact" style={{margin:"10px"}}>
          <p className='pfouter'><FaPhone /> Phone: +216 71 562 938</p>
          <p className='pfouter'><FaPhone /> Phone: +216 98 351 049</p>
          <p className='pfouter'><FaEnvelope /> Email: <a href="maitrelaaribi@gmail.com">maitrelaaribi@gmail.com</a></p>
          <p className='pfouter'><FaLinkedin /> LinkedIn: <a href="https://www.linkedin.com/in/llf-laaribi-law-firm-4ba749172/" target="_blank" rel="noopener noreferrer">laaribi-law-firm</a></p>
        </div>
        <div className="footer-resources">
          <div className='row'>
            <div className='col-12'><h3 >Links</h3></div>
            <div className='col-6'>
            <ul>
              <li><a href="https://avocat.org.tn/fr/">ONAT</a></li>
              <li><a href="/">Resource 2</a></li>
              <li><a href="http://www.tunisieindustrie.nat.tn/fr/home.asp">APII</a></li>
              <li><a href="/">Resource 4</a></li>
            </ul>
            </div>
          
     
          <div className='col-6'>
            <ul>
              <li><a href="https://www.apia.com.tn/">APIA</a></li>
              <li><a href="https://www.uianet.org/fr">UIA</a></li>
              <li><a href="https://www.aija.org/">AIJA</a></li>
              <li><a href="https://www.wipo.int/portal/fr/">organisation mondial de la propriété intellectuelle</a></li>
            </ul>
            </div>
        
        </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Maitre Laaribi. All rights reserved.<br></br>
        Powerd by Noja Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
