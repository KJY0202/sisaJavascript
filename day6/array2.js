/* map : 바꾸기 , filter : 거르기, find : 찾기 , some & every : 존재 유무 , reduce : 누적시켜줘 */

const arr = [10, 20, 30, 40, 50];
const sueprarr = arr.length;
console.log(sueprarr);

// arr.find((x) => x <= 10); /* 10 */ /* 조건이 중복되면 맨 앞에거 꺼내줌 */
// arr.findIndex((x) => x <= 10); /* 0번째 */
// arr.some((x) => x > 20); /* 20보다 큰게 하나라도 있는가 ? true */
// arr.every((x) => x > 20); /* 전부 20보다 큰가 ? false */

// const arr1 = [1, 2, 3, 4, 5];
// const result1 = arr1.reduce((a, c) => {
//   console.log({ a: a, c: c });
//   return a + c;
// });

// console.log(result1);

// const coupang = [
//   { name: "선풍기", price: 55000, counts: 1 },
//   { name: "양말", price: 3500, counts: 2 },
//   { name: "칫솔", price: 4000, counts: 3 },
// ];

// const result2 = coupang.map((x) => x.price * x.counts).reduce((a, c) => a + c);

// console.log(result2);

const butter = `Smooth like butter, like a criminal undercover
Gon' pop like trouble breaking into your heart like that, ooh
Cool shade, stunner, yeah, I owe it all to my mother, uh
Hot like summer, yeah, I'm making you sweat like that (break it down)
Ooh, when I look in the mirror
I'll melt your heart into two
I got that superstar glow, so
Ooh (do the boogie, like)
A side step, right-left, to my beat
High like the moon, rock with me, baby
Know that I got that heat
Let me show you 'cause talk is cheap
Side step, right-left, to my beat
Get it, let it roll
Smooth like butter, pull you in like no other
Don't need no Usher to remind me you got it bad
Ain't no other that can sweep you up like a robber
Straight up, I (got ya) making you fall like that (break it down)
Ooh, when I look in the mirror
I'll melt your heart into two
I got that superstar glow, so
Ooh (do the boogie, like)
Side step, right-left, to my beat
High like the moon, rock with me, baby`;

const result3 = butter.length;
console.log(result3);

const result4 = butter.split("butter").length - 1;

console.log(result4);
