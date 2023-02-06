import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

import { getNode, setCss } from "../lib/index.js";

const swiper = new Swiper(".upper-wrapper", {
  loop: true,
  loopedSlides: 1,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  spaceBetween: 10,
  speed: 3000,
  grabCursor: false,
  mousewheelControl: false,
  keyboardControl: true,
  allowTouchMove: false,
  breakpoints: {
    320: {
      width: 900,
      slidesPerView: 5,
    },
    1200: {
      width: 1400,
      slidesPerView: 3,
    },
  },
});

const lower_swiper = new Swiper(".lower-wrapper", {
  loop: true,
  loopedSlidesLimit: false,

  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  spaceBetween: 10,
  speed: 2000,
  grabCursor: false,
  mousewheelControl: false,
  keyboardControl: true,
  allowTouchMove: false,
  breakpoints: {
    320: {
      width: 900,
      slidesPerView: 5,
    },
    1200: {
      width: 1400,
      slidesPerView: 3,
    },
  },
});
