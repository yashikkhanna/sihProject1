import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Features = () => {
  return (
    <section id="features" className="features py-5">
      <Container>
        <div className="section-title text-center mb-4">
          <h2>Features</h2>
          <p>
            A well-rounded career counseling website, such as CareerHelp, offers a host of features and resources to empower individuals in making informed decisions about their professional journey.
          </p>
        </div>

        <Row>
          <Col lg={6} className="d-flex flex-column align-items-lg-center">
            <Card className="mb-4" data-aos="fade-up" data-aos-delay="100">
              <Card.Body>
                <Card.Title>
                  <i className="bx bx-receipt"></i> Comprehensive Career Assessments
                </Card.Title>
                <Card.Text>
                  Our website provides a range of scientifically validated aptitude and personality assessments. These tools help individuals understand their strengths, weaknesses, and natural inclinations, forming a solid foundation for career exploration.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <Card.Body>
                <Card.Title>
                  <i className="bx bx-cube-alt"></i> Personalized Counseling Services
                </Card.Title>
                <Card.Text>
                  Career counseling is not one-size-fits-all. Our platform offers personalized one-on-one counseling sessions with experienced career advisors. This individualized attention ensures tailored guidance to meet the unique needs of each user.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="mb-4" data-aos="fade-up" data-aos-delay="300">
              <Card.Body>
                <Card.Title>
                  <i className="bx bx-images"></i> Extensive Career Information
                </Card.Title>
                <Card.Text>
                  CareerHelp offers an extensive database of information on various career paths, industries, and educational institutions. Users can explore detailed profiles, job market trends, salary information, and educational requirements for different professions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="d-flex align-items-center justify-content-center">
            <img src="features.svg" alt="Features" className="img-fluid" data-aos="zoom-in" data-aos-delay="100" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
