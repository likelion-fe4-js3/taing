import { attr, getNode } from "../lib/index.js";

const formUserPw = getNode(".form-user-pw");
// console.log(formUserPw);
const visiblePwButton = getNode(".visible-pw-button");
console.log(visiblePwButton);

function handler() {
  if (attr(formUserPw, "type") === "password") {
    attr(formUserPw, "type", "text");
  } else attr(formUserPw, "type", "password");
}

visiblePwButton.addEventListener("click", handler);
