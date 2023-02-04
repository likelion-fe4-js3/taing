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
    breakpoints: {
      320: {
        spaceBetween: 8,
      },
      768: {
        spaceBetween: 8,
      },
      1200: {
        spaceBetween: 16,
      },
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
  breakpoints: {
    320: {
      spaceBetween: 8,
    },
    768: {
      spaceBetween: 8,
    },
    1200: {
      spaceBetween: 16,
    },
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
    breakpoints: {
      320: {
        spaceBetween: 8,
      },
      768: {
        spaceBetween: 8,
      },
      1200: {
        spaceBetween: 16,
      },
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
  breakpoints: {
    320: {
      spaceBetween: 8,
    },
    768: {
      spaceBetween: 8,
    },
    1200: {
      spaceBetween: 16,
    },
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
  breakpoints: {
    320: {
      spaceBetween: 8,
    },
    768: {
      spaceBetween: 8,
    },
    1200: {
      spaceBetween: 16,
    },
  },
});
