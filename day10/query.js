// const box = document.querySelector(".box");
// console.log(box);
// box.style.backgroundColor = "skyblue";

const boxes = document.querySelectorAll(".box");
boxes.forEach((v) => {
  v.style.backgroundColor = "#7efff5";
});
console.log(boxes); // 배열 비스무리한거 (배열 아님) => NodeList

document.querySelectorAll(".UIItemPc__Text-sc-pzfdui-2>span").forEach((x) => {
  x.innerHTML = "SisaIT";
});
