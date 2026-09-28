class Seat {
  #row;
  #column;
  #isOccupied;

  constructor(a, b) {
    this.#row = a;
    this.#column = b;
    this.#isOccupied = false;
  }

  select() {
    this.#isOccupied = !this.#isOccupied;
  }

  renderButton() {
    const button = document.createElement("button");
    button.classList.add("seat");
    button.innerHTML = `${this.#row}${this.#column}`;

    button.addEventListener("click", () => {
      button.classList.toggle("occupied");
    });

    const theator = document.querySelector(".theator");
    theator.append(button);
  }
}

[..."ABCDEFGHIJKL"].forEach((v) => {
  Array(10)
    .fill(undefined)
    .map((_, i) => i + 1)
    .forEach((n) => {
      new Seat(v, n).renderButton();
    });
});
