import React from 'react';
import Navigation from 'pages/home/navigation';
import CarouselComponent from "pages/home/carousel"

const HomePage = () => {
    return (
        <div>
            <Navigation/>
            <CarouselComponent/>
        </div>
    );
};

export default HomePage;