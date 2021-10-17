import React from 'react';

const GoogleMaps = () => {
  return (
    <div className="google_maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.798723913595!2d-0.6051770840912966!3d44.86639217909835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d7e04230c7b7%3A0x77a8867a8f782e02!2s34%20Av.%20L%C3%A9on%20Blum%2C%2033110%20Le%20Bouscat!5e0!3m2!1sen!2sfr!4v1634145841838!5m2!1sen!2sfr"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMaps;
