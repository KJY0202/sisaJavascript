/* 정규표현식 [(string 상위호환) == 문자 패턴 찾기] */

// const a = new RegExp() ;
//const a = /패턴/플래그;
const b = /abc/i; //g : global의 약자 //i : ignore의 약자(대소문자 무시)

console.log(b.test("abcdef"));
console.log(b.test("qwer"));
console.log(b.test("qwerabcqwer"));
console.log(b.test("ABC"));
console.log(b.test("a b c "));

const c = /^abc/; //abc로 시작
const d = /abc$/; //abc로 끝

console.log(c.test("qwerabc"));
console.log(d.test("qwerabc"));

const phone = /^010/;

const image = /png$/;
