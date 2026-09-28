/* const arr = [2, 4, 6, 8, 10];

const doubledArray = arr.map((x) => x * 2);

const coffee = ["아메리카노", "라떼", "모카", "프라푸치노"];
const test = coffee.map((x, i) => `${i}.${x}`);
 */
/* const students = [
  { name: "김나단", age: 31 },
  { name: "이민욱", age: 29 },
  { name: "김나단", age: 30 },
];

const result = students.map((x, i) => {
  return { no: i, name: x.name, age: x.age };
}); */

/* const result = students.map((x, i) => {
    x.no = i;
    return x;
}); */

/* const company = [
  { name: "씨엘제로", location: "오사카" },
  { name: "라쿠텐", location: "도쿄" },
  { name: "메루카리", location: "도쿄" },
];

const quiz2 = company.map((x, i) => {
  x.no = `00${i + 1}`;
  return x;
}); */

/* const japanClass = [
  { name: "A반", level: "basic", students: ["오찬식", "이민욱", "윤정은"] },
  { name: "B반", level: "advance", students: ["김나단", "김지원", "최강현"] },
];
 */
/* const quiz3 = japanClass.map((x, i) => {
  x.no = i + 1;
  x.students = x.students.map((x1, i1) => {
    return { name: x1, no: i1 + 1 };
  });
  return x;
});

console.log(quiz3);
 */

const students = [
  {
    name: "윤정은",
    itBooks: ["html&css", "git&github", "javascript"],
    japaneseBooks: ["회화책", "문법책", "단어책"],
  },
  {
    name: "오찬식",
    itBooks: ["html&css", "git&github", "javascript"],
    japaneseBooks: ["히라가나", "가타카나", "단어책"],
  },
  {
    name: "이민욱",
    itBooks: ["html&css", "git&github", "javascript"],
    japaneseBooks: ["한문책", "출석책", "단어책"],
  },
];

const quiz4 = students.map((x, i) => {
  x.no = `00${i + 1}`;
  x.itBooks = x.itBooks.map((x1, i1) => {
    return { name: x1, no: i1 + 1, booksLength: x1.length };
  });
  x.japaneseBooks = x.japaneseBooks.map((x2) => {
    return { name: x2 };
  });
  return x;
});

console.log(quiz4);
