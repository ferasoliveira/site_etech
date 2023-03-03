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
  on: {
    slideChangeTransitionStart: function () {
      // Remove a sombra de todos os slides
      var slides = document.querySelectorAll(".swiper-slide");
      slides.forEach(function (slide) {
        slide.style.boxShadow = "none";
      });

      // Adiciona a sombra ao slide ativo
      var activeSlide = document.querySelector(".swiper-slide-active");
      activeSlide.style.boxShadow = "0 0 10px rgb(0, 199, 255)";
    },
  },
});
