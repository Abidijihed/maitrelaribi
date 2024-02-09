import './App.css';
import Navbar from './Navbar';
import React, { useEffect, useState } from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home.js';
import DroitCivil from './services/DroitCivil.js';
import DroitDesAffaires from './services/DroitDesAffaires.js';
import DroitDesAssurances from './services/DroitDesAssurances.js'
import DroitImmobilier from './services/DroitImmobilier.js'
import DroitPénal from './services/DroitPénal.js'
import Flags from './services/Services.js'
import Presentation from './components/Presentation.js'
import Footer from './components/Footer.js';
import Contact from './components/Contact.js';
import Actualiter from './actualiter/Actualiter.js'
import { useSelector,useDispatch } from "react-redux";
import HonorairesPolitiqueComponent from './services/HonorairePolitique.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { get_product } from './redux/action/actionPost.js';
import Login from './components/Login.js';
const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(get_product())
  },[dispatch])
  const data=useSelector((state)=>state.data)
  const [selectedLanguage, setSelectedLanguage] = useState('fr'); // Default language: French

  const handleLanguageChange = (language) => {
    // Implement language change logic here
    setSelectedLanguage(language);
  };
  return (
    
    <BrowserRouter>
      <Navbar handleLanguageChange={handleLanguageChange} selectedLanguage={selectedLanguage}/>
    <Routes>
        <Route path="/"  element={<Home selectedLanguage={selectedLanguage}/>} />
        <Route path="/DroitCivil" element={<DroitCivil selectedLanguage={selectedLanguage}/>} />
        <Route path="/DroitDesAffaires" element={<DroitDesAffaires selectedLanguage={selectedLanguage}/>} />
         <Route path="/DroitDesAssurances" element={<DroitDesAssurances selectedLanguage={selectedLanguage}/>} />
        <Route path="/DroitImmobilier" element={<DroitImmobilier selectedLanguage={selectedLanguage}/>} /> 
        <Route path="/DroitPénal" element={<DroitPénal selectedLanguage={selectedLanguage}/>} />
        <Route path="/contact" element={<Contact selectedLanguage={selectedLanguage}/>} />
        <Route path="/about" element={<Presentation selectedLanguage={selectedLanguage}/>} />
        <Route path="/services" element={<Flags selectedLanguage={selectedLanguage}/>} />
        <Route path="/Actualités" element={<Actualiter data={data} selectedLanguage={selectedLanguage}/>} />
        <Route path="/login/admin" element={<Login/>} />
        <Route path="/honoraire" element={<HonorairesPolitiqueComponent selectedLanguage={selectedLanguage}/>} />


    </Routes>
    <Footer />
    </BrowserRouter>
  );
};

export default App;
