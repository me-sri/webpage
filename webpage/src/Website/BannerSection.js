import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import backgroundImg from '../images/slider-1.jpg';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function BannerSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="banner-section"
      style={{
        backgroundImage: `url(${backgroundImg})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '500px', 
        padding: '50px 0', 
        color: '#fff', 
      }}
    >
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={6} className='mt-5 text-center' data-aos="fade-down">
            <h1>Semrush Features</h1>
            <p className='fs-4 text-light'>Start solving your marketing challenges today with 55+ tools and reports on Semrush.</p>
            <Link to='/jobs'>
              <Button variant="primary" className="mr-3">
                Visit Jobs
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BannerSection;
