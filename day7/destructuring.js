// destructuring
// const fruits = ["apple", "banana", "kiwi", "melon"];
// const [one, two] = fruits;

const students = [
  "오찬식",
  29,
  (x) => {
    console.log(`${x} 돌아왔구나`);
  },
  true,
  "JLPT 없음 ㅅㄱ",
];

const [one, two, three] = students;
console.log(one);
console.log(two);
three(one);
