import React, { Component } from 'react'

export class loop extends Component {
  render() {
    const swiperFavorites = new Swiper('.favorites__swiper', {
      
      loop: false,
      grabCursor: true,
    
      centeredSlides: "auto",
      slidesPerView: 'auto',
      effect: 'slide',
  
  })
  }
}

export default loop


    
 