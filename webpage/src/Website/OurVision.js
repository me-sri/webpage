
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurVision = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-fluid bg-dark text-light p-5">
      <Container className="mt-5">
        <div>
          <Row>
            <Col md={6} data-aos="zoom-in">
              <h4>Something About Us</h4>
              <p>
                Maecenas sed diam eget risus varius blandit sit amet non magna.
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Nu lla vitae elit libero, a pharetra augue. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Duis mollis,
                est non commodo luctus, nisi erat porttitor ligula, eget lacinia
                odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
              </p>
              <p>
                {" "}
                vestibulum at eros. Integer posuere erat a ante venenatis
                dapibus posuere velit aliquet. Donec ullamcorper nulla non metus
                auctor fringilla. Donec sed odio dui. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Mae cenas sed diam eget risus
                varius blandit sit amet non magna. Integer posu. Nullam quis
                risus eget urna mollis ornare vel eu leo.
              </p>
            </Col>
            <Col md={6} data-aos="zoom-in">
              <h3> Our Vision</h3>
              <p>
                Maecenas sed diam eget risus varius blandit sit amet non magna.
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Nu lla vitae elit libero.
              </p>

              <div>
                <p>
                  <FaCheck /> Porta Condimentum Ultricies Purus Sit
                </p>
                <p>
                  <FaCheck /> Maecenas sed diam eget risus varius blandit sit
                  amet non magna.
                </p>
                <p>
                  <FaCheck /> Vestibulum id ligula porta felis euismod semper.
                </p>
                <p>
                  <FaCheck /> Integer posuere erat a ante venenatis dapibus
                  posuere velit
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default OurVision;
