import { getNode, getNodes, attr } from "../lib/index.js";

// pw와 pw확인 input 영역에 비밀번호 가리고 보이기
const upperPwShow = getNode(".show-pw-upper");
const lowerPwShow = getNode(".show-pw-lower");

upperPwShow.addEventListener("change", () => {
  if (upperPwShow.checked) {
    attr(".user-pw-input", "type", "text");
  } else {
    attr(".user-pw-input", "type", "password");
  }
});

lowerPwShow.addEventListener("change", () => {
  if (lowerPwShow.checked) {
    attr(".pw-check-input", "type", "text");
  } else {
    attr(".pw-check-input", "type", "password");
  }
});

function changeInfoMessage(node, text, color) {
  node.innerText = text;
  node.style.color = color;
}

function isCorrentId(inputId) {
  const regex = /^[a-z|A-Z|0-9|]+$/;
  return regex.test(inputId);
}

function isCorrectPw(inputPw) {
  const regex = /^[a-z|A-Z|0-9|~!@#$%^&*]+$/;
  return regex.test(inputPw);
}

function isCorrectEmail(inputEmail) {
  const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,9}/;

  return regex.test(inputEmail);
}

function chkLengthOk(text, min, max) {
  let textLength = text.length;
  if (textLength >= min && textLength <= max) {
    return true;
  }
  return false;
}

function chkInputEmpty(text) {
  if (text.length === 0) {
    return true;
  }
  return false;
}

const totalValidFlags = {
  id: false,
  pw: false,
  pwCheck: false,
  email: false,
  essentialAgree1: false,
  essentialAgree2: false,
  essentialAgree3: false,
};

function chkVaidFlags({
  id,
  pw,
  pwCheck,
  email,
  essentialAgree1,
  essentialAgree2,
  essentialAgree3,
}) {
  if (
    id &&
    pw &&
    pwCheck &&
    email &&
    essentialAgree1 &&
    essentialAgree2 &&
    essentialAgree3
  ) {
    console.log("pass");
    getNode(".login-btn").disabled = false;
  } else {
    console.log("fail");
    getNode(".login-btn").disabled = true;
  }
}

const userIdInput = getNode(".user-id-input");
const userIdInfo = getNode(".user-id-info");

userIdInput.addEventListener("input", () => {
  let text = userIdInput.value;

  if (chkInputEmpty(text)) {
    changeInfoMessage(
      userIdInfo,
      "입력한 내용이 없어요.",
      "red"
    );
    totalValidFlags.id = false;
    return;
  }

  if (!isCorrentId(text)) {
    changeInfoMessage(
      userIdInfo,
      "영문 소문자 또는 영문 소문자, 숫자 조합 6~12 자리로 입력해주세요.",
      "red"
    );
    totalValidFlags.id = false;
    return;
  }

  if (chkLengthOk(text, 6, 12)) {
    changeInfoMessage(
      userIdInfo,
      "영문 또는 영문, 숫자 조합 6~12자리",
      "#757575"
    );
    totalValidFlags.id = true;
    chkVaidFlags(totalValidFlags);
  } else {
    changeInfoMessage(
      userIdInfo,
      "영문 소문자 또는 영문 소문자, 숫자 조합 6~12 자리로 입력해주세요.",
      "red"
    );
    totalValidFlags.id = false;
  }
});

const userPwInput = getNode(".user-pw-input");
const userPwInfo = getNode(".user-pw-info");

userPwInput.addEventListener("input", () => {
  let text = userPwInput.value;

  if (chkInputEmpty(text)) {
    changeInfoMessage(
      userPwInfo,
      "입력한 내용이 없어요.",
      "red"
    );
    totalValidFlags.pw = false;
    return;
  }

  if (!isCorrectPw(text)) {
    changeInfoMessage(
      userPwInfo,
      "영문, 숫자, 특수문자 (~!@#$%^&*) 조합 8~15 자리 로 입력해주세요.",
      "red"
    );
    totalValidFlags.pw = false;
    return;
  }

  if (chkLengthOk(text, 8, 15)) {
    changeInfoMessage(
      userPwInfo,
      "영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리",
      "#757575"
    );
    totalValidFlags.pw = true;
    chkVaidFlags(totalValidFlags);
  } else {
    changeInfoMessage(
      userPwInfo,
      "영문, 숫자, 특수문자 (~!@#$%^&*) 조합 8~15 자리 로 입력해주세요.",
      "red"
    );
    totalValidFlags.pw = false;
  }
});

const userPwCheckInput = getNode(".pw-check-input");
const userPwCheckInfo = getNode(".user-pw-check-info");

userPwCheckInput.addEventListener("input", () => {
  let text = userPwCheckInput.value;

  if (chkInputEmpty(text)) {
    changeInfoMessage(
      userPwCheckInfo,
      "입력한 내용이 없어요.",
      "red"
    );
    totalValidFlags.pwCheck = false;
    return;
  }

  if (text == userPwInput.value) {
    totalValidFlags.pwCheck = true;
    chkVaidFlags(totalValidFlags);
    changeInfoMessage(userPwCheckInfo, "", "red");
  } else {
    changeInfoMessage(
      userPwCheckInfo,
      "일치하지 않습니다. 다시 입력해주세요.",
      "red"
    );
    totalValidFlags.pwCheck = false;
    return;
  }
});

const userEmailInput = getNode(".user-email");
const userEmailInfo = getNode(".user-email-info");

userEmailInput.addEventListener("input", () => {
  let text = userEmailInput.value;

  if (chkInputEmpty(text)) {
    changeInfoMessage(
      userEmailInfo,
      "입력한 내용이 없어요.",
      "red"
    );
    totalValidFlags.email = false;
    return;
  }

  if (isCorrectEmail(text)) {
    changeInfoMessage(userEmailInfo, "", "red");
    totalValidFlags.email = true;
    chkVaidFlags(totalValidFlags);
  } else {
    changeInfoMessage(
      userEmailInfo,
      "올바른 이메일 형식이 아닙니다.",
      "red"
    );
    totalValidFlags.email = false;
    return;
  }
});

const agreeAll = getNode(".agree-box");
const agreeAllLabel = getNode(".agree-box + label");
const subCheckBox = getNodes(".btn-checks .agree-checkbox");

agreeAll.addEventListener("input", () => {
  agreeAllLabel.classList.toggle("label-bright");
  if (agreeAll.checked) {
    subCheckBox.forEach((element) => {
      element.checked = true;
    });
  } else {
    subCheckBox.forEach((element) => {
      element.checked = false;
    });
  }

  totalValidFlags.essentialAgree1 = subCheckBox[1].checked;
  totalValidFlags.essentialAgree2 = subCheckBox[2].checked;
  totalValidFlags.essentialAgree3 = subCheckBox[3].checked;
  chkVaidFlags(totalValidFlags);
});

const btnAgreeWrap = getNode(".btn-agree-wrap");

btnAgreeWrap.addEventListener("input", (e) => {
  let flag = true;

  totalValidFlags.essentialAgree1 = subCheckBox[1].checked;
  totalValidFlags.essentialAgree2 = subCheckBox[2].checked;
  totalValidFlags.essentialAgree3 = subCheckBox[3].checked;
  chkVaidFlags(totalValidFlags);
  if (!e.target.checked) {
    agreeAll.checked = false;
    agreeAllLabel.classList.remove("label-bright");
  } else {
    subCheckBox.forEach((element) => {
      if (!element.checked) {
        agreeAll.checked = false;
        agreeAllLabel.classList.remove("label-bright");
        flag = false;
        return;
      }
    });
    if (flag) {
      agreeAll.checked = true;
      agreeAllLabel.classList.add("label-bright");
    }
  }
});

const privacyCheckTotal = getNode(".privacy-check-total");
const privacyCheckSms = getNode(".privacy-check-sms");
const privacyCheckEmail = getNode(".privacy-check-email");

privacyCheckTotal.addEventListener("input", (e) => {
  if (!e.target.checked) {
    privacyCheckSms.checked = false;
    privacyCheckEmail.checked = false;
  }
});

privacyCheckSms.addEventListener("input", (e) => {
  if (e.target.checked) {
    privacyCheckTotal.checked = true;
  }
});
privacyCheckEmail.addEventListener("input", (e) => {
  if (e.target.checked) {
    privacyCheckTotal.checked = true;
  }
});

getNode("body").addEventListener("click", () => {
  console.log(totalValidFlags);
});
