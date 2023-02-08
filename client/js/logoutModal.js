import { getNode, css, getNodes } from "../lib/index.js";

const profile = getNode(".profile");
const logoutBackground = getNode(".logout-background");
const [checkButton, closeButton] = getNodes(
  ".logout button"
);

const body = getNode("body");

let isCheck = false;

function onCheck() {
  isCheck = true;
  css(logoutBackground, "display", "flex");
  body.style.overflow = "hidden";
}

function offCheck() {
  isCheck = false;
  css(logoutBackground, "display", "none");
  body.style.overflow = "auto";
}

function onOffCheck() {
  if (!isCheck) onCheck();
  else offCheck;
}

profile.addEventListener("click", onOffCheck);
// checkButton.addEventListener("click", offCheck);
closeButton.addEventListener("click", offCheck);
logoutBackground.addEventListener("click", (event) => {
  //   event.preventDefault();
  const target = event.target;
  if (target.classList.contains("logout-background")) {
    offCheck();
  }
});
