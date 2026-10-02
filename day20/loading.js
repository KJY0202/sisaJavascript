const loader = document.querySelector(".loader");
const pokemon = document.querySelector("#pokemon");
pokemon.style.opacity = "0";

const after = () => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success();
    }, 2000);
  });
};

after().then(() => {
  ((loader.style.display = "none"),
    (pokemon.style.opacity = "1"),
    (pokemon.style.width = "1000px"),
    (pokemon.style.height = "900px"));
});
