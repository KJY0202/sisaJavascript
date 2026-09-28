/* map => 안의 요소들을 바꿔줘! */
// const arr = [1, 3, 5, 7, 9, 11];
// const a1 = arr.filter((x) => x > 6); /* ［７，９，１１] */
// const a2 = arr.filter((x) => x >= 3 && x <= 10);
// const a3 = arr.filter((x) => x % 3 == 0);
// const a4 = arr.filter((x, i) => i < 3);

// const fruits = ["apple", "pineapple", "banana", "kiwi", "melon", "mango"];

// const a1 = fruits.filter((x) => x.length >= 6);
// const a2 = fruits.filter((x) => x.includes("e")).map((x) => x.toUpperCase());
// console.log(a2);

const students = [
  { name: "윤정은", age: 30, mbti: "ENFP" },
  { name: "오찬식", age: 29, mbti: "ESTP" },
  { name: "이민욱", age: 26, mbti: "ISFJ" },
  { name: "오재희", age: 27, mbti: "ISTP" },
];

const a1 = students
  .filter((x) => x.age >= 29)
  .map((x) => {
    x.birthYear = `${2026 - x.age + 1}년생`;
    return x;
  });

console.log(a1);

const a2 = students
  .filter((x) => x.mbti.includes("I")) /* x.mbti[0] == "I" */
  .map((x) => {
    x.tendency = "내향적";
    return x;
  });
console.log(a2);
