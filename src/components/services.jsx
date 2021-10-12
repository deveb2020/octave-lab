import React from 'react';
import '../style/services.css';
import dent1 from '../assets/images/dent_001.png';

const Services = () => {
  return (
    <div className="services_wrapper" id="services">
      <img src={dent1} alt="tooth" />
      <h1>Nos services</h1>
      <div className="cards_wrapper">
        <div class="hexagon_activity Conjointe">
          <div className="card_title">Conjointe</div>
        </div>
        <div class="hexagon_activity Adjointe">
          <div className="card_title">Adjointe</div>
        </div>
        <div class="hexagon_activity Implontologie">
          <div className="card_title">Implontologie</div>
        </div>
        <div class="hexagon_activity CFAO">
          <div className="card_title">CFAO</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
