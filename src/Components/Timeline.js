import React, { Component } from 'react';
import Slider from 'react-slick';
import { dataJourney } from '../Data';

export default class Timeline extends Component {
  render() {
    const settings = {
      //   dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      autoplay: true,
      speed: 2000,
      //   beforeChange: function (currentSlide, nextSlide) {
      //     console.log('before change', currentSlide, nextSlide);
      //   },
      //   afterChange: function (currentSlide) {
      //     console.log('after change', currentSlide);
      //   },

      prevArrow: <CustomArrow />,
      nextArrow: <CustomArrow />,
    };
    function CustomArrow() {
      return <div className="invisible" />;
    }

    return (
      <div className="w-[70%]">
        <Slider {...settings}>
          {dataJourney.map((data, index) => {
            return (
              <div className="bg-blueSoft text-white p-4 m-2 h-[100%] hover:bg-slate-500" key={index}>
                <div>{data.placeJourney}</div>
                <div>{data.jobTitleJourney}</div>
                <div> {data.dateJourney}</div>
                <br />
                <div className="">
                  <ol className=" mb-1">{data.descriptionJourney.description1}</ol>
                  <ol className=" mb-1">{data.descriptionJourney.description2}</ol>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
