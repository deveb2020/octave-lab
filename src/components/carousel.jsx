import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from 'assets/images/slider1.jpeg';
import slider2 from 'assets/images/slider2.jpeg';
import slider3 from 'assets/images/slider3.jpeg';
import 'style/carousel.css';

const CarouselComponent = () => {
  return (
    <div className="carousel_wrapper" id="homepage">
      <Carousel fade>
        <Carousel.Item interval={3500}>
          <img
            className="d-block w-100 image_height"
            src={slider3}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img
            className="d-block w-100 image_height"
            src={slider2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img
            className="d-block w-100 image_height"
            src={slider1}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="overlay"></div>
      <div class="hexagon">
        <div class="hex-60"></div>
        <div class="hex0"></div>
        <div class="hex60"></div>
      </div>
      <div class="hexagon2">
        <div class="hex-60"></div>
        <div class="hex0"></div>
        <div class="hex60"></div>
      </div>
    </div>
  );
};

export default CarouselComponent;
