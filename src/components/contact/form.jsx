import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

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
