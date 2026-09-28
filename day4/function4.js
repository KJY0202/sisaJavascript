const a = "icecream";
const b = a.includes("cream"); //true 포함하니?
const c = a.repeat(3); // icecream icecream icecream 해당 문자 n번반복
const d = a.endsWith("z"); //false a의 문자열이 z로 끝나는가?
const e = a.startsWith("z"); // false a의 문자열이 z로 시작하는가?
const f = a.toUpperCase(); // 모두 대문자화
const g = a.toLowerCase(); // 모두 소문자화
const h = a.replace("i", "w"); // i를 w로 바꾸기
const i = a.replaceAll("i", "w"); // i를 w로 모두 바꿔줘
const j = a.split("r"); // r 기준으로 반쪼개줘
const k = a.slice("0, 4"); // 0~3번째까지 잘라서줘
const l = a.length; // 길이

const news = `Russian President Vladimir Putin responded with one short sentence when asked at a press conference whether Moscow might strike military facilities in the UK in response to British arms supplies to Ukraine.
"That's a secret. A military secret."
Military secret is not a "yes". And not a "no". It leaves us hanging.
And that, I suspect, is the point.
Those two words feel like psychological pressure from the Kremlin: to keep Britain guessing - and stressing - over Moscow's intentions, as well as to encourage the UK to think twice about its staunch support for Ukraine.
It reminds me of a newspaper article I read a few days ago. Moskovsky Komsomolets had suggested that UK Prime Minister Andy Burnham should be seeing Russia, not in his dreams, "but in his nightmares".
Scary language. But short on detail about what those nightmares will look like.
We cannot conclude that Russian missiles are about to be used against targets in the UK.`;

const user_lookingfor = window.prompt("찾고 싶은 단어");

console.log(news.includes("user_lookingfor") ? "있음" : "없음");

console.log(news.toUpperCase());
console.log(news.replaceAll("Russian", "Korean"));
