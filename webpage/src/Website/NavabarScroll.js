import React, { useState, useEffect } from 'react';
import { FaRocket } from 'react-icons/fa';

function RocketIcon() {
  const [showIcon, setShowIcon] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 500) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isDesktop = window.innerWidth > 768;

  return (
    <>
      {isDesktop && showIcon && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            background: "red ",
            padding : "10px",
            right: '20px',
            cursor: 'pointer',
          }}
          onClick={scrollToTop}
        >
          <FaRocket size={30} />
        </div>
      )}
    </>
  );
}

export default RocketIcon;
