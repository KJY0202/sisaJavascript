/* function : 마술상자(입력->출력) */

/*  function makeCoffee(beans) {
  return beans + "산 아메리카노";
}

const a = makeCoffee("칠레");
console.log(a);

function addTen(X) {
  return X + 10;
}

const b = addTen(100);
console.log(b);*/

/* 1. 어떠한 정수를 받으면 제곱해서 돌려주는 함수 만들기 */
/* 2. 어떠한 과일이름 받으면 땡땡과일 주문이라는 함수 만들기 */
/* 3. 어떠한 학생이름 받으면 오브젝트로 name:이름 으로 돌려주는 함수 만들기 */

function squareNumber(num) {
  return num * num;
}

const a = squareNumber(5);
console.log(a);

function orderFruit(fruit) {
  return fruit + "주문";
}

const b = orderFruit("사과");
console.log(b);

function createStudent(name) {
  return { name: name };
}

const c = createStudent("철수");
console.log(c);
