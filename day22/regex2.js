const a = /ab+c/; //+ 1개 이상 있어야함
a.test("abbbbbbbbbbbbbbbc"); // true
a.test("ac"); //false

const a1 = /ab?c/; // ? 있거나 없거나
const a2 = /ab{2}c/; // ==abbc
const a3 = /ab{3c/; // ==abbc, abbbc, abbbbc

const phone = /^01[01679]\d{4}\d{4}/;
const a5 = /[0-9]/; //0~9
const a6 = /\d/; //digit[숫자]

/* 2026-10-06  */

const haha = /^2\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
