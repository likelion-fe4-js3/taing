import {
  attr,
  addClass,
  getNode,
  removeClass,
} from "../lib/index.js";
import {
  rendingEvent,
  rendingLivePopular,
  rendingMainVisual,
  rendingOnlyTaing,
  rendingQuickVod,
  rendingRealtimePopular,
  rendingRecommendTaing,
} from "../lib/dom/rending.js";

// 헤더 스크롤 액션
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    removeClass(header, "deactive");
    addClass(header, "active");
  } else {
    removeClass(header, "active");
    addClass(header, "deactive");
  }
});

// main-visual swiper
const mainVisual = new Swiper(".main-visual", {
  speed: 1500,
  slidesPerView: 1,
  simulateTouch: true,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// main-visual autoplay, pause
const autoplayBtn = getNode(".swiper-button-autoplay");
function handlerAutoplay() {
  if (autoplayBtn.className.includes("btn-pause")) {
    mainVisual.autoplay.stop();
    removeClass(autoplayBtn, "btn-pause");
    addClass(autoplayBtn, "btn-play");
    attr(autoplayBtn, "aria-label", "재생");
  } else {
    mainVisual.autoplay.start();
    removeClass(autoplayBtn, "btn-play");
    addClass(autoplayBtn, "btn-pause");
    attr(autoplayBtn, "aria-label", "일시정지");
  }
}

autoplayBtn.addEventListener("click", handlerAutoplay);

const recommendTaing = new Swiper(
  ".recommend-taing .swiper",
  {
    simulateTouch: true,
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
  simulateTouch: true,
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
    simulateTouch: true,
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
  simulateTouch: true,
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
  simulateTouch: true,
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

const eventSwiper = new Swiper(".event .swiper", {
  slidesPerView: "auto",
  simulateTouch: true,
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

// 스와이퍼 프로그램 정보 비동기통신
rendingMainVisual();
rendingRecommendTaing();
rendingQuickVod();
rendingRealtimePopular();
rendingLivePopular();
rendingOnlyTaing();
rendingEvent();
