// src/landingpage/Baner.js
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Baner.css';

function Baner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100 banner-image" src="/images/Banner1.jpg" alt="First Slide" />
        <Carousel.Caption>
          <h3>Welcome to IT Department</h3>
          <p>Your success starts here!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 banner-image" src="/images/Banner1.jpg" alt="Second Slide" />
        <Carousel.Caption>
          <h3>Empowering Innovation</h3>
          <p>Explore, Innovate, Succeed.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Baner;