import React from 'react';
import Slider from 'react-slick';
import "../Components/home.css"

const Home = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className='laptopVerde'>
      </div>
      <div className='laptopRosa'>
      </div>
      {/* Agrega más divs con imágenes según sea necesario */}
    </Slider>
  );
};

export default Home;