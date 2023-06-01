
  

// const menuBurger = document.querySelector('.burger-menu');
// const menuList = document.querySelector('.header__menu-list');

// console.log(menuBurger)

// menuBurger.addEventListener('click', function () {
//   menuList.classList.toggle('header__list--active');
// });


// const swiper = new Swiper('.swiper', {  

//   slidesPerView:1,
//   spaceBetween: 30,

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   loop:true,
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true,
//   },
  
  
// });

$(function () {


  $('.slider__items').slick({
    slidesToShow:1,
    slidesToScroll:1,
    dots:true,
    prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="images/arrow-prev.svg"</button>',
    nextArrow: '<button type="button" class="slick-next slick-btn"><img src="images/arrow-next.svg"</button>',
  });

});

const tabsBtn = document.querySelectorAll('.tabs__item');
const tabsContent = document.querySelectorAll('.tabs__content');

  tabsBtn.forEach(function (item) {
  item.addEventListener('click', function () {
   currentBtn = item;
   let tabId = currentBtn.getAttribute('data-tab');
   let currentTab = document.querySelector(tabId); 
   

   tabsBtn.forEach(function (item) {
    item.classList.remove('tabs__item-active');
  });

   tabsContent.forEach(function (item) {
    item.classList.remove('tabs__item-active');
 }); 
   currentBtn.classList.add('tabs__item-active');
   currentTab.classList.add('tabs__item-active');
  });

});

document.querySelector('.tabs__item:nth-child(3)').click();
