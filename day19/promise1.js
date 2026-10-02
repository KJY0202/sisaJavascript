const content = document.querySelector("#content");
const btn = document.querySelector(".btn");

const makePromise = (content) => {
  return new Promise((success) => {
    setTimeout(() => {
      success(content.value);
    }, 2000);
  });
};

makePromise(content).then((x) => {
  alert(`${x}꿀맛!`);
});
