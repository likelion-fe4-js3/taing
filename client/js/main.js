const recommendTaing = new Swiper(
  ".recommend-taing .swiper",
  {
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
        slidesPerView: 3,
      },
      768: {
        spaceBetween: 8,
        slidesPerView: 5,
      },
      1200: {
        spaceBetween: 16,
        slidesPerView: 7,
      },
      1920: {
        spaceBetween: 16,
        slidesPerView: 8,
      },
    },
  }
);

const quickVod = new Swiper(".quick-vod .swiper", {
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
      slidesPerView: 2,
    },
    768: {
      spaceBetween: 8,
      slidesPerView: 3,
    },
    1200: {
      spaceBetween: 16,
      slidesPerView: 5,
    },
    1920: {
      spaceBetween: 16,
      slidesPerView: 6,
    },
  },
});

const realtimePopular = new Swiper(
  ".realtime-popular .swiper",
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
        slidesPerView: 3,
      },
      768: {
        spaceBetween: 8,
        slidesPerView: 5,
      },
      1200: {
        spaceBetween: 16,
        slidesPerView: 7,
      },
      1920: {
        spaceBetween: 16,
        slidesPerView: 8,
      },
    },
  }
);

const livePopular = new Swiper(".live-popular .swiper", {
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
      slidesPerView: 2,
    },
    768: {
      spaceBetween: 8,
      slidesPerView: 3,
    },
    1200: {
      spaceBetween: 16,
      slidesPerView: 5,
    },
    1920: {
      spaceBetween: 16,
      slidesPerView: 6,
    },
  },
});

const onlyTaing = new Swiper(".only-taing .swiper", {
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
      slidesPerView: 2,
    },
    768: {
      spaceBetween: 8,
      slidesPerView: 4,
    },
    1200: {
      spaceBetween: 16,
      slidesPerView: 6,
    },
    1920: {
      spaceBetween: 16,
      slidesPerView: 7,
    },
  },
});
