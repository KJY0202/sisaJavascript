//  누르면 작은 메뉴가 열리고 다시 누르면 닫히는
const btn = document.querySelector(".menu");
const div = document.querySelector(".list");
btn.addEventListener("click", () => {
  div.style.display = div.style.display === "block" ? "none" : "block";
  div.style.width = "200px";
  div.style.height = "300px";
  div.style.border = "1px solid black";
  div.style.marginTop = "10px";
  div.style.boxShadow = " rgba(0, 0, 0, 0.35) 0px 5px 15px";
  div.style.borderRadius = "10px";

  document.body.append(div);
});
