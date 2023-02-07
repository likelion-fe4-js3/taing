import { getNode, getNodes, css } from "../lib/index.js";

const modalButton = getNode(".modal-test-button");
const modalBackground = getNode(".modal-background");
const [todayCloseButton, closeButton] =
  getNodes(".modal button");
const body = getNode("body");

function onModal() {
  css(modalBackground, "display", "flex");
  body.style.overflow = "hidden";
}

function offModal() {
  css(modalBackground, "display", "none");
  body.style.overflow = "auto";
}

modalButton.addEventListener("click", onModal);
closeButton.addEventListener("click", offModal);
todayCloseButton.addEventListener("click", offModal);
modalBackground.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("modal-background")) {
    offModal();
  }
});
