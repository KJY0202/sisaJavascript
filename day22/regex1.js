const a = /a[bd]c/; //abc adc 찾기
const a1 = /a[a-z]c/; //a?c 찾기

const a2 = /a[^b]c/; // b제외하고 a?c
a2.test("acc"); //true

const a3 = /a.c/; // a?c
a3.test("a찬c"); // true
a3.test("ac"); //false
