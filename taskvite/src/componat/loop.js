import React, { Component } from 'react'

 class loop extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidMount(){
     let swiperFavorit = new Swiper('.set_for_image', {
     
      loop: true,
      grabCursor:true,
      slidesPerView:'auto',
      centeredSlides:true});
  }
 

  
  render() {
 

   
  }
  }


export default loop
