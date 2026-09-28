/* 클래스 */
/* 나만의 타입 만들기 */

class Coffee {
  #name;
  #price;
  #kcal;
  #shots;

  constructor(a, b, c, d) {
    this.#name = a;
    this.#price = b;
    this.#kcal = c;
    this.#shots = d;
  }

  info() {
    console.log(`커피이름:${this.#name}`);
  }
}

const a = new Coffee("americano", 200, 1, 3);
