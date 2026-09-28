// const fruits = ["strawberry", "Mandarin", "apple", "kiwi", "banana"];

/* 1. 각 과일의 글자 갯수로 바꾸기 */
/* 2. 글자 갯수가 6개 이상이면 오이시! 아니면 스미사셍 */
/* 3. 스펠링 i가 있으면 "스마일" 없으면 "우는거" 나타내기 */

const cafe = ["americano", "latte", "tea", "frappuccino", "ade"];

const newCafe = cafe.map((x) =>
  x.includes("i") || x.includes("o") ? x.length : x.toUpperCase(),
);
console.log(newCafe);

const newCafe1 = cafe.map((x) => (x.length >= 6 ? x.slice(0, 6) : x));
console.log(newCafe1);

const newCafe2 = cafe.map((x) => (x.includes("t") ? "true" : "false"));
console.log(newCafe2);

// const fruits = ["strawberry", "Mandarin", "apple", "kiwi", "banana"];

/* 1. 각 과일의 글자 갯수로 바꾸기 */
/* 2. 글자 갯수가 6개 이상이면 오이시! 아니면 스미사셍 */
/* 3. 스펠링 i가 있으면 "스마일" 없으면 "우는거" 나타내기 */

const cafe = ["americano", "latte", "tea", "frappuccino", "ade"];

const newCafe = cafe.map((x) =>
  x.includes("i") || x.includes("o") ? x.length : x.toUpperCase(),
);
console.log(newCafe);

const newCafe1 = cafe.map((x) => (x.length >= 6 ? x.slice(0, 6) : x));
console.log(newCafe1);

const newCafe2 = cafe.map((x) => (x.includes("t") ? "true" : "false"));
console.log(newCafe2);
