const movie = { name: "오디세이", director: "놀란", runningTime: 180 };
const snack = { popcorn: "고소 팝콘", drink: "제로콜라", side: "나초 " };
const a = { ...movie, ...snack };
console.log(a);

const coffee = [
  { name: "아메리카노", price: 3000, shots: 2 },
  { name: "라떼", price: 3500, shots: 2 },
  { name: "연유라떼", price: 4000, shots: 2 },
];

coffee.map((x) => {
  return { ...x, price: x.price + 1000, shots: x.shots * 2 };
});

//  coffee.map((x) => ({...x, price : x.price + 1000, shots : x.shots * 2 }));
