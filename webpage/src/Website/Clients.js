import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Row } from 'react-bootstrap';
import one from '../images/angrybuchi.webp'
import two from '../images/emperione-logo.webp'
import three from '../images/hvitality.webp'

import four from '../images/mayor-aguinaldo.webp'
import five from '../images/protostarter.webp'
import six from '../images/wsk.webp'
function TestimonialsSection() {
  const logos = [
    one,
    two,
    three,
    four,
    five,
    six
  ];


  const sliderRef = useRef(null);


  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000, // 1 second
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    slidesToShow: 4, // Adjust as needed
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
  
    sliderRef.current.slickPlay();
  }, []);

  return (
    <Container className='mt-5'>
<div className='text-center'>      <h2 className='text-danger'>Our Clients</h2>
      <p className='display-6'>Many companies trust in our quality</p></div>
      <Slider {...settings} ref={sliderRef}>
        {logos.map((logo, index) => (
          <div key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} className="img-fluid mx-auto d-block" style={{ maxHeight: '100px' }} />
          </div>
        ))}
      </Slider>
    </Container>
  );
}

export default TestimonialsSection;
