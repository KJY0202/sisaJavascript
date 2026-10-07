//throw new TypeError("ㄹㅇ");

/* const arr = [1, 2, 3, 4, 5];
arr.toUpperCase();

 */

const toAge = (v) => {
  const n = Number(v);
  if (Number.isNaN(n)) throw new Error("숫자를 입력해 주세요");
  if (n < 0) throw new Error("나이는 음수가 될 수 없습니다");
  if (!Number.isInteger(n)) throw new Error("나이는 정수로만 입력해주세요");
  return n;
};

/* 외부랑 연결되는 코드 자주 쓰임 [fetch] */
try {
  toAge(30);
  toAge(20);
  toAge(-20);
  //console.log(a.toUpperCase());
} catch (e) {
  //에러나면 이쪽으로 코드 실행
  console.log(e);
  console.log("에러 펑펑");
} finally {
  console.log("무적권 실행됨");
}
