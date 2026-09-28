const car = {
  name: "포르쉐",
  model: "잘몰라요",
  speed: 0,
  speedUp() {
    this.speed = this.speed + 10;
  },
  speedDown() {
    this.speed = this.speed - 10;
  },
  break() {
    this.speed = 0;
  },
  show() {
    console.log(`${this.name}의 속도 : ${this.speed}`);
  },
};

car.speedUp();
car.speedUp();
car.speedUp();
car.show();

/* calc 라는 오브젝트 타입 변수 만들고 */
/* first, second 키값을 가지고 각각 유저에게 숫자를 입력 받고 */
/* plus, minus, multiply, square, divdie 함수를 각각 정의하고 출력하는 오브젝트타입 만들기 */

const calc = {
  frist: 0,
  second: 0,
  getNumber() {
    this.first = +window.prompt("첫 번째 숫자");
    this.second = +window.prompt("두 번째 숫자");
  },
  plus() {
    console.log(this.first + this.second);
  },
  minus() {
    console.log(this.first - this.second);
  },
  multiply() {
    console.log(this.first * this.second);
  },
  square() {
    console.log(this.first ** this.second);
  },
  divide() {
    console.log(this.first / this.second);
  },
};

calc.getNumber();
calc.plus();
