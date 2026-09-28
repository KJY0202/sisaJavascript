// 1. 버스요금계산기
// 유저에게 나이를 물어보고,요금도입력받고,
//  7살이하이면 무료
// 8~9살이면 30%할인
// 65살 이상이면 30%할인
// 그 외에는 정상 요금
const age = Number(window.prompt("나이를 입력하세요:"));
const charge = Number(window.prompt("요금을 입력하세요:"));

age <= 7
  ? console.log("무료")
  : age >= 8 && age <= 9
    ? console.log("30%할인: " + charge * 0.7)
    : age >= 65
      ? console.log("30%할인: " + charge * 0.7)
      : console.log("정상 요금: " + charge);
// const age = Number(window.prompt("나이를 입력하세요:"));
// const bus_fee = Number(window.prompt("요금을 입력하세요:"));
// const isUnder7 = age <= 7;
// const isYouth = age >= 8 && age <= 19;
// const is65OrOlder = age >= 65;
// const discountRate = isUnder7 ? 0 : isYouth || is65OrOlder ? 0.7 : 1;
// console.log(`나이 : ${age} 버스요금 : ${bus_fee * discountRate}`);

// 2. 사용자에게 10000~99999 사이 숫자를 입력받고
// 각 자리의 합 나타내기, 단 위의수를 벗어나면 오류!!
// ex) 12345 -> 1+2+3+4+5 = 15, 43451 -> 4+3+4+5+1 = 17

const num = Number(window.prompt("10000~99999 사이 숫자를 입력하세요:"));
const isValid = num >= 10000 && num <= 99999;

const one = num % 10;
const ten = ((num - one) % 100) / 10;
const hundred = ((num - one - ten * 10) % 1000) / 100;
const thousand = ((num - one - ten * 10 - hundred * 100) % 10000) / 1000;
const tenThousand =
  ((num - one - ten * 10 - hundred * 100 - thousand * 1000) % 100000) / 10000;

console.log(
  isValid
    ? `각 자리의 합: ${one + ten + hundred + thousand + tenThousand}`
    : "오류: 10000~99999 사이의 숫자를 입력하세요.",
);
