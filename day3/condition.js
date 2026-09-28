/* const num = +prompt("숫자를 입력하세요");
if (num > 0) {
  console.log(`${num}은 0보다 큽니다.`);
}

console.log("프로그램 종료"); */

/* 유저에게 나이를 입력받고, 20살 이상이면 성인이시군요! */
/*  const age = +prompt("나이를 입력하세요");
if (age >= 20) {
  console.log("성인이시군요!");
} else {
  console.log("미성년자 이시군요!");
}

console.log("프로그램 종료");*/

const num = +prompt("정수입력");
if (num > 0) {
  console.log(`양의정수`);
} else if (num == 0) {
  console.log(`0`);
} else {
  console.log(`음의 정수`);
}
