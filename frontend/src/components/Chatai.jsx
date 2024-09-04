import React from 'react';


const CareerHelp = () => {
  return (
    <div>
      <header style={styles.header}>
        <h1>Welcome to CareerHelp</h1>
        <p>
          Here the future of career guidance meets artificial intelligence.
          We're here to help you navigate the world of career choices and find
          the path that's uniquely suited to your skills, passions, and
          aspirations.
        </p>
      </header>
      <div style={styles.container}>
        <h2>Unlock Your Full Potential</h2>
        <p>
          Discover the perfect career for you with the power of AI-driven
          guidance. Our personalized approach helps you find your passion and
          reach your goals.
        </p>
        <ul>
          <li>Personalized Career Assessments</li>
          <li>Skill and Interest Analysis</li>
          <li>Industry Insights and Trends</li>
        </ul>
      </div>
      <div style={styles.cta}>
        <h2>Ready to Begin Your Journey with CareerHelp?</h2>
        <p>Let's embark on this exciting adventure together.</p>
        <p>
          Our AI system processes your assessment data, considering thousands of
          career options and their future prospects.
        </p>
        {/* <a href="#" style={styles.ctaButton}>Get Started</a> */}
      </div>
      {/* <footer style={styles.footer}>
        &copy; 2023 Career Counselor AI
      </footer> */}
      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
      <script
        src="https://mediafiles.botpress.cloud/707e069d-2b9f-4377-b252-1e08596617cb/webchat/config.js"
        defer
      ></script>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#0073e6',
    color: '#fff',
    padding: '40px',
    textAlign: 'center',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  cta: {
    backgroundColor: '#0073e6',
    color: '#fff',
    padding: '40px',
    textAlign: 'center',
    height: '200px',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
  },
  ctaButton: {
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#005bb5',
    padding: '15px 30px',
    borderRadius: '5px',
  },
};

export default CareerHelp;
