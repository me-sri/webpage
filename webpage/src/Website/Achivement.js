import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import userOne from '../images/user-one.avif';
import userTwo from '../images/user-two.avif';
import userThree from '../images/user-three.avif';
import userFour from '../images/user-four.webp';
import userFive from '../images/user-five.webp';
import userSix from '../images/user-six.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContentSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container className='mt-5'>
      {/* First Row */}
      <Container className="py-5">
        <Row className="align-items-center">
          {/* First Column */}
          <Col md={6} data-aos="zoom-in">
            <Row>
              <Col xs={4}>
                <img
                  src={userOne}
                  alt="Customer 1"
                  className="img-fluid"
                />
              </Col>
              <Col xs={4}>
                <img
                  src={userTwo}
                  alt="Customer 2"
                  className="img-fluid"
                />
              </Col>
              <Col xs={4}>
                <img
                  src={userThree}
                  alt="Customer 3"
                  className="img-fluid"
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs={4}>
                <img
                  src={userFour}
                  alt="Customer 4"
                  className="img-fluid"
                />
              </Col>
              <Col xs={4}>
                <img
                  src={userFive}
                  alt="Customer 5"
                  className="img-fluid"
                />
              </Col>
              <Col xs={4}>
                <img
                  src={userSix}
                  alt="Customer 6"
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Col>

          {/* Second Column */}
          <Col md={6}>
            <h2 data-aos="zoom-in">1000+ Customer Satisfaction</h2>
            <p data-aos="zoom-in">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <p data-aos="zoom-in">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="py-5">
        <Row>
          <Col md={6} className="mb-4" data-aos="zoom-in">
            <Card className="shadow">
              <Card.Body>
                <h5 className="card-title">Title 1</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4" data-aos="zoom-in">
            <Card className="shadow">
              <Card.Body>
                <h5 className="card-title">Title 2</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4" data-aos="zoom-in">
            <Card className="shadow">
              <Card.Body>
                <h5 className="card-title">Title 3</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4" data-aos="zoom-in">
            <Card className="shadow">
              <Card.Body>
                <h5 className="card-title">Title 4</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4" data-aos="zoom-in">
            <Card className="shadow">
              <Card.Body>
                <h5 className="card-title">Title 5</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4" data-aos="zoom-in">
            <Card className="shadow">
              <Card.Body>
                <h5 className="card-title">Title 6</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContentSection;
