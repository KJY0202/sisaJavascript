const buttons = ["상세정보", "리뷰", "문의"];

buttons.forEach((v) => {
  const btn = document.createElement("button");
  btn.classList.add("button");
  btn.innerHTML = v;
});
