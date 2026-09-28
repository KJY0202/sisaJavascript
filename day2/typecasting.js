// truthy & falsy values
console.log(Boolean("스타벅스")); // true (truthy)
console.log(Boolean("")); // false (falsy)
console.log(Boolean(0)); // false (falsy)
console.log(Boolean(1)); // true (truthy)
console.log(Boolean(null)); // false (falsy)
console.log(Boolean(undefined)); // false (falsy)
console.log(Boolean(NaN)); // false (falsy)

// 명시적 타입캐스팅  : Boolean(), Number(), String()
// 암묵적 타입캐스팅  : Boolean : ! , number:

//

const usdername = window.prompt("이름을 입력하세요");
const nickname = usdername || "guest";
console.log(nickname);
