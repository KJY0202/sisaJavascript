class Animal {
  #name;
  #stamina;
  #happiness;
  #alive;

  constructor(a) {
    this.#name = a;
    this.#stamina = 50;
    this.#happiness = 50;
    this.#alive = true;
  }

  workout() {
    this.#stamina += 10;
    this.#happiness -= 10;
  }
  sleep() {
    this.#stamina += 10;
    this.#happiness += 10;
  }
  eat() {
    this.#happiness += 10;
  }
  dead() {
    this.#alive = false;
  }
  useStamina(usedStamina) {
    this.#stamina -= usedStamina;
  }
}

class Bird extends Animal {
  constructor(a) {
    super(a);
  }

  fly(x) {
    super.useStamina(x);
  }
}

const eagle = new Bird("이글이글");
eagle.fly(30);

const pigeon = new Bird("빨래장인");
pigeon.fly(30);

class Fish extends Animal {
  constructor(a) {
    super(a);
  }
  swim(x) {
    super.useStamina(x);
  }
}
