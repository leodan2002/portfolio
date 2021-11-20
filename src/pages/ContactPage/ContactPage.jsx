import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./ContactPage.css" 

const serviceID = 'service_lxqyydi';
const templatID = 'template_r7i66cc';
const userID = 'user_yA24wmZRjIAjbetMFgNXB';

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    
    

    emailjs.sendForm(serviceID, templatID, form.current, userID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form-wrapper">
      <h1 className="contact-title">Contact Page</h1>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="contact-label">
          <label className="contact-label-title">Name</label>
          <input className="contact-input" type="text" name="name" />
        </div>
        <div className="contact-label">
          <label className="contact-label-title">Email</label>
          <input className="contact-input" type="email" name="email" />
        </div>
        <div className="contact-label">
          <label className="contact-label-title">Message</label>
          <textarea className="contact-message" name="message" />
        </div>  
      <input className="contact-send-button" type="submit" value="Send" />
    </form>
    </div>
  );
};

export default ContactPage;