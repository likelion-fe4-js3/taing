import { insertLast } from "./insert.js";

// data-index="mainVisual${id}"
// ${image["mobile"]}
// ${image["tablet"]}
// src="${image["desktop"]}"
// alt="${image["alt"]}"
// ${story}

// 메인비주얼컨텐츠 => 이름수정?

export const createMV = ({
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

export const renderMV = (target, data) => {
  insertLast(target, createMV(data));
  console.log("랜더링성공");
};

// data-index="mainVisual${id}"
// ${image["mobile"]}
// ${image["tablet"]}
// src="${image["desktop"]}"
// alt="${image["alt"]}"
// ${story}

//타잉에서 꼭봐야하는 컨텐츠
export const createRT = ({ id = "", image = "" } = {}) => {
  return /* html */ `
  <div class="swiper-slide" data-index="${id}"
  >
  <a href="#">
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
  </div>
  `;
};

export const renderRT = (target, data) => {
  insertLast(target, createRT(data));
  console.log("랜더링성공");
};
