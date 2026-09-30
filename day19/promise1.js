const content = document.querySelector("#content");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  new Promise((success, fail) => {
    setTimeout(() => {
      success(content.value);
    }, 2000);
  }).then((x) => alert(`${x}꿀맛!`));
});
