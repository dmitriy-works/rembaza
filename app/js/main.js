
  

const menuBurger = document.querySelector('.burger-menu');
const menuList = document.querySelector('.header__menu-list');

console.log(menuBurger)

menuBurger.addEventListener('click', function () {
  menuList.classList.toggle('header__list--active');
});


const swiper = new Swiper('.swiper', {  

  slidesPerView:1,
  spaceBetween: 30,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop:true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  
  
});



