/* const addTen = (x) => {
  return x + 10;
};
const newArr = arr.map(addTen);
console.log(newArr); */

// 1. 홀수면 2배 짝수면 3배
// 2. 각각 자기 수의 제곱
// 3. 5의 배수만 "금요일" 바꾸기

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multi = (x) => {
  if (x % 2 == 1) {
    return x * 2;
  } else if (x % 2 == 0) {
    return x * 3;
  }
};

const newMulti = arr.map(multi);
console.log(newMulti);

const square = (x) => x ** x;

const newSquare = arr.map(square);
console.log(newSquare);

const num_Replace = (x) => {
  if (x % 5 == 0) {
    return "금요일";
  } else {
    return x;
  }
};

const newReplace = arr.map(num_Replace);
console.log(newReplace);
