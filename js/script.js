let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".gallery-slider", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});

// para la seccion del contacto

document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox => {
  faqBox.onclick = () =>{
    faqBox.parentElement.classList.toggle('active');
  }
});

// 

var swiper = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 2,
      },
    },
});