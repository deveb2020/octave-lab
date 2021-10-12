import React from 'react';
import Navigation from 'components/navigation';
import CarouselComponent from 'components/carousel';
import ContactUs from 'components/contact/index';
import Welcome from 'components/welcome';
import Services from './services';
import Realisations from './realisations';
import Footer from './footer';

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <CarouselComponent />
      <Welcome />
      <Services />
      <Realisations />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomePage;
