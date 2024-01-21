import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>Logo</div>
      <div style={searchContainerStyle}>
        <input style={searchInputStyle} type="text" placeholder="Search..." />
        <FaSearch style={searchIconStyle} />
      </div>
      <ul style={navListStyle}>
        <li style={navItemStyle}>Home</li>
        <li style={navItemStyle}>About</li>
        <li style={navItemStyle}>Services</li>
        <li style={navItemStyle}>Contact</li>
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

const searchContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const searchInputStyle = {
  padding: '8px',
  marginRight: '10px',
  border: 'none',
  borderRadius: '5px',
  fontSize: '1rem',
};

const searchIconStyle = {
  cursor: 'pointer',
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