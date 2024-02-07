import React, { useState } from 'react';
import Maps from './Maps';
import './Contact.css';
import axios from 'axios';

const Contact = ({ selectedLanguage }) => {
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
    axios.post('http://134.209.228.166/api/sendmail', {
      subject: subject,
      name: name,
      lastName: lastName,
      tel: tel,
      email: email,
      message: message
    }).then((res) => {
      if (res.status === 'success') {
        // Handle success if needed
      }
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>{selectedLanguage === 'ar' ? 'اتصل بنا' : 'Contact Us'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="subject">{selectedLanguage === 'ar' ? 'الموضوع' : 'Subject'}</label>
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
            <label htmlFor="name">{selectedLanguage === 'ar' ? 'الاسم' : 'Name'}</label>
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
            <label htmlFor="lastName">{selectedLanguage === 'ar' ? 'اللقب' : 'Last Name'}</label>
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
            <label htmlFor="tel">{selectedLanguage === 'ar' ? 'الهاتف' : 'Telephone'}</label>
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
            <label htmlFor="email">{selectedLanguage === 'ar' ? 'البريد الإلكتروني' : 'Email'}</label>
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
            <label htmlFor="message">{selectedLanguage === 'ar' ? 'الرسالة' : 'Message'}</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={message}
              onChange={handleMessageChange}
              required
            ></textarea>
          </div>
          <button type="submit">{selectedLanguage === 'ar' ? 'إرسال' : 'Send'}</button>
        </form>
      </div>

      {/* You can embed your Google Maps iframe code here */}
      <Maps />
    </div>
  );
};

export default Contact;
