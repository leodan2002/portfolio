import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./ContactPage.css" 
import { FaPaperPlane} from "react-icons/fa";

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
      <h1 className="contact-title">Send Email!</h1>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="contact-label">
          <label className="contact-label-title">Your Name</label>
          <input className="contact-input" type="text" name="name" placeholder="Full Name"/>
        </div>
        <div className="contact-label">
          <label className="contact-label-title">Your Email</label>
          <input className="contact-input" type="email" name="email" placeholder="email@address.com"/>
        </div>
        <div className="contact-label">
          <label className="contact-label-title">Your Message</label>
          <textarea className="contact-message" name="message" placeholder="enter text..."
          />
        </div>  
        <input className="contact-send-button" type="submit" value= "Submit" />
    </form>
    </div>
  );
};

export default ContactPage;