import { css, getNode, getNodes } from "../lib/index.js";

const editButton = getNode(".profile-edit-button");
const profile = getNode(".profile");
const profileContent = getNode(".profile-content");
const lockIcon = getNodes(".lock-icon");
const profileActiveImage = getNode(".profile-active img");
const profileActiveIcon = getNode(
  ".profile-active .lock-icon"
);

//속성을...없애고 싶어요...
profileActiveImage.style.filter = "";
profileActiveIcon.style.background = "";

let isEdit = false;

function changeIcon(nodes, name) {
  for (let value of nodes) {
    css(
      value,
      "background",
      `url(../assets/profilePage/${name}.svg)`
    );
  }
}

function editHandler() {
  if (!isEdit) {
    isEdit = true;
    profile.textContent = "프로필 편집";
    profileContent.textContent =
      "편집할 프로필을 선택해주세요.";
    css(editButton, "background", "var(--gray-100)");
    css(editButton, "color", "var(--gray-900)");
    editButton.textContent = "완료";
    changeIcon(lockIcon, "icon_write");
  } else {
    isEdit = false;
    profile.textContent = "프로필 선택";
    profileContent.textContent =
      "시청할 프로필을 선택해주세요.";
    css(editButton, "background", "rgba(0, 0, 0, 0)");
    css(editButton, "color", "var(--gray-300)");
    editButton.textContent = "프로필 편집";
    changeIcon(lockIcon, "icon_lock");
  }
}

editButton.addEventListener("click", editHandler);
