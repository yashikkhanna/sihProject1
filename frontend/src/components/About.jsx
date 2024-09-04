import React from 'react';
import Tabs from './Tabs'
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'
const About = () => {
  return (
    
    <section id="about" className="about" style={{ marginTop: '80px' }}>
      
      <Container >
        <Row className="align-items-center">
          <Col lg={6} className="order-1 order-lg-2 mb-4 mb-lg-0">
            <img src="pic.jpg" className="img-fluid" alt="About Us" />
          </Col>
          <Col lg={6} className="order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h3>"Navigating Your Path to Future Success Together"</h3>
            <p className="fst-italic">
              CareerHelp is a dedicated team of career counselors, educators,
              and industry professionals who are passionate about helping
              students, like you, unlock their full potential. With years of
              experience in the field of education and career development, we
              have assisted countless individuals in making informed decisions
              about their futures.
            </p>
            
            <Button variant="link" className="read-more">
              Read More <FaArrowRight />
            </Button>
          </Col>
        </Row>
      </Container>
      <Tabs/>
 
    </section>
    
  );
};

export default About;
