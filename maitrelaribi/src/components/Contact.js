import React, { useState } from 'react';
import Maps from './Maps';
import './Contact.css';
import axios from 'axios';

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleTelChange = (e) => {
    setTel(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or submit the form data as needed
    axios.post('http://localhost:5800/api/sendmail',{
      subject:subject,
      name:name,
      lastName:lastName,
      tel:tel,
      email:email,
      message:message
    }).then((res)=>{
      if(res.status==='success'){
        
      }
    })
  }

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="subject">Sujet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={handleSubjectChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Prénom</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tel">Telephone</label>
            <input
              type="tel"
              id="tel"
              name="tel"
              value={tel}
              onChange={handleTelChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={message}
              onChange={handleMessageChange}
              required
            ></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>

      {/* You can embed your Google Maps iframe code here */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d399.3386346573654!2d10.165726780597065!3d36.801525055870975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd338b8d6f60fd%3A0x6ab7edee0c5e0092!2sminist%C3%A8re%20de%20la%20justice%2C%20Bd%20Bab%20Benet%2C%20Tunis!5e0!3m2!1sfr!2stn!4v1705677295319!5m2!1sfr!2stn"
        width="890"
        height="600"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contact;
