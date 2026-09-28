// 유저한테 만들고 싶은 태그 묻고, 내용묻고 화면에 나타내기

const getTag = window.prompt("만들고싶은 태그");
const getInfo = window.prompt("넣고싶은 내용");

const dv = document.createElement(getTag);
dv.innerHTML = getInfo;
dv.style.backgroundColor = "pink";
document.body.append(dv);
