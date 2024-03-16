import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import './style.css'
function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col md={4} data-aos="zoom-in">
            <h5>Contact Us</h5>
            <p>Email: example@example.com</p>
            <p>Phone: +1234567890</p>
            <p>Address: 123 Street, City, Country</p>
          </Col>
          <Col md={4} data-aos="zoom-in" data-aos-delay="100">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com" className="footer-link">Facebook</a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="footer-link">Twitter</a>
              </li>
              <li>
                <a href="https://www.instagram.com" className="footer-link">Instagram</a>
              </li>
            </ul>
          </Col>
          <Col md={4} data-aos="zoom-in" data-aos-delay="200">
            <h5>About Us</h5>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac,
              vestibulum at eros.
            </p>
          </Col>
        </Row>
        <hr className="my-4" data-aos="zoom-in" data-aos-delay="300" />
        <Row>
          <Col
            md={12}
            className="text-center"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <p>
              &copy; {new Date().getFullYear()} Your Company Name. All Rights
              Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
