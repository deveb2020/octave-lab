import React from 'react';
import '../style/realisations.css';
import ImageGallery from 'react-image-gallery';
import dent2 from '../assets/images/dent_002.png';
import dent3 from '../assets/images/dent_003.png';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/'
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/'
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/'
  }
];

const Realisations = () => {
  return (
    <div className="realisations_wrapper" id="galerie">
      <h1>Nos realisations</h1>
      <img src={dent2} alt="tooth" className="left_tooth" />
      <img src={dent3} alt="tooth" className="right_tooth" />
      <ImageGallery items={images} />
    </div>
  );
};

export default Realisations;
