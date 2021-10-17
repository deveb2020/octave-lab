import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { TelephoneFill } from 'react-bootstrap-icons';

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
    <div className="form_wrapper">
      <form className="contact_us" ref={form} onSubmit={sendEmail}>
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
        <input className="send_button" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
