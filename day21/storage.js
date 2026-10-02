localStorage.setItem(
  "coffee",
  JSON.stringify({ name: "아메리카노", price: 2500, shots: 2 }),
);

localStorage.setItem(
  "bread",
  JSON.stringify({ name: "마들렌", price: 3000, kcal: 250 }),
);

const data = localStorage.getItem("bread");
const obj = JSON.parse(data);
console.log(data);
//연산자 : typeof
