import React, { Component } from "react";
import Slider from "react-slick";
import ola from "./img/logo10.jpg"
import ola1 from "./img/first.jpg"
import ola2 from "./img/barbie.jpg"
import ola3 from "./img/paran.png"
import ola4 from "./img/photo2.jpeg"
import ola5 from "./img/photo3.jpg"

import "../src/slider.scss"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div style={{width:'60%'}}>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src={ola} alt="" />
          </div>
          <div>
            <img src={ola1} alt="" />
          </div>
          <div>
            <img src={ola2} alt="" />
          </div>
          <div>
            <img src={ola3} alt="" />
          </div>
          <div>
            <img src={ola4} alt="" />
          </div>
          <div>
            <img src={ola5} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}