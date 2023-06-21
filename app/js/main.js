


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

const swiperHeader = new Swiper('.swiper__header-slider', {
  // Optional parameters
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination', 
    clickable: true,   
  },

  // Navigation arrows
  navigation: {
    nextEl: '.next__btn',
    prevEl: '.prev__btn',
  },

});

const swiperInsurance = new Swiper('.swiper__insurance', {
  
  slidesPerView: 4,
  
  pagination: {
    el: '.swiper-pagination-insurance',
    clickable: true,
  },
 
  navigation: {
    nextEl: '.insurance__btn-next',
    prevEl: '.insurance__btn-prev',
    clickable: true,
  },
  
});

const swiperInfo = new Swiper('.swiper__info', {

  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
  slideToClickedSlide: true,  
  
  navigation: {
    nextEl: '.info__btn-next',
    prevEl: '.info__btn-prev',
  },

  
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    
  },
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



