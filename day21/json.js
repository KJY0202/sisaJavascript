const obj = {
  name: "kim",
  age: 30,
  skills: ["java", "javascript"],
};

//stringify : 문자열화해서 그대로 출력
const a = JSON.stringify(obj);
console.log(a);

// parse : 해석하기 !
const b = JSON.parse(`{"name":"kim","age":30,"skills":["java","javascript"]}`);

console.log(b);
