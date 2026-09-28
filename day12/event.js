const input = document.querySelector("#input");

input.addEventListener("input", (e) => {
  console.log({ e });
});

const box = document.querySelector(".box");
// box.addEventListener("mouseover", (e) => {
//   console.log({ e });
//   console.log(e.target.className);
// });
