const recommendTaing = new Swiper(
  ".recommend-taing.swiper",
  {
    slidesPerView: "auto",
    spaceBetween: 8,
    keyboard: {
      enabled: true,
    },
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }
);

const quickVod = new Swiper(".quick-vod.swiper", {
  slidesPerView: "auto",
  spaceBetween: 8,
  keyboard: {
    enabled: true,
  },
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
