const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  console.log("니가만들어");
});

//  html 점메추 버튼을 만들고 버튼을 누르면 오늘점심은 돈치킨입니다

const btn2 = document.querySelector(".lunch");

btn2.addEventListener("click", () => {
  alert("오늘 점심은 돈치킨입니다!");
});

//  사각형 만들기 버튼
// 화면에 100px 100px 배경 빨간색 박스 생성되도록 하기

const btn3 = document.querySelector(".box-button");
const squareContainer = document.querySelector(".square-container");

btn3.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("square");
  squareContainer.append(div);
});

const btn4 = document.querySelector(".heart");
btn4.addEventListener("click", () => {
  btn4.innerHTML = btn4.innerHTML == "♡" ? "♥" : "♡";
});

//  - 0 +  플러스 누르면 카운트가 올라가도록 마이너스 누르면 카운트가 내려가도록 //

const counter = document.querySelector(".counter");
const btnMinus = document.querySelector(".minus");
const btnZero = document.querySelector(".zero");
const btnPlus = document.querySelector(".plus");

btnPlus.addEventListener("click", () => {
  btnZero.innerHTML = +btnZero.innerHTML + 1;
});

btnMinus.addEventListener("click", () => {
  btnZero.innerHTML = +btnZero.innerHTML - 1;
});

// 밝게 어둡게

const body = document.querySelector(".all");
const btn5 = document.querySelector(".dark");
btn5.addEventListener("click", () => {
  btn5.innerHTML = btn5.innerHTML == "🌙어둡게" ? "☀️밝게" : "🌙어둡게";

  body.style.backgroundColor =
    body.style.backgroundColor === "black" ? "white" : "black";
});
