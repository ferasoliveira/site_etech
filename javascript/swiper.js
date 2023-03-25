var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  speed: 650,
  centeredSlides: true,
  slidesPerView: 3,
  loop: true,
  spaceBetween: 100,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  shadow: true, // Ativa a sombra nos slides
});
