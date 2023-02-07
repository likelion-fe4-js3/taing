/* global gsap */

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

import { getNode, setCss } from "../lib/index.js";

var thumbnailSwiper = new Swiper(".thumbnail-window", {
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  //allowTouchMove: false,
});

const upperSwiper = new Swiper(".upper-wrapper", {
  loop: true,
  loopedSlidesLimit: false,

  autoplay: {
    delay: 1,
    disableOnInteraction: true,
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

const lowerSwiper = new Swiper(".lower-wrapper", {
  loop: true,
  loopedSlidesLimit: false,

  autoplay: {
    delay: 1,
    disableOnInteraction: true,
  },
  spaceBetween: 10,
  speed: 2300,
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

let horizontal_scroll_tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-section-1",
    scrub: 0.5,
    pin: ".scroll-section-1",
    start: "top top",
    end: () => `+=${3000}`,
    onUpdate: (self) => {
      //console.log(self.progress);

      if (self.progress < 0.2) {
        thumbnailSwiper.slideTo(0);
      } else if (
        self.progress >= 0.2 &&
        self.progress < 0.4
      ) {
        thumbnailSwiper.slideTo(1);
      } else if (
        self.progress >= 0.4 &&
        self.progress < 0.6
      ) {
        thumbnailSwiper.slideTo(2);
      } else if (
        self.progress >= 0.6 &&
        self.progress < 0.8
      ) {
        thumbnailSwiper.slideTo(3);
      } else if (self.progress >= 0.8) {
        let cnt = parseInt((self.progress * 100 - 80) * 5);
        getNode(
          ".scroll-section-1"
        ).style.filter = `brightness(${100 - cnt}%)`;
      }
    },
  },
});
