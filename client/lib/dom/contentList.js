import { insertLast } from "./insert.js";

// 메인비주얼
export const createMainVisual = ({
  id = "",
  story = "",
  image = "",
} = {}) => {
  return /* html */ `
    <div class="swiper-slide" data-index="main-visual${id}">
      <picture> 
        <source
          media="(max-width: 767px)"
          srcset="
          ${image["mobile"]}
          "
        />
        <source
          media="(max-width: 1199px)"
          srcset="
          ${image["tablet"]}
          "
        />
        <img
        src="${image["desktop"]}"
        alt="${image["alt"]}"
        />
      </picture>
      <div class="text-wrap">
        <p class="desc">
        ${story}
        </p>
        <a href="#" class="btn-more">자세히보기</a>
      </div>
    </div>`;
};

export const renderMainVisual = (target, data) => {
  insertLast(target, createMainVisual(data));
};

//타잉에서 꼭봐야하는 컨텐츠
export const createRecommendTaing = ({
  id = "",
  image = "",
} = {}) => {
  return /* html */ `
  <div class="swiper-slide" data-index="${id}"
  >
    <a href="#" aria-label="${image["alt"]}">
      <picture>
        <source
          media="(max-width: 767px)"
          srcset="
          ${image["mobile"]}
          "
        />
        <source
          media="(max-width: 1199px)"
          srcset="
          ${image["tablet"]}
          "
        />
        <img
        src="${image["desktop"]}"
        alt="${image["alt"]}"
        />
      </picture>
      <p class="item-info">
      ${image["alt"]}
      </p>
    </a>
  </div>`;
};

export const renderRecommendTaing = (target, data) => {
  insertLast(target, createRecommendTaing(data));
};

//Quick-vod
export const createQuickVod = ({
  id = "",
  turnInfo = "",
  image = "",
} = {}) => {
  return /* html */ `
  <div class="swiper-slide badge badge-quick-vod" data-index="quick-vod${id}">
    <a href="#" aria-label="${image["alt"]}">
      <picture>
        <source
          media="(max-width: 767px)"
          srcset="
          ${image["mobile"]}
          "
        />
        <source
          media="(max-width: 1199px)"
          srcset="
          ${image["tablet"]}
          "
        />
        <img
        src="${image["desktop"]}"
        alt="${image["alt"]}"
        />
      </picture>
      <h3>${image["alt"]}</h3>
      <p>${`${turnInfo}화`}</p>
    </a>
  </div>`;
};

export const renderQuickVod = (target, data) => {
  insertLast(target, createQuickVod(data));
};

//realtime-popular
export const createRealtimePopular = ({
  id = "",
  rank = "",
  image = "",
} = {}) => {
  return /* html */ `
  <li class="swiper-slide" data-index="realtime-popular${id}"
  >
    <a href="#" aria-label="${image["alt"]}">
      <picture>
        <source
          media="(max-width: 767px)"
          srcset="
          ${image["mobile"]}
          "
        />
        <source
          media="(max-width: 1199px)"
          srcset="
          ${image["tablet"]}
          "
        />
        <img
        src="${image["desktop"]}"
        alt="${image["alt"]}"
        />
      </picture>
      <div class="item-info">
        <span class="rank-number">${rank}</span>
        <p>${image["alt"]}</p>
      </div>
    </a>
  </li>`;
};

export const renderRealtimePopular = (target, data) => {
  insertLast(target, createRealtimePopular(data));
};

//live-popular
export const createLivePopular = ({
  id = "",
  rank = "",
  rating = "",
  channel = "",
  image = "",
} = {}) => {
  return /* html */ `
    <li class="swiper-slide" data-index="live-popular${id}"
    >
    <a href="#" aria-label="${image["alt"]}">
      <picture>
        <source
          media="(max-width: 767px)"
          srcset="
          ${image["mobile"]}
          "
        />
        <source
          media="(max-width: 1199px)"
          srcset="
          ${image["tablet"]}
          "
        />
        <img
        src="${image["desktop"]}"
        alt="${image["alt"]}"
        />
      </picture>
      <div class="item-info">
        <span class="rank-number">${rank}</span>
        <div class="program-info">
          <h3>${channel}<span>${image["alt"]}</span></h3>
          <p class="viewer-rating">${`${rating}%`}</p>
        </div>
      </div>
    </a>
  </li>`;
};

export const renderLivePopular = (target, data) => {
  insertLast(target, createLivePopular(data));
};

//only-taing
export const createOnlyTaing = ({
  id = "",
  image = "",
} = {}) => {
  return /* html */ `
  <div class="swiper-slide" data-index="only-taing${id}"
  >
    <a href="#" aria-label="${image["alt"]}">
    <picture>
        <source
          media="(max-width: 767px)"
          srcset="
          ${image["mobile"]}
          "
        />
        <source
          media="(max-width: 1199px)"
          srcset="
          ${image["tablet"]}
          "
        />
        <img
        src="${image["desktop"]}"
        alt="${image["alt"]}"
        />
      </picture>
    </a>
  </div>`;
};

export const renderOnlyTaing = (target, data) => {
  insertLast(target, createOnlyTaing(data));
};

//event
export const createEvent = ({
  id = "",
  image = "",
} = {}) => {
  return /* html */ `
  <div class="swiper-slide" data-index="event${id}">
    <picture>
      <source
        media="(max-width: 767px)"
        srcset="${image["mobile"]}
        "
      />
      <source
        media="(max-width: 1199px)"
        srcset="
        ${image["tablet"]}
        "
      />
      <img
      src="${image["desktop"]}"
      alt="${image["alt"]}"
      
      />
    </picture>
  </div>`;
};

//
export const renderEvent = (target, data) => {
  insertLast(target, createEvent(data));
};
