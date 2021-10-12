import React from 'react';
import 'style/contact.css';
import ContactForm from './form';
import GoogleMaps from '../contact/maps';

const ContactUs = () => {
  return (
    <div className="contact_wrapper" id="contact">
      <GoogleMaps />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
