import React from 'react';
import About from '../components/About';
import CareerHelp from '../components/Chatai';
import Counts from '../components/Counts';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Hero';

const MainPage = () => {
  return (
    <div>
        <Navbar />
      <HeroSection />
      <About />
      {/* <Counts /> */}
      <Services />
      <Features />
      <Footer />
    </div>
  );
};

export default MainPage;
