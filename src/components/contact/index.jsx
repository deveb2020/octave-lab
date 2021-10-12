import React from 'react';
import 'style/contact.css';
import ContactForm from './form';
import GoogleMaps from '../contact/maps';

const ContactUs = () => {
  return (
    <div className="contact_wrapper">
      <div className="google_map">
        <GoogleMaps />
      </div>
      <div className="contact_form">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
