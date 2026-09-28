// 1. 유저에게 나이를 물어보고, 20살 미만이면 콘솔에 미성년자 아니면 성인
// 2. 유저에게 정수(숫자)를 입력받고, 콘솔에 양의정수인지 음의정수인지 나타내기!
//  ex) 10 -> 양의정수, -5 -> 음의정수, 0 -> 0

// 3. 유저에게 정수를 입력받고, 짝수인지 홀수인지 콘솔에 나타내기
//  4 -> 짝수, 7 -> 홀수

const age = Number(window.prompt("몇살이신가요?"));
age < 20 ? console.log("미성년자") : console.log("성인");
// const result = age >= 20 ? "성인" : "미성년자";
// console.log('귀하는 $ {result}입니다.');

const number = Number(window.prompt("정수를 입력하세요:"));
const result2 = number > 0 ? "양의정수" : number < 0 ? "음의정수" : "0";
console.log(result2);

const num = Number(window.prompt("정수를 입력하세요:"));
num % 2 == 0 ? console.log("짝수") : console.log("홀수");
// const result3 = num % 2 == 1 ? "홀수" : "짝수";
