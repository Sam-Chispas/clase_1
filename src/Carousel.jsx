import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const programs = [
    { title: 'Programa 1', description: 'Descripción breve del programa 1.' },
    { title: 'Programa 2', description: 'Descripción breve del programa 2.' },
    { title: 'Programa 3', description: 'Descripción breve del programa 3.' },
    { title: 'Programa 4', description: 'Descripción breve del programa 4.' },
    { title: 'Programa 5', description: 'Descripción breve del programa 5.' },
  ];

  return (
    <section className="carousel-section">
      <h2>Programas</h2>
      <Slider {...settings}>
        {programs.map((program, index) => (
          <div key={index} className="program-card">
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;