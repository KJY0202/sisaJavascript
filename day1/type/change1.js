/*
프롬포트로 유저에게
첫번째 숫자 입력
두번째 숫자 입력
각각 받은 뒤
두 숫자의 합을 콘솔로 나타내기!
 */

// const num1 = window.prompt("첫번째 숫자를 입력하세요");
// const num2 = window.prompt("두번째 숫자를 입력하세요");

// console.log("두 숫자의 합은:", Number(num1) + Number(num2));

// 나이를 물어보고, 몇년생인지 맞추기 !
// 몇살인가요~? : 27
// 2000년생 이시군요 !

// const age = Number(window.prompt("몇살인가요~?"));
// const year = 2027 - age;
// console.log(`${year}년생이시군요!`);

// const a = 3 * 10; //곱하기
// const b = 5 / 2; //나누기
// const c = 3 ** 2; //거듭제곱

//유저한테 일본 여행 경비 원화 입력
// 엔화로 얼마 나오는지 콘솔로출력
// 환율은 오늘 인터넷 뒤지셈

const won = window.prompt("일본 여행 경비 원화 입력");
const rate = 8.6;
const yen = won / rate;
console.log(`일본 여행 경비: ${yen}엔`);
