//  또 타입
// string number boolean
// object array function math date set window document element

// 집합
const s = new Set();
s.add(1);
s.add(2);
s.add(3);
s.add(1);
console.log(s);
console.log(s.size);

const s1 = new Set();
s1.add("쿠키");
s1.add("초코칩");
s1.add("마카롱");
s1.add("초코칩");
console.log(s1);

const s2 = new Set([1, 2, 3, 1, 2, 3, 4, 5]);
console.log(s2);

const aa = [...s2];
console.log(aa);
