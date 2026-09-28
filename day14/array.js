const a = Array.from("abcdefg"); // 구문법
const b = [..."abcedfg"]; // 신문법
console.log(b);

const c = Array.from(document.querySelectorAll("li"));

console.log(c);

const d = [...document.querySelectorAll("li")];

console.log(d);

Object();
Array();
String();
