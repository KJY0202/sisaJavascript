// 유저에게 만들고 싶은 버튼 갯수 물어보고
//  버튼 안의 내용은 안녕 ! 해주고
// 버튼 갯수만큼 화면에 출력하기

// const btnNum = +prompt("개수입력");

// Array(btnNum)
//   .fill(0)
//   .forEach((v) => {
//     const dv = document.createElement("button");

//     dv.innerHTML = "안녕!";

//     document.body.append(dv);
//   });

const bg = ["red", "orange", "yellow", "green", "blue", "navy", "indigo"];
const div_count = +prompt("개수입력");

Array(div_count)
  .fill(0)
  .forEach((v, i) => {
    const div = document.createElement("div");
    div.innerHTML = "안녕!";
    div.style.backgroundColor = bg[i % 7];
    document.body.append(div);
  });
