import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import service_one from '../images/service-1.jpg';
import service_two from '../images/service-2.jpg';
import service_three from '../images/service-3.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

function ContentWithImage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        <Col md={4} data-aos="zoom-in">
          <div className="content">
            <img className="img-fluid" src={service_one} alt="Service One" />
            <h2>Egestas Aenean Condimentum</h2>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean
              lacinia bibendum nulla sed consectetur.
            </p>
            <a href="#" className="read-more" style={{ textDecoration: "none" }}>
              Read More <FaAngleRight />
            </a>
          </div>
        </Col>
        <Col md={4} data-aos="zoom-in" data-aos-delay="100">
          <div className="content">
            <img className="img-fluid" src={service_two} alt="Service Two" />
            <h2>Egestas Mattis Ipsum</h2>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean
              lacinia bibendum nulla sed consectetur.
            </p>
            <a href="#" className="read-more" style={{ textDecoration: "none" }}>
              Read More <FaAngleRight />
            </a>
          </div>
        </Col>
        <Col md={4} data-aos="zoom-in" data-aos-delay="200">
          <div className="content">
            <img className="img-fluid" src={service_three} alt="Service Three" />
            <h2>Egestas Mattis Ipsum</h2>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean
              lacinia bibendum nulla sed consectetur.
            </p>
            <a href="#" className="read-more" style={{ textDecoration: "none" }}>
              Read More <FaAngleRight />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContentWithImage;
