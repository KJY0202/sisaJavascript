/* const content = document.querySelector("#content");
const add = document.querySelector("#add");
const deleteAll = document.querySelector("#delete");
const schedule = document.querySelector(".schedule");

add.addEventListener("click", () => {
  const { value } = input;
  const data = localStorage.getItem("todos");

  //localStorage.setItem("todos", value);
});

deleteAll.addEventListener("click", () => {
  schedule.classList.add("hidden");
  localStorage.removeItem("sche", JSON.stringify(content.value));
});
 */
const input = document.querySelector("#input");
const add = document.querySelector("#add");
const remove = document.querySelector("#remove");
const todolist = document.querySelector("#todolist");

const newData = localStorage.getItem("todos");

if (newData != null) {
  JSON.parse(newData).forEach((v) => {
    const li = document.createElement("li");

    li.innerHTML = v;

    todolist.append(li);
  });
}

add.addEventListener("click", () => {
  const { value } = input;

  const data = localStorage.getItem("todos");

  if (data == null) {
    const arr = [value];

    localStorage.setItem("todos", JSON.stringify(arr));
  } else {
    const arr = JSON.parse(data);

    arr.push(value);

    localStorage.setItem("todos", JSON.stringify(arr));
  }

  todolist.innerHTML = "";

  const newData = localStorage.getItem("todos");

  JSON.parse(newData).forEach((v) => {
    const li = document.createElement("li");

    li.innerHTML = v;

    todolist.append(li);
  });

  input.value = "";
});

remove.addEventListener("click", () => {
  localStorage.removeItem("todos");

  todolist.innerHTML = "";
});

// localStorage.setItem("todos", ["잠자기", "책읽기", "유튜브 보기"]);
// const data = localStorage.getItem("todos");
// const test = JSON.parse(data);
// console.log(data.split(","));
