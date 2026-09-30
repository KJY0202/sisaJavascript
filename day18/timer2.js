// setTimeout(() => {}, 3000);
/* setInterval(() => {
  console.log("hello");
}, 1000); */

const time = document.querySelector(".time");

setInterval(() => {
  const date = new Date();

  time.innerHTML = date.toLocaleTimeString();
}, 1000);
