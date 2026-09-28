// 타입캐스팅 & 생성자함수
// 기본 타입 생성자 함수
const a = String(10); // "10"
const b = Boolean(1); // true
const c = Number("100"); // 100
const d = Object(); // 구문법
const e = Array(100)
  .fill(0)
  .map((v, i) => i + 1); // [1~100]
e.forEach((v) => {}); // 각 요소를 순회하며 아무 작업도 하지 않음 (스키밍)

console.log({ a, b, c, d, e });
