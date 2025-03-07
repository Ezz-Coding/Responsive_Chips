import React from 'react'

const Header = () => {
  return (
<>
<header class="head" id="header">
<nav class="nav_image" id="nav_image">
<a href="" class="nav_logo">CHIPS</a></nav>
<div class="emp"></div>
<nav class="nav_liner" id="nav_liner">
  <a href="#Home"><span>Home</span></a>
  <a href="#Favarites">Favarites</a>
  <a href="#Care">Care</a>
  <a href="#Products">Products</a>
  <a href="#Contact">Contact</a>
</nav>
<nav class="nav_social" id="nav_social">
  <a href="">
    <i class="ri-facebook-circle-line"></i>  
  </a>
  <a href="">
    <i class="ri-instagram-line"></i>
  </a>
  <a href="">
    <i class="ri-twitter-x-line"></i>
  </a>
</nav>

<nav class="nav_app"  >

  <div id="app">  <i class="ri-apps-line"></i></div>
</nav>


    </header></>
  )
}

export default Header
