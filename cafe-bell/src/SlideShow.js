

import React, { Component } from 'react';
import Slide from "react-slick";



class SlideShow extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> ねこスライド</h2>
        <Slide {...settings}>
          <div>
          <img src="slide-cat-1.jpg" /> 
          </div>
          <div>
          <img src="slide-cat-2.jpg" /> 
          </div>
          <div>
          <img src="slide-cat-3.jpg" /> 
          </div>
          <div>
          <img src="slide-cat-4.jpg" /> 
          </div>
        </Slide>
      </div>
    );
  }
}

export default SlideShow;
