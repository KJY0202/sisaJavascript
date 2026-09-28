const getDate = document.querySelector(".date");
const div = document.createElement("div");

getDate.addEventListener("change", (e) => {
  const { value } = e.target;
  const [year, month, date] = value.split("-");
  div.innerHTML = `${year}년 ${month}월 ${date}일`;
});

document.body.append(div);
