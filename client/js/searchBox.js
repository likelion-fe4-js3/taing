import {
  getInputValue,
  getNode,
  insertLast,
  setAttr,
  css,
} from "../lib/index.js";

/* -------------------------- 메인의 서치 아이콘 누르면 열림/닫힘 -------------------------- */
const mainSearch = getNode(".main-search");
const searchBackground = getNode(".search-background");
const body = getNode("body");

let isOnSearch = false;

function onSearch() {
  isOnSearch = true;
  css(searchBackground, "display", "block");
  body.style.overflow = "hidden";
}

function offSearch() {
  isOnSearch = false;
  css(searchBackground, "display", "none");
  body.style.overflow = "auto";
}

function onOffSearch() {
  if (!isOnSearch) onSearch();
  else offSearch();
}

mainSearch.addEventListener("click", onOffSearch);
searchBackground.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("search-background")) {
    offSearch();
  }
});

/* ------------------------ width 크기별 placeholder값 변경 ----------------------- */
const deviceChange = window.matchMedia(
  "(min-width: 768px)"
);

if (deviceChange.matches) {
  setAttr(
    ".search-box input",
    "placeholder",
    "TV프로그램, 영화 제목 및 출연진으로 검색해보세요"
  );
} else {
  setAttr(".search-box input", "placeholder", "검색");
}

deviceChange.addEventListener("change", (target) => {
  if (target.matches) {
    setAttr(
      ".search-box input",
      "placeholder",
      "TV프로그램, 영화 제목 및 출연진으로 검색해보세요"
    );
  } else {
    setAttr(".search-box input", "placeholder", "검색");
  }
});

/* -------------------------------- 최근 검색어 구현 ------------------------------- */
const searchInput = getNode(".search-box input");
const searchButton = getNode(".search-button");
const latestWordList = getNode(".latest-word-list");
const noSearch = getNode(".latest-word p");
const allClearButton = getNode(".latest-word-title button");

//현재 localStorage의 searchKeywords 값 가져오기
function getSearchList() {
  return JSON.parse(localStorage.getItem("searchKeywords"));
}

function invisibleNode(node) {
  node.style.display = "none";
}

function visibleNode(node, display) {
  node.style.display = display;
}

function isNullList(value) {
  if (value !== null) {
    return false;
  }
}

function isEmptySearchList() {
  const searchList = getSearchList();
  if (
    searchList === null ||
    (Array.isArray(searchList) && searchList.length === 0)
  ) {
    return true;
  }

  for (let value of searchList) {
    isNullList(value);
  }
}

function setWhenAllClean() {
  //searchList에 null이 아닌 값이 존재하면
  //'검색 내역이 없습니다'안 보이기, '모두 지우기'버튼 보이기
  if (!isEmptySearchList()) {
    invisibleNode(noSearch);
    visibleNode(allClearButton, "inline");
  } else {
    visibleNode(noSearch, "inline");
    invisibleNode(allClearButton);
  }
}

function addList(value) {
  if (value !== null && value !== undefined) {
    insertLast(
      latestWordList,
      /*html*/ `
      <li>
      <a href="#">${value}</a>
      <button aria-label="삭제"></button>
      </li>`
    );
  }
}

function renderLatestWords(list) {
  setWhenAllClean();

  if (!list) {
    return;
  }

  //최근 검색어 목록 추가
  for (let value of list) {
    addList(value);
  }
}

function searchHandler() {
  const inputValue = getInputValue(".search-box input");

  //공백 입력시 처리
  if (inputValue.trim() === "") {
    alert("검색어를 입력해주세요.");
    return;
  }

  const searchWords = getSearchList() || [];
  searchWords.unshift(inputValue);
  if (searchWords.length > 9) {
    searchWords.pop();
  }
  localStorage.setItem(
    "searchKeywords",
    JSON.stringify(searchWords)
  );
  //<li>태그 전부 삭제했다가 다시 랜더링
  latestWordList.replaceChildren();
  renderLatestWords(searchWords);
}

function searchInputHandler(event) {
  if (event.keyCode === 13) {
    searchHandler();
  }
}

function allClearHandler() {
  localStorage.removeItem("searchKeywords");
  latestWordList.replaceChildren();
  allClearButton.style.display = "none";
  renderLatestWords();
}

let searchList = getSearchList() || [];
renderLatestWords(searchList);

searchButton.addEventListener("click", searchHandler);
searchInput.addEventListener("keydown", searchInputHandler);
allClearButton.addEventListener("click", allClearHandler);

function isDeleteTarget(index, target, present) {
  if (latestWordList.children[index] === target) {
    present.splice(index, 1);
    localStorage.setItem(
      "searchKeywords",
      JSON.stringify(present)
    );
  }
}

function deleteHandler(event) {
  const buttonTarget = event.target.closest("li > button");
  const deleteTarget = event.target.closest("li");

  const searchValue =
    event.target.previousElementSibling.textContent;

  //localStorage에서 삭제
  const presentKeywords = getSearchList();
  for (
    let index = 0;
    index < latestWordList.children.length;
    index++
  ) {
    isDeleteTarget(index, deleteTarget, presentKeywords);
  }

  if (!buttonTarget) return;

  //화면에서 삭제
  deleteTarget.remove();

  renderLatestWords();
}

latestWordList.addEventListener("click", deleteHandler);
