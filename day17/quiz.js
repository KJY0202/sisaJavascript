class Character {
  #name;
  #hp;
  #maxHp;
  #power;

  constructor(name, maxHp, power) {
    this.#name = name;
    this.#hp = maxHp;
    this.#maxHp = maxHp;
    this.#power = power;
  }

  get name() {
    return this.#name;
  }
  get power() {
    return this.#power;
  }
  get hp() {
    return this.#hp;
  }
  set hp(v) {
    this.#hp = Math.max(0, Math.min(v, this.#maxHp));
  }

  attack(target) {
    target.hp -= this.#power;
    console.log(`${this.#name} -> ${target.name} 공격!`);
    console.log(`${this.#power} 데미지`);
    console.log(`남은 HP: ${target.hp}`);
  }
}

class Warrior extends Character {
  constructor(name) {
    super(name, 150, 20);
  }

  powerStrike(target) {
    if (this.hp <= 20) {
      console.log(`${this.name}체력이 부족해서 파워스트라이크 불가! `);
      return;
    }
    this.hp -= 10;
    target.hp -= target.hp / 2;
    console.log(`${this.name}의 파워스트라이크!`);
    console.log(`${this.name}의 남은 체력: ${this.hp}`);
  }
}

const a = new Warrior("S2쩡은공듀S2");
const b = new Warrior("돌아온 찬식이");

const wolf = { name: "춤추는 늑대", hp: 100 };
const golem = { name: "든든한 골렘", hp: 1000 };

a.attack(wolf);
b.powerStrike(golem);

console.log({ wolf, golem });

class Monster {
  #name;
  #hp;

  #power;

  constructor(name, hp, power) {
    this.#name = name;
    this.#hp = hp;
    this.#power = power;
  }

  attack(target) {
    console.log(`${this.#name} -> ${target.name} 공격!`);
    target.hp -= this.#power;
  }
}

class Wolf extends Monster {
  #dodgeRate;
  constructor(name) {
    super(name, 150, 15);
    this.#dodgeRate = 0.2;
  }
  dodge() {
    return Math.random() < this.#dodgeRate;
  }
}
