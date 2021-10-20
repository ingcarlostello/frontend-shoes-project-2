import React from 'react';

// @Components
import Colecciones from '../Colecciones/Colecciones';
import HeroSection from '../HeroSection/HeroSection';
import Navbar from '../Navbar/Navbar';


const Home = () => {
    return (
      <>
        <Navbar />
        <HeroSection />
        <Colecciones />
     
      </>
    );
};

export default Home;