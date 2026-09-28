/* /* 일반 함수 [구문법] */
/*  function add(a, b) {
  return a + b;
}

const result = add(3, 4);
console.log(result);

/* 화살표 함수 [신문법] */
/*  const add = (a, b) => {
  return a + b;
};*/

/* 1. abc를 입력받고 배열로 돌려주기 [a,b,c] */
/* 2. x,y를 받으면 합, 차 , 곱 나누기, 제곱을 오브젝트로 돌려주기 */

const abc = (a, b, c) => {
  return [a, b, c];
};

const object = (x, y) => {
  return {
    plus: x + y,
    minus: x - y,
    multi: x * y,
    divided: x / y,
    square: x ** y,
  };
};
