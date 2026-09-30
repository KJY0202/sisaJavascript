const hello = document.querySelector(".hello");
const time = document.querySelector(".time");

hello.addEventListener("click", () => {
  setTimeout(() => {
    alert("하이!");
  }, 3000);
});

const now = new Date();

time.addEventListener("click", () => {
  setTimeout(() => {
    console.log(`${now.getHours()}시${now.getMinutes()}분`);
  }, 5000);
});
