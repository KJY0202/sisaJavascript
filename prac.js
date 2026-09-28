import {
  EMPTY_MESSAGES,
  formatToday,
  filterTodos,
  getProgress,
} from "./pracfunc.js";

const today = document.querySelector("#today");
const progressText = document.querySelector("#progress-text");
const progressBar = document.querySelector("#progress-bar");

const form = document.querySelector("#form");
const input = document.querySelector("#txt");
const add = document.querySelector("#add");

const filters = document.querySelector("#filters");
const list = document.querySelector("#list");

const empty = document.querySelector("#empty");
const emptyTitle = document.querySelector("#empty-title");
const emptySub = document.querySelector("#empty-sub");

const clear = document.querySelector("#clear");

let todos = [];
let currentFilter = "all";

today.textContent = formatToday(new Date());

const createTodoItem = (todo) => {
  const li = document.createElement("li");
  li.className = todo.done ? "item done" : "item";
  li.dataset.id = todo.id;

  const label = document.createElement("label");
  label.className = "item__label";

  const checkbox = document.createElement("input");
  checkbox.className = "item__check";
  checkbox.type = "checkbox";
  checkbox.checked = todo.done;
  checkbox.addEventListener("change", () => {
    todo.done = checkbox.checked;
    render();
  });

  const text = document.createElement("span");
  text.className = "item__text";
  text.textContent = todo.text;

  const deleteButton = document.createElement("button");
  deleteButton.className = "item__del";
  deleteButton.type = "button";
  deleteButton.textContent = "✕";
  deleteButton.setAttribute("aria-label", `${todo.text} 삭제`);
  deleteButton.addEventListener("click", () => {
    todos = todos.filter((x) => x.id !== todo.id);
    render();
  });

  label.append(checkbox, text);
  li.append(label, deleteButton);

  return li;
};

const render = () => {
  list.innerHTML = "";

  const filteredTodos = filterTodos(todos, currentFilter);

  filteredTodos.forEach((todo) => list.append(createTodoItem(todo)));

  updateProgress();
  updateEmpty();
  updateClearButton();
};

const updateProgress = () => {
  const { total, done, percent } = getProgress(todos);

  progressText.textContent =
    total === 0 ? "아직 할 일이 없어요" : `${done} / ${total} 완료`;

  progressBar.style.width = `${percent}%`;
};

const updateEmpty = () => {
  empty.hidden = list.children.length !== 0;

  const [title, sub] = EMPTY_MESSAGES[currentFilter];
  emptyTitle.textContent = title;
  emptySub.textContent = sub;
};

const updateClearButton = () => {
  clear.disabled = !todos.some((todo) => todo.done);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = input.value.trim();
  if (text === "") return;

  todos.push({ id: Date.now(), text, done: false });

  input.value = "";
  add.disabled = true;

  render();
});

input.addEventListener("input", () => {
  add.disabled = input.value.trim() === "";
});

filters.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button) return;

  currentFilter = button.dataset.filter;

  filters.querySelectorAll("button").forEach((x) => {
    x.setAttribute("aria-pressed", x === button ? "true" : "false");
  });

  render();
});

clear.addEventListener("click", () => {
  todos = todos.filter((todo) => !todo.done);
  render();
});

render();
