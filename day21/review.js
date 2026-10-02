const product = document.querySelector("#product");
const recipe = document.querySelector("#recipe");
const user = document.querySelector("#user");
const items = document.querySelector(".items");
const loading = document.querySelector(".loading");

const makeCard = (key, data) => {
  const obj = {
    product: ["thumbnail", "title", "price"],
    recipe: ["image", "name", "rating"],
    user: ["image", "lastName", "university"],
  };
  return `
  <div class="card">
    <div class="album">
      <img src="${data[obj[key][0]]}" alt="" />
    </div>
    <div class="title">${data[obj[key][1]]}</div>
    <div class="price">${data[obj[key][2]]}</div>
  </div>`;
};

product.addEventListener("click", () => {
  loading.classList.remove("hidden");
  fetch("https://dummyjson.com/products")
    .then((v) => v.json())
    .then((v) => {
      const { products } = v;
      products.forEach((data) =>
        items.insertAdjacentHTML("beforeend", makeCard("product", data)),
      );
      loading.classList.add("hidden");
    });
});

recipe.addEventListener("click", () => {
  loading.classList.remove("hidden");
  fetch("https://dummyjson.com/recipes")
    .then((v) => v.json())
    .then((v) => {
      const { recipes } = v;
      recipes.forEach((data) =>
        items.insertAdjacentHTML("beforeend", makeCard("recipe", data)),
      );
      loading.classList.add("hidden");
    });
});

user.addEventListener("click", () => {
  loading.classList.remove("hidden");
  fetch("https://dummyjson.com/users")
    .then((v) => v.json())
    .then((v) => {
      const { users } = v;
      users.forEach((data) =>
        items.insertAdjacentHTML("beforeend", makeCard("user", data)),
      );
      loading.classList.add("hidden");
    });
});
