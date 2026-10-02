//fetch() Promise 리턴

/* fetch("https://dummyjson.com/recipes")
  .then((v) => v.json())
  .then((v) => console.log(v));
 */

const addProduct = document.querySelector(".addProduct");
const addRecipe = document.querySelector(".addRecipe");
const addUser = document.querySelector(".addUser");
const loader = document.querySelector(".loader");
const content = document.querySelector(".content");
const allContents = document.querySelector(".allContents");

addProduct.addEventListener("click", () => {
  allContents.innerHTML = "";
  loader.classList.remove("hidden");
  setTimeout(() => {
    fetch("https://dummyjson.com/products")
      .then((v) => v.json())
      .then((v) => {
        v.products.forEach((product) => {
          const card = document.createElement("div");
          const img = document.createElement("img");
          const title = document.createElement("h2");
          const price = document.createElement("p");

          img.src = product.thumbnail;
          title.innerHTML = product.title;
          price.innerHTML = `$${product.price}`;
          card.classList.add("product-card");
          card.append(img, title, price);
          allContents.append(card);
        });
        loader.classList.add("hidden");
      });
  }, 2000);
});

addRecipe.addEventListener("click", () => {
  allContents.innerHTML = "";
  loader.classList.remove("hidden");
  setTimeout(() => {
    fetch("https://dummyjson.com/recipes")
      .then((v) => v.json())
      .then((v) => {
        v.recipes.forEach((x) => {
          const card = document.createElement("div");
          const img = document.createElement("img");
          const title = document.createElement("h2");
          const price = document.createElement("p");

          img.src = x.image;
          title.innerHTML = x.name;
          price.innerHTML = `${x.rating}`;
          card.classList.add("product-card");
          card.append(img, title, price);
          allContents.append(card);
        });
        loader.classList.add("hidden");
      });
  }, 2000);
});

addUser.addEventListener("click", () => {
  allContents.innerHTML = "";
  loader.classList.remove("hidden");
  setTimeout(() => {
    fetch("https://dummyjson.com/users")
      .then((v) => v.json())
      .then((v) => {
        v.users.forEach((x) => {
          const card = document.createElement("div");
          const img = document.createElement("img");
          const title = document.createElement("h2");
          const price = document.createElement("p");

          img.src = x.image;
          title.innerHTML = x.lastName;
          price.innerHTML = `${x.university}`;
          card.classList.add("product-card");
          card.append(img, title, price);
          allContents.append(card);
        });
        loader.classList.add("hidden");
      });
  }, 2000);
});
