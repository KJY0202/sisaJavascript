const menu = {
  name: "americano",
  price: 5000,
  kcal: 5,
  shots: 2,
};

const a = Object(); //  오브젝트 만드는거 -- > {}
const b = Object.keys(menu); // 키값만 배열로
const c = Object.values(menu); // 벨류값만 배열로
const d = Object.entries(menu); // 각 키랑 벨류 묶음끼리  배열로
console.log(d);
