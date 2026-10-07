/* 3대 에러 */
/*
1. compiler error [실행전 에러] (코드 문법 에러)
2. runtime error [실행중 에러]
3. context error [실행후 에러]
 */

/* 에러 : 뭔가 잘못됨 */
/* 테스트할때, 버그 잡을 때 사용하는 문법 */

/* throw new Error("아아 시켰는데 뜨아나옴");  */

const toAge = (v) => {
  const n = Number(v);
  if (Number.isNaN(n)) throw new Error("숫자를 입력해 주세요");
  if (n < 0) throw new Error("나이는 음수가 될 수 없습니다");
  if (!Number.isInteger(n)) throw new Error("나이는 정수로만 입력해주세요");
  return n;
};

//toAge("머리");
//toAge("-30");
//toAge("21.5");
//toAge("30");
