/*---   toogle button-*/
const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', ()=>{
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle(' ri-close-large-line')
})

navLink.forEach(link =>{
    link.addEventListener('click', () => {
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle('ri-close-large-line')
    })
})




/*---   show scroll up -----*/
const scrollUp = () =>{
    const scrollUpBotton = document.getElementById("scroll-up");

    if (this.scrollY >=250){
        scrollUpBotton.classList.remove("-bottom-1/2")
        scrollUpBotton.classList.add("bottom-4")
    } else {
        scrollUpBotton.classList.add("-bottom-1/2")
        scrollUpBotton.classList.remove("-bottom-1/2")
    }

};




window.addEventListener('scroll', scrollUp);




/*---   change background header-*/

const scrollHeader = () =>{
    const header = document.getElementById("navbar");

    if (this.scrollY >=50){
        header.classList.add("border-b", "border-yellow-500")
        
    } else {
        
        header.classList.remove("border-b", "border-yellow-500")
    }

};




window.addEventListener('scroll', scrollHeader);





/*---   swiper-*/


const swiper = new Swiper('.swiper', {
    // Optional parameters
   speed: 400,
   spaceBetween: 30,
   autoplay:{
    delay:3000,
    disableOnInteraction: false

   },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    grabCursor: true, 
    breakpoints:{
        640:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        },
    
    
    }
});
  




/*---   scroll sections active link-*/





/*---   scroll reveal animation-*/

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay:300,
    reset: true
}) 


sr.reveal(`.home__data, .about__top`)
sr.reveal(`.home__image`, {delay: 500, scale: 0.5})


sr.reveal(`.service__card`, {interval: 100})

sr.reveal(`.about__leaf`, {delay: 1000, origin: "right"})
sr.reveal(`.about__item__1-content,.about__item__2-img `, {delay: 1000, origin: "right"})

sr.reveal(`.about__item__2-content,.about__item__1-img `, {delay: 1000, origin: "left"})
