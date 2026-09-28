// const test = [..."banana"];
// console.log(test);
// // ['b', 'a', 'n', 'a', 'n', 'a']

const fruits = [
  "apple",
  "pineapple",
  "banana",
  "peach",
  "kiwi",
  "orange",
  "mango",
  "strawberry",
];

/* aeiou를 😊로바꾸기 */

const a = fruits.map((word) =>
  [...word]
    .map((spelling) =>
      [..."aeiou"].some((vowel) => vowel === spelling) ? "😊" : spelling,
    )
    .reduce((a, c) => a + c),
);

console.log(a);
