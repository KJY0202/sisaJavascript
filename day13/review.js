import { btn1, btn2, btn3, deep, review, qna } from "./query.js";

// const buttons = [btn1, btn2, btn3];
// const contents = [deep, review, qna];

// buttons.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     contents.forEach((content, i) => {
//       content.style.display = i === index ? "block" : "none";
//     });

//     buttons.forEach((button, i) => {
//       const active = i === index;

//       button.style.backgroundColor = active ? "black" : "white";
//       button.style.color = active ? "white" : "black";
//     });
//   });
// });

btn1.addEventListener("click", () => {
  deep.style.display = "block";
  review.style.display = "none";
  qna.style.display = "none";
  btn1.style.backgroundColor = "black";
  btn1.style.color = "white";
  btn2.style.backgroundColor = "white";
  btn2.style.color = "black";
  btn3.style.backgroundColor = "white";
  btn3.style.color = "black";
});

btn2.addEventListener("click", () => {
  review.style.display = "block";
  deep.style.display = "none";
  qna.style.display = "none";
  btn2.style.backgroundColor = "black";
  btn2.style.color = "white";
  btn1.style.backgroundColor = "white";
  btn1.style.color = "black";
  btn3.style.backgroundColor = "white";
  btn3.style.color = "black";
});

btn3.addEventListener("click", () => {
  qna.style.display = "block";
  deep.style.display = "none";
  review.style.display = "none";
  btn3.style.backgroundColor = "black";
  btn3.style.color = "white";
  btn1.style.backgroundColor = "white";
  btn1.style.color = "black";
  btn2.style.backgroundColor = "white";
  btn2.style.color = "black";
});
