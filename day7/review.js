const macdonald = [
  {
    name: "빅맥",
    price: 5500,
    kcal: 600,
    ingredients: ["bread", "lettuce", "tomato", "meat"],
  },
  { name: "콜라", price: 2000, kcal: 100, ingredients: ["soda"] },
  {
    name: "프랜치프라이",
    price: 3000,
    kcal: 300,
    ingredients: ["potato", "oil"],
  },
  {
    name: "상하이버거",
    price: 4500,
    kcal: 400,
    ingredients: ["bread", "lettuce", "chicken"],
  },
];

const result = macdonald.map((x) => x.kcal).reduce((a, c) => a + c);
console.log(result);

const result1 = macdonald
  .filter((x) => x.kcal <= 500)
  .map((x) => x.price)
  .reduce((a, c) => a + c);

console.log(result1);
