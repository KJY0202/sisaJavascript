import { buttons } from "./teacherdata.js";
import { init } from "./teacherinit.js";

const buttonList = document.querySelector(".buttonList");
const contentsTag = document.querySelector(".contents");

buttons.forEach((v) => {
  const btn = document.createElement("button");

  btn.classList.add("button");

  btn.innerHTML = v.title;

  btn.id = v.id;

  btn.addEventListener("click", (e) => {
    const buttons = document.querySelectorAll(".button");

    buttons.forEach((v) => {
      v.classList.remove("activated");
    });

    e.target.classList.add("activated");

    contentsTag.innerHTML = `<p>${v.contents}</p>`;
  });

  buttonList.append(btn);
});

init();

contentsTag.innerHTML = `<p>${buttons[0].contents}</p>`;
