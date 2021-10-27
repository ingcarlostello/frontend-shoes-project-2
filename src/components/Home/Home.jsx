import React from 'react';

// @Components
import Colecciones from '../Colecciones/Colecciones';
import HeroSection from '../HeroSection/HeroSection';
// import ToastNotification from '../ToastNotification/ToastNotification'

const Home = () => {
    return (
      <>
        <HeroSection />
        <Colecciones />      
        {/* <ToastNotification /> */}
      </>
    );
};

export default Home;