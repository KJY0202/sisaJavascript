// operator.js
// 연산자가 무엇?
// 토근(상징)

// 산술 연산자: +, -, *, /, %

const a1 = 1 + 2;
const a2 = 5 - 3;
const a3 = 4 * 2;
const a4 = 8 / 2;
const a5 = 7 % 3; // 나머지 연산자
const a6 = 2 ** 3; // 거듭제곱 연산자

// 대입 연산자: =

const b1 = true;
const b2 = "화요일";
const b3 = 10;

// 비교 연산자: ==, ===, !=, !==, >, <, >=, <= (boolean 저장됨)
const c1 = 5 == "5"; // true, 값만 비교
const c2 = 5 === "5"; // false, 값과 타입 모두 비교
const c3 = 5 != "5"; // false, 값만 비교
const c4 = 5 !== "5"; // true, 값과 타입 모두 비교
const c5 = 5 > 3; // true
const c6 = 5 < 3; // false
const c7 = 5 >= 5; // true
const c8 = 5 <= 3; // false

// 논리 연산자: &&[and], ||[or], ! [not]
const d1 = true && false; // false
const d2 = true || false; // true
const d3 = !true; // false
const d4 = !(true && false); // true

// 삼항 연산자: 조건 ? 참일 때 값 : 거짓일 때 값
const e1 = true ? "참" : "거짓"; // "참"
const e2 = false ? "참" : "거짓"; // "거짓"
