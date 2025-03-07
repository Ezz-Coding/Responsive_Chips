import React from 'react'
import meat from './../../assets/image/meat.png';
import home_chips from './../../assets/image/home-chips.png';
import chips_1 from './../../assets/image/chips-1.png';
import chips_2 from './../../assets/image/chips-2.png';
import chips_3 from './../../assets/image/chips-3.png';
import tomato_1 from './../../assets/image/tomato-1.png';
import tomato_2 from './../../assets/image/tomato-2.png';
import leaf_3 from './../../assets/image/leaf-3.png';
import cheese2 from './../../assets/image/cheese2.png';
import care_chips from './../../assets/image/care-chips.png';
import cheese from './../../assets/image/cheese.png';
import favorite_chips_1 from './../../assets/image/favorite-chips-1.png';
import leaf_1 from './../../assets/image/leaf-1.png';
import leaf_2 from './../../assets/image/leaf-2.png';
import favorite_chips_2 from './../../assets/image/favorite-chips-2.png';
import favorite_chips_3 from './../../assets/image/favorite-chips-3.png';
import product_chips_5 from './../../assets/image/product-chips-5.png';
import product_chips_2 from './../../assets/image/product-chips-2.png';
import product_chips_3 from './../../assets/image/product-chips-3.png';
import product_chips_4 from './../../assets/image/product-chips-4.png';
import hamburger from './../../assets/image/hamburger.png';
import crab from './../../assets/image/crab.png';
import contact_man from './../../assets/image/contact-man.png';
  
import { SwiperSlide,Swiper } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';


const Main = () => {
  return (
 <>
  <main className="main">
<section className="Home_sectiom">
<div className="emp"></div>
<div className="Home_centerParent">
  <div className="Liner_for_image1">
    <div className="max-for-img-and-liner">
  <h1>SNACK <br/>
  WITH NO <br/> LIMITS<img src={meat} alt="not found this image"/></h1> <div className="emp"></div> </div>
  <p>When you are hungry and don't have time to cook. <br/> snacks are the perfact solution,always perpare for <br/> midday hungar.</p> 
 <nav className="Button_nav">
 <span><a href="" >Snack Now</a></span> 
  <a href="" className="Button_nav_2">Buy Now</a>
 </nav>
</div>
<div className="Home_this_chips">
  <div className="circle_1"> 
    <div className="circle_2">


  

    </div></div>  
      <img src={home_chips} alt="not found this image" className="home_chips"/>

   <img src={chips_1} alt="not found this image" className="home_chips_1"/>
  <img src={chips_2} alt="not found this image" className="home_chips_2"/>
  <img src={chips_3} alt="not found this image" className="home_chips_3"/>
  <img src={tomato_1} alt="not found this image" className="home_chips_tomato_1"/>
  <img src={tomato_2} alt="not found this image" className="home_chips_tomato_2"/>
  <img src={leaf_3}alt="not found this image" className="home_chips_leaf-3"/> 
</div>
</div>

<div className="emp"></div>
</section>
<section className="favorite section" id="favorites" >
<div className="favirutes_data">
  <div className="favirustes_center">
    <div className="image_chesess1">
  <img src={cheese2} alt="not found this image" />
</div>
    <div className="liner_favirustes">
  <h2 className="section_title">
    DISCOVER YOUR <br/> FAVORITE FLAVORS
  </h2>
  <p className="favorites_descripion">
    Try some exotic flavors or delcious <br/> toppingsv . We have collected some delicious <br/> snack recipes from around the world for you.
  </p>
</div>
<div className="image_chesess2">
  <img src={cheese} alt="not found this image"/></div>
</div>
<div className="favorites__swiper swiper">
<div className="swiper-wrapper">
  <Swiper
  modules={[Navigation, Pagination]}
  navigation
  pagination={{ clickable: true }}
  
  slidesPerView={3} 

  >
    <SwiperSlide className='Swiperclick'>
    <article className="favorites__article swiper-slide">
 <img src={favorite_chips_1} alt="not found this image" className="favorites__image"/>
 <img src={leaf_1} alt="not found this image" className="favorites__leaf-1"/>
 <img src={leaf_2} alt="not found this image" className="favorites__leaf-2"/>
  </article>
    </SwiperSlide >
    <SwiperSlide className='Swiperclick'>
    <article className="favorites__article swiper-slide">
    <img src={favorite_chips_2} alt="not found this image" className="favorites__image"/>
    <img src={leaf_1} alt="not found this image" className="favorites__leaf-1"/>
    <img src={leaf_2} alt="not found this image" className="favorites__leaf-2"/>
     </article>
    </SwiperSlide>
   
    <SwiperSlide className='Swiperclick'>
    <article className="favorites__article swiper-slide">
    <img src={product_chips_5} alt="not found this image" className="favorites__image"/>
    <img src={leaf_1} alt="not found this image" className="favorites__leaf-1"/>
    <img src={leaf_2} alt="not found this image" className="favorites__leaf-2"/>
     </article>
    </SwiperSlide>
    <SwiperSlide className='Swiperclick'>
    <article className="favorites__article swiper-slide">
 <img src={favorite_chips_1} alt="not found this image" className="favorites__image"/>
 <img src={leaf_1} alt="not found this image" className="favorites__leaf-1"/>
 <img src={leaf_2} alt="not found this image" className="favorites__leaf-2"/>
  </article>
    </SwiperSlide>
    <SwiperSlide className='Swiperclick'>
    <article className="favorites__article swiper-slide">
    <img src={product_chips_2} alt="not found this image" className="favorites__image"/>
    <img src={leaf_1} alt="not found this image" className="favorites__leaf-1"/>
    <img src={leaf_2} alt="not found this image" className="favorites__leaf-2"/>
     </article>
    </SwiperSlide>
   
    <SwiperSlide className='Swiperclick'>
    <article className="favorites__article swiper-slide">
    <img src={product_chips_4} alt="not found this image" className="favorites__image"/>
    <img src={leaf_1} alt="not found this image" className="favorites__leaf-1"/>
    <img src={leaf_2} alt="not found this image" className="favorites__leaf-2"/>
     </article>
    </SwiperSlide>
  </Swiper>


</div>
</div>
</div>
</section>
<section className="Back_gorund_and_liner">
  <div className="liner_ADS">
    <h1>ENJOY AND TAKE <br/>
      CARE OF YOUR HEALTH</h1>
      <div className="max_image_liner">
        <div className="image_cop">
          <img src={care_chips} alt="not found this image"/>
        </div>
        <div className="liner_image">
<p className="PH"><i className="ri-plant-line"></i>
  <span>The potatoes that are made into snacks are <br/> grown and harvested and are 100% organic</span></p>
<p className="PH"><i className="ri-fire-line"></i>
 <span>We fry the fries with vegetable and natural oil <br/> for good care.</span> </p>
<p className="PH"><i className="ri-heart-pulse-line"></i><span>Rhe potatoes are not processed, once <br/> cleaned they are cooked withoutv  <br/> preservatives.</span></p>
<p className="PH"><i className="ri-hand-heart-line"></i><span>They contain fewer calories and less fat for <br/> good health.</span></p>
        </div>
      </div>
  </div>
</section>
<section className="Backing_for_round">
<div className="liner_A_image"><h1><i className="ri-leaf-line"></i><span>GOOD FOR NATURE</span></h1></div>
<div className="liner_B_image"><h1><i className="ri-heart-pulse-line"></i><span>LOW CALORIES</span></h1></div>
</section>
<section className="Image_and_liner_for_sale">
  <div className="liner_for_sale">
    <h1>   BEST SELLING <br/>
PRODUCT</h1>
 
  </div>
 
  <div className="max_for_image_sale">
  <div className="image_max_windows">

    <div className="image_sale">
      <img src={favorite_chips_1} alt="not found this image"/>
      <span className="span_postion">
      <p>Crab</p>
      <h1>Chips</h1>
      <span>
      <p className="p_s">$8
     <button className="button_sale"><i className="ri-shopping-bag-3-fill"></i></button></p>
      </span>
    </span></div>
  </div>
  <div className="image_max_windows">

    <div className="image_sale">
      <img src={product_chips_5}alt="not found this image"/>
      <span className="span_postion">
      <p>Crab</p>
      <h1>Chips</h1>
      <span>
      <p className="p_s">$8
     <button className="button_sale"><i className="ri-shopping-bag-3-fill"></i></button></p>
      </span>
    </span></div>
  </div>
  <div className="image_max_windows">

    <div className="image_sale">
      <img src={product_chips_2} alt="not found this image"/>
      <span className="span_postion">
      <p>Crab</p>
      <h1>Chips</h1>
      <span>
      <p className="p_s">$8
     <button className="button_sale"><i className="ri-shopping-bag-3-fill"></i></button></p>
      </span>
    </span></div>
  </div>
  <div className="image_max_windows">

    <div className="image_sale">
      <img src={product_chips_3} alt="not found this image"/>
      <span className="span_postion">
      <p>Crab</p>
      <h1>Chips</h1>
      <span>
      <p className="p_s">$8
     <button className="button_sale"><i className="ri-shopping-bag-3-fill"></i></button></p>
      </span>
    </span></div>
  </div>
  <div className="image_max_windows">

    <div className="image_sale">
      <img src={product_chips_4} alt="not found this image"/>
      <span className="span_postion">
      <p>Crab</p>
      <h1>Chips</h1>
      <span>
      <p className="p_s">$8
     <button className="button_sale"><i className="ri-shopping-bag-3-fill"></i></button></p>
      </span>
    </span></div>
  </div>
</div>
</section>
<div className="icon_image_1">

  <img src={hamburger} alt="not found this image"/>
</div>
<div className="icon_image_2">
  <img src={crab} alt="not found this image"/>
  
</div>
<section className="Backing_for_ADS">
  <div className="liner_ADS">
    <h1>CONTACT US TO <br/>
      EAT CHIPS</h1>
  </div>
  <div className="max_for_image_liner_ADS">
    <div className="liner_maxs">
  <h3>Write to us</h3>
  <div className="icon_a-herf">
   <a href=""> <i className="ri-whatsapp-fill"></i></a>
   <a href="">
    <i className="ri-messenger-fill"></i></a>
   <a href="">  
    <i className="ri-mail-fill"></i></a>
 
  </div>
  <h3>
    Call us</h3>
    <p>+00-987-7654-321 <br/>
      +11-012345</p>
      <h3>Find us here</h3>
      <p>Lima - Sun City - Peru <br/>
        Av. Moon #4321</p></div>
        <div className="image_max_ADS">
          <img src={contact_man} alt="not found this image"/>
        </div>
  </div>

</section>
   </main>
    </>
  )
}

export default Main
