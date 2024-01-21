import './App.css';
import Navbar from './Navbar';
import React from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home.js';
import DroitCivil from './services/DroitCivil.js';
import DroitDesAffaires from './services/DroitDesAffaires.js';
import DroitDesAssurances from './services/DroitDesAssurances.js'
import DroitImmobilier from './services/DroitImmobilier.js'
import DroitPénal from './services/DroitPénal.js'
// import PersonalInjuryLawPage from './PersonalInjuryLawPage';
// import Flags from './services/Services.js'
// import Presentation from './components/Presentation.js'
// import SocialMediaIcons from './components/SocialMediaIcons.js';
import Footer from './components/Footer.js';
// import Maps from './components/Maps.js'
const App = () => {
  return (
    
    <BrowserRouter>
      <Navbar />
      {/* <SocialMediaIcons />
      <Presentation />
      <Flags /> */}
    <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/DroitCivil" element={<DroitCivil/>} />
        <Route path="/DroitDesAffaires" element={<DroitDesAffaires/>} />
         <Route path="/DroitDesAssurances" element={<DroitDesAssurances/>} />
        <Route path="/DroitImmobilier" element={<DroitImmobilier/>} /> 
        <Route path="/DroitPénal" element={<DroitPénal/>} />
    </Routes>
    {/* <Maps /> */}
    <Footer />
    </BrowserRouter>
  );
};

export default App;
