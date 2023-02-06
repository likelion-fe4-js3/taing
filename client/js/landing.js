import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

import { getNode, setCss } from "../lib/index.js";

function getContentX(node) {
  node = getNode(node);
  return (
    window.pageYOffset + node.getBoundingClientRect().top
  );
}

function getContentHeight(node) {
  node = getNode(node);
  console.log(node.getBoundingClientRect.height);
}

document.addEventListener("scroll", function () {
  if (
    document.documentElement.scrollTop >=
      getContentX(".scroll-section-1") &&
    document.documentElement.scrollTop <
      getContentX(".scroll-section-2") - window.innerHeight
  ) {
    //setCss(".scroll-section-1", "position", "sticky");
    //setCss(".scroll-section-1", "top", "3rem");
  }

  // else if (
  //   document.documentElement.scrollTop >
  //   getContentX(".scroll-section-2") - window.innerHeight
  // ) {
  //   setCss(".scroll-section-1", "position", "static");
  // }

  //console.log(getContentHeight(".scroll-section-1"));
});

const swiper = new Swiper(".upper-wrapper", {
  loop: true,
  loopedSlides: 1,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  spaceBetween: 10,
  width: 900,
  slidesPerView: 5,
  speed: 3000,
  grabCursor: false,
  mousewheelControl: false,
  keyboardControl: true,
  allowTouchMove: false,
});

const lower_swiper = new Swiper(".lower-wrapper", {
  loop: true,
  loopedSlidesLimit: false,

  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  spaceBetween: 10,
  width: 900,
  slidesPerView: 5,
  speed: 2000,
  grabCursor: false,
  mousewheelControl: false,
  keyboardControl: true,
  allowTouchMove: false,
});
