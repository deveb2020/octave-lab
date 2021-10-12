import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { TelephoneFill, Building } from 'react-bootstrap-icons';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9zcem4f',
        'template_5sp9vwr',
        form.current,
        'user_KusGcFFwxqBs85UGeRUpN'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form className="contact_us" ref={form} onSubmit={sendEmail}>
        <div className="adresse_wrapper">
          <Building size={20} />
          <span> 34 av leon blum, 33110 le bouscat</span>
        </div>
        <div className="phone_wrapper">
          <h1>Appeler nous</h1>
          <TelephoneFill size={20} />
          <span> 06 21 22 23 24</span>
          <h1 className="write_us">Ou ecrivez nous</h1>
        </div>
        <br />
        <br />
        <input type="text" name="user_name" placeholder="Name" />
        <br />
        <br />
        <input type="email" name="user_email" placeholder="Email" />
        <br />
        <br />
        <textarea name="message" placeholder="Message" />
        <br />
        <br />
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default ContactForm;
