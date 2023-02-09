import {
  renderMainVisual,
  renderRecommendTaing,
  renderQuickVod,
  renderRealtimePopular,
  renderLivePopular,
  renderOnlyTaing,
  renderEvent,
} from "./contentList.js";
import { getNode } from "./getNode.js";
import { tiger } from "../utils/tiger.js";

//main-visual
const mainVisualBox = getNode(
  ".main-visual .swiper-wrapper"
);

export async function rendingMainVisual() {
  try {
    let response = await tiger.get(
      "http://localhost:3000/main-visual"
    );
    let contentsData = response.data;

    contentsData.forEach((data) => {
      renderMainVisual(mainVisualBox, data);
    });
  } catch (err) {
    console.log(err);
  }
}

// recommend-taing
const recommendTaingBox = getNode(
  ".recommend-taing .swiper-wrapper"
);
export async function rendingRecommendTaing() {
  try {
    let response = await tiger.get(
      "http://localhost:3000/recommend-taing"
    );
    let contentsData = response.data;

    contentsData.forEach((data) => {
      renderRecommendTaing(recommendTaingBox, data);
    });
  } catch (err) {
    console.log(err);
  }
}

//quick-vod
const quickVodBox = getNode(".quick-vod .swiper-wrapper");
export async function rendingQuickVod() {
  try {
    let response = await tiger.get(
      "http://localhost:3000/quick-vod"
    );
    let contentsData = response.data;

    contentsData.forEach((data) => {
      renderQuickVod(quickVodBox, data);
    });
  } catch (err) {
    console.log(err);
  }
}

//realtime-popular
const realTimePopularBox = getNode(
  ".realtime-popular .swiper-wrapper"
);

export async function rendingRealtimePopular() {
  try {
    let response = await tiger.get(
      "http://localhost:3000/realtime-popular"
    );
    let contentsData = response.data;

    contentsData.forEach((data) => {
      renderRealtimePopular(realTimePopularBox, data);
    });
  } catch (err) {
    console.log(err);
  }
}

//live-popular
const livePopularBox = getNode(
  ".live-popular .swiper-wrapper"
);

export async function rendingLivePopular() {
  try {
    let response = await tiger.get(
      "http://localhost:3000/live-popular"
    );
    let contentsData = response.data;

    contentsData.forEach((data) => {
      renderLivePopular(livePopularBox, data);
    });
  } catch (err) {
    console.log(err);
  }
}

//only-taing
const onlyTaingBox = getNode(".only-taing .swiper-wrapper");

export async function rendingOnlyTaing() {
  try {
    let response = await tiger.get(
      "http://localhost:3000/only-taing"
    );
    let contentsData = response.data;

    contentsData.forEach((data) => {
      renderOnlyTaing(onlyTaingBox, data);
    });
  } catch (err) {
    console.log(err);
  }
}

//event
const eventBox = getNode(".event .swiper-wrapper");

export async function rendingEvent() {
  try {
    let response = await tiger.get(
      "http://localhost:3000/event"
    );
    let contentsData = response.data;

    contentsData.forEach((data) => {
      renderEvent(eventBox, data);
    });
  } catch (err) {
    console.log(err);
  }
}
