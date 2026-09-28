/* 1. 유저에게 일본어 점수를 입력받고
100점 만점중에
90점 이상이면 A, 
80점 이상이면 B, 
70점 이상이면 C, 
60점 이상이면 D,
나머지는 스미마셍입니다. */

const score = +prompt("일본어 점수를 입력하세요.");

if (score < 0 || score > 100) {
  console.log("유효한 점수를 입력하세요.");
} else if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("스미마셍입니다.");
}

/* 놀이공원입장료
유저에게 나이를 물어보고
7세 미만이면 무료
7~12세이면 5000원
13~19세 10000원
그 외는 15000원 */

const age = +prompt("나이를 입력하세요.");
if (age < 7) {
  console.log("무료");
} else if (age >= 7 && age <= 12) {
  console.log("5000원");
} else if (age >= 13 && age <= 19) {
  console.log("10000원");
} else {
  console.log("15000원");
}
