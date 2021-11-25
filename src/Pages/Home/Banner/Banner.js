import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../../images/banner/banner1.png.jpg';
import Banner2 from '../../../images/banner/banner2.png.png';
import Banner3 from '../../../images/banner/banner3.png.jpg';
import Banner4 from '../../../images/banner/banner4.png.jpg';
import Banner5 from '../../../images/banner/City Tour.png';
import Banner6 from '../../../images/banner/Tours-and-Travel.jpg';


const Banner = () => {
    return (
        <>
            <Carousel variant="primary">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Banner1}
      alt="Tour"
    />
    <Carousel.Caption>
      <h5>Tour Tour Tour</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Tour Tour Tour</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Banner3}
      alt="Tour"
    />
    <Carousel.Caption>
      <h5>Tour Tour Tour</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Banner4}
      alt="Tour"
    />
    <Carousel.Caption>
      <h5>Tour Tour Tour</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Banner5}
      alt="Tour"
    />
    <Carousel.Caption>
      <h5>Tour Tour Tour</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Banner6}
      alt="Tour"
    />
    <Carousel.Caption>
      <h5>Tour Tour Tour</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;