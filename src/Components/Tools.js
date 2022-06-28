import { dataTools } from '../Data';
import React, { Component } from 'react';
import Slider from 'react-slick';

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      infinite: true,
      cssEase: 'linear',
      pauseOnHover: true,
      prevArrow: <CustomArrow />,
      nextArrow: <CustomArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            infinite: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            infinite: true,
          },
        },
      ],
    };
    function CustomArrow() {
      return <div className="invisible" />;
    }

    return (
      <div className="w-[80%] mx-auto md:py-10 py-0">
        <Slider {...settings}>
          {dataTools.map((item, index) => {
            return (
              <div className="flex items-center justify-center " key={index}>
                <img src={item.tools} className="w-[100px] h-[100px] mx-auto p-4" alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
