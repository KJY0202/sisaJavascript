// 1. 유저에게 한 변의 길이를 입력받으면 정사각형의 넓이와 둘레를 나타내기
// 2. 유저에게 원의 반지름의 길이를 입력받으면 원의 넓이와 둘레를 나타내기
// 3. 유저에게 정삼각형의 밑변과 높이를 각각 입력 받으면 정삼각형의 넓이와 둘레를 나타내기
// 4. 유저에게 몇분인지 물어보고 초 단위로 변환하기

const length = Number(window.prompt("정사각형의 한 변의 길이를 입력하세요:"));
const squareArea = length * length;
const squarePerimeter = 4 * length;
console.log(`정사각형의 넓이: ${squareArea}`);
console.log(`정사각형의 둘레: ${squarePerimeter}`);

const radius = Number(window.prompt("원의 반지름의 길이를 입력하세요:"));
const circleArea = radius ** 2 * 3.14;
const circlePerimeter = 2 * radius * 3.14;
console.log(`원의 넓이: ${circleArea}`);
console.log(`원의 둘레: ${circlePerimeter}`);

const triangleBase = Number(
  window.prompt("정삼각형의 밑변의 길이를 입력하세요:"),
);
const triangleHeight = Number(window.prompt("정삼각형의 높이를 입력하세요:"));
const triangleArea = (triangleBase * triangleHeight) / 2;
const trianglePerimeter = 3 * triangleBase;
console.log(`정삼각형의 넓이: ${triangleArea}`);
console.log(`정삼각형의 둘레: ${trianglePerimeter}`);

const minutes = Number(window.prompt("몇 분인지 입력하세요:"));
const seconds = minutes * 60;
console.log(`입력하신 ${minutes}분은 ${seconds}초입니다.`);
