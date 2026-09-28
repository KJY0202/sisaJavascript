/* 타입 */
//  기본 : string, number, boolean, undefined
//  참조 : array, object, function + window(브라우저), document(HTML), element(Tag)

// window.confirm("안녕하세요");
// window.alert("잘가세요!");
// window.console.log("ㅎㅇㅎㅇ");

const btn = document.createElement("button");
btn.innerHTML = "오늘은 수요일";

document.body.append(btn);

// div 태그로 만들고 - 오늘날짜 넣기
// h1 태그로 만들고 - js & html 넣기
//  화면에 태그 나타나도록 하기

const dv = document.createElement("div");
dv.innerHTML = 20260909;
document.body.append(dv);

const hh = document.createElement("h1");
hh.innerHTML = "js & html";
document.body.append(hh);
