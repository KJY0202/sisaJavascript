export const EMPTY_MESSAGES = {
  all: ["할 일이 없어요", "새로운 할 일을 추가해보세요."],
  active: ["남은 일이 없어요", "모든 일을 끝냈어요."],
  done: ["끝낸 일이 없어요", "완료한 일이 여기에 표시돼요."],
};

export const formatToday = (date) =>
  `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;

export const filterTodos = (todos, filter) =>
  todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "done") return todo.done;
    return true;
  });

export const getProgress = (todos) => {
  const total = todos.length;
  const done = todos.filter((todo) => todo.done).length;
  const percent = total === 0 ? 0 : (done / total) * 100;

  return { total, done, percent };
};
