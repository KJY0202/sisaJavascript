/* 유저에게 아이디 만들기 */

/* 1. 아이디 길이가 4~12글자 사이가 아니면 -> 길이를 4~12글자로 해주세요!  */
/* 아이디에서 @,!,#이 없으면 -> 특수문자 @!#중에 하나 포함해야해요! */
/* 아이디에서 0번째에서 3번째 글자가 대문자가 아니면 -> 0번째에서 3번째 글자가 대문자여야해요 !*/
/* 위에 다 통과되면 아이디 완성 */

/* const input = window.prompt("원하는 아이디를 입력해주세요");

if (input.length > 12 || input.length < 4) {
  console.log("길이를 4~12글자로 해주세요!");
} else if (
  !input.includes("@") &&
  !input.includes("!") &&
  input.includes("#")
) {
  console.log("특수문자 @!#중에 하나 포함해야해요!");
} else if (input.slice(0, 4) != input.slice(0, 4).toUpperCase()) {
  console.log("0번째에서 3번째 글자가 대문자여야해요 !");
} else {
  console.log("아이디가 성공적으로 생성되었습니다!");
}
 */

const email = window.prompt("이메일을 입력해주세요");

const inc = !email.includes("@");
const end =
  !email.endsWith(".net") &&
  !email.endsWith(".com") &&
  !email.endsWith(".co.kr");

const low = email == email.toLowerCase();
const number =
  !email.includes("0") &&
  !email.includes("1") &&
  !email.includes("2") &&
  !email.includes("3") &&
  !email.includes("4") &&
  !email.includes("5") &&
  !email.includes("6") &&
  !email.includes("7") &&
  !email.includes("8") &&
  !email.includes("9");

if (email.inc) {
  console.log("@를 포함해야합니다");
} else if (email.end) {
  console.log(".net/.com/.co.kr로 끝나야합니다");
} else if (email.number) {
  console.log("0~9사이 숫자를 포함해야합니다");
} else {
  console.log("이메일 통과");
}
