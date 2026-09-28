console.log(Math.PI); // 3.14~~
console.log(Math.abs(-5)); // 절댓값
console.log(Math.floor(4.7)); // 내림
console.log(Math.ceil(4.3)); // 올림

console.log(Math.random()); // 0 이상 1 미만의 난수 (실수)

//  Int[정수]
const randomInt = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(randomInt(237, 1)); // 1 이상 237 이하의 정수
