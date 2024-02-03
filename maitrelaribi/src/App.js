import './App.css';
import Navbar from './Navbar';
import React, { useEffect } from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home.js';
import DroitCivil from './services/DroitCivil.js';
import DroitDesAffaires from './services/DroitDesAffaires.js';
import DroitDesAssurances from './services/DroitDesAssurances.js'
import DroitImmobilier from './services/DroitImmobilier.js'
import DroitPénal from './services/DroitPénal.js'
// import PersonalInjuryLawPage from './PersonalInjuryLawPage';
import Flags from './services/Services.js'
import Presentation from './components/Presentation.js'
// import SocialMediaIcons from './components/SocialMediaIcons.js';
import Footer from './components/Footer.js';
import Contact from './components/Contact.js';
// import Maps from './components/Maps.js'
import Actualiter from './actualiter/Actualiter.js'
import { useSelector,useDispatch } from "react-redux";

import { get_product } from './redux/action/actionPost.js';
const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(get_product())
  },[dispatch])
  const data=useSelector((state)=>state.data)

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
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<Presentation/>} />
        <Route path="/services" element={<Flags/>} />
        <Route path="/Actualités" element={<Actualiter data={data}/>} />
    </Routes>
    {/* <Maps /> */}
    <Footer />
    </BrowserRouter>
  );
};

export default App;
