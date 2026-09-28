/* 엘리먼트 생성하고 꾸며주고 넣기 */

const newDiv = document.createElement("div");
newDiv.classList.add("yellow");
newDiv.classList.add("blue");
newDiv.classList.add("green");
newDiv.classList.toggle("red");
newDiv.innerHTML = "오재희 늦잠";
document.body.append(newDiv);
