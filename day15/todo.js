class Todo {
  #contents;
  #isDone;
  #deadline;

  constructor(contents, deadline) {
    this.#contents = contents;
    this.#isDone = false;
    this.#deadline = deadline;
  }
}

const a = new Todo("커피사기", "2026=09-19");

const add = document.querySelector(".todo");

const dead = document.querySelector(".dead");

const task = document.querySelector(".addTask");

task.addEventListener("click", () => {
  const div = document.createElement("div");
  div.innerHTML = `${add.value} -${dead.value} `;
  document.body.append(div);
});
