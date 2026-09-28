class Seat {
  #id;
  #reserved;

  constructor(id, reserved) {
    this.#id = id;
    this.#reserved = reserved;
  }

  getId() {
    return this.#id;
  }
  isReserved() {
    return this.#reserved;
  }
}

const seat1 = new Seat("A1", false);
const seat2 = new Seat("A2", false);
const seat3 = new Seat("A3", true);

const seats = [
  new Seat("A1", false),
  new Seat("A2", false),
  new Seat("A3", false),
  new Seat("A4", false),
  new Seat("A5", false),

  new Seat("B1", true),
  new Seat("B2", false),
  new Seat("B3", false),
  new Seat("B4", false),
  new Seat("B5", false),
];

seats.forEach((x) => {
  console.log(x.getId());
});
