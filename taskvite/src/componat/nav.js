import React, { Component } from 'react'


 class nav extends Component {
    
  render() {
   let app = document.getElementById('app');
  let  nav= document.getElementById('navbar');
   let Close=document.getElementById('nav_close');
   let a_herf1 =document.getElementById('close1');
   let a_herf2 =document.getElementById('close2');
   let a_herf3 =document.getElementById('close3');
   let a_herf4 =document.getElementById('close4');
   let a_herf5 =document.getElementById('close5');
   

app.onclick=()=>{

 


 
        nav.style.right='0%'
    
  }
  

Close.onclick=()=>{
 


  
        nav.style.right='-100%'
} 
a_herf1.onclick=()=>{
    nav.style.right='-100%'

}
a_herf2.onclick=()=>{
    nav.style.right='-100%'

}
a_herf3.onclick=()=>{
    nav.style.right='-100%'

}
a_herf4.onclick=()=>{
    nav.style.right='-100%'

}
a_herf5.onclick=()=>{
    nav.style.right='-100%'

}
const scrolHeader =()=>{
    const head = document.getElementById('header');
    window.scrollY >=50 ? head.classList.add('show_header'):
    head.classList.remove('show_header')
}
window.addEventListener('scroll',scrolHeader)
}
 }
export default nav
