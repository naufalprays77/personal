import React, { Component } from 'react';
import { datacertificate } from '../Data';
import Slider from 'react-slick';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      speed: 500,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const dataSort = [...datacertificate].sort((a, b) => b.id - a.id);

    return (
      <div>
        <Slider {...settings}>
          {dataSort.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.image} className="p-3 mx-auto md:h-[280px] h-[200px]" alt="img-certificate" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
