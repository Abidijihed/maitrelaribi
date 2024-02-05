import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "./logo.png"

const Navbar = ({ handleLanguageChange, selectedLanguage }) => {
  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}><a href='/'><img src={logo} style={{ width: "80px", height: "60px" }} alt="Logo" /></a></div>
      <p><FaPhone /> {selectedLanguage === 'ar' ? 'الهاتف:' : 'Phone:'} +216 71 562 938</p>
      <p><FaEnvelope /> {selectedLanguage === 'ar' ? 'البريد الإلكتروني:' : 'Email:'} maitrelaaribi@gmail.com</p>
      <ul style={navListStyle}>
        <div>
          <select
            id="languageDropdown"
            value={selectedLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            <option value="ar">العربية</option>
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </div>
        <li style={navItemStyle}><Link to="/"><span style={{ color: "white" }}>{selectedLanguage === 'ar' ? 'الرئيسية' : (selectedLanguage === 'fr' ? 'Accueil' : 'Home')}</span></Link></li>
        <li style={navItemStyle}><Link to="/Actualités"><span style={{ color: "white" }}>{selectedLanguage === 'ar' ? 'أخبار' : (selectedLanguage === 'fr' ? 'Actualités' : 'News')}</span></Link></li>
        <li style={navItemStyle}><Link to="/about"><span style={{ color: "white" }}>{selectedLanguage === 'ar' ? 'من نحن؟' : (selectedLanguage === 'fr' ? 'À propos' : 'About Us')}</span></Link></li>
        <li style={navItemStyle}><Link to="/services"><span style={{ color: "white" }}>{selectedLanguage === 'ar' ? 'الخدمات' : (selectedLanguage === 'fr' ? 'Service' : 'Services')}</span></Link></li>
        <li style={navItemStyle}><Link to="/contact"><span style={{ color: "white" }}>{selectedLanguage === 'ar' ? 'اتصل' : (selectedLanguage === 'fr' ? 'Contact' : 'Contact')}</span></Link></li>
      </ul>
    </nav>
  );
};
// Styles
const navbarStyle = {
  backgroundColor: '#001f3f', // Dark blue or navy
  color: '#fff', // White text
  padding: '15px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#ffd700', // Gold accent
};


const navListStyle = {
  listStyleType: 'none',
  display: 'flex',
};

const navItemStyle = {
  margin: '0 15px',
  cursor: 'pointer',
};

export default Navbar;
