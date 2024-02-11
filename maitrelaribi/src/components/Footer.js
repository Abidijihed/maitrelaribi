// Footer.js
import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className='row'>
      <div className='col-4'>
      <div className="footer-content">
        <div className="footer-contact" style={{margin:"10px"}}>
          <p className='pfouter'><FaPhone /> Phone: +216 71 562 938</p>
          <p className='pfouter'><FaPhone /> Phone: +216 98 351 049</p>
          <p className='pfouter'><FaEnvelope /> Email: <a href="maitrelaaribi@gmail.com">maitrelaaribi@gmail.com</a></p>
          <p className='pfouter'><FaLinkedin /> LinkedIn: <a href="https://www.linkedin.com/in/llf-laaribi-law-firm-4ba749172/" target="_blank" rel="noopener noreferrer">laaribi-law-firm</a></p>
        </div>
        </div>
        </div>
        <div className='col-8' id='phonefooter'>
        <div className="footer-resources">
          <div className='row' >
            <div className='col-12'><h3 >Links</h3></div>
            
            <div className='col-6' >
            <ul>
              <li><a className="arrow-before" href="https://avocat.org.tn/">Ordres National des Avocats de Tunisie</a></li>
              <li><a className="arrow-before" href="https://www.iort.gov.tn/WD120AWP/WD120Awp.exe/CONNECT/SITEIORT">Journal Officiel de la République Tunisienne</a></li>
              <li><a className="arrow-before" href="https://www.tunisieindustrie.nat.tn/fr/doc.asp?docid=753&mcat=22&mrub=178">Agence de Promotion de l'Industrie et de l'Innovation</a></li>
              <li><a className="arrow-before" href="https://www.infosjuridiques.com.tn/">Infos Juridiques - La Revue du Droit</a></li>
            </ul>
            </div>
          
     
          <div className='col-6'>
            <ul>
              <li><a className="arrow-before" href="https://www.cepex.nat.tn/content/accueil">Centre de Promotion des Exportations</a></li>
              <li><a className="arrow-before" href="https://www.apia.com.tn/">Agence de Promotion des Investissements Agricoles</a></li>
              <li><a className="arrow-before" href="https://www.aija.org/">Association Internationale des Jeunes Avocats (AIJA)</a></li>
              <li><a className="arrow-before" href="https://www.wipo.int/portal/fr/">organisation mondial de la propriété intellectuelle</a></li>
            </ul>
            </div>
        
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
