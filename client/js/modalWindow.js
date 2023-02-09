import { getNode, getNodes, css } from "../lib/index.js";

const modalBackground = getNode(".modal-background");
const [todayCloseButton, closeButton] =
  getNodes(".modal button");
const body = getNode("body");
body.style.overflow = "hidden";

function onModal() {
  css(modalBackground, "display", "flex");
}

function offModal() {
  css(modalBackground, "display", "none");
  body.style.overflow = "auto";
}

closeButton.addEventListener("click", offModal);
todayCloseButton.addEventListener("click", offModal);
modalBackground.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("modal-background")) {
    offModal();
  }
});
