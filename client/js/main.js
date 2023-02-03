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

const realtimePopular = new Swiper(
  ".realtime-popular.swiper",
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

const livePopular = new Swiper(".live-popular.swiper", {
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

const onlyTaing = new Swiper(".only-taing.swiper", {
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
