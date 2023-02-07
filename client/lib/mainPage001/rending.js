import { renderMV, renderRT } from "../dom/contentList.js";
import { getNode } from "../dom/getNode.js";
import { tiger } from "../utils/tiger.js";

//issue: 특정 swiper-wrapper을 잡아야함
//1. wrapper 에 클래스를 주고 const 를 try 안에 넣어서 할 것인가?
//2. 기타방법 등등
// 특정 wrapper을 안잡고, 그냥 아래처럼 주면 어떻게 되는지도 한번 테스트해봐야함 (왠지 wrapper에 다뿌리던가, 맨위만적용되던가 할거같음)

const MVContainer = getNode(".main-visual .swiper-wrapper");

export async function rendingMV() {
  try {
    let response = await tiger.get(
      "http://localhost:3000/main-visual"
    );
    let contentsData = response.data;

    contentsData.forEach((data) => {
      renderMV(MVContainer, data);
    });

    console.log("MV랜더링성공");
  } catch (err) {
    console.log(err);
  }
}

const RTContainer = getNode(
  ".recommend-taing .swiper-wrapper"
);
export async function rendingRT() {
  try {
    let response = await tiger.get(
      "http://localhost:3000/recommend-taing"
    );
    let contentsData = response.data;

    contentsData.forEach((data) => {
      renderRT(RTContainer, data);
    });

    console.log("RT랜더링성공");
  } catch (err) {
    console.log(err);
  }
}
