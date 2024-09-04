import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // If you are using Bootstrap



const HeroSection = () => {
  return (
    <section id="hero" className="d-flex align-items-center" style={{ marginTop: '80px' }}>
      <div className="container-fluid" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h2>
              "Empowering futures with personalized guidance and expert solutions for your career journey. Your success is our mission."
            </h2>
            <h3>Find your career opportunities with</h3>
            <h1>CareerHelp</h1>
          </div>
          <div className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="150">
            <img src="hero.jpg" className="img-fluid animated" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
