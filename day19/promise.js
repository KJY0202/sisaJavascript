/* 브라우저에서 오래걸리는 작업: settimeout, setinterval  */
/* 함수에 함수를 넣어서 순서 보장 */
/* callback hell 발생 [2015년 이전까지 이렇게 함] */

/* promise : 비동기의 작업을 성공 또는 실패를 알려주는 타입 */
// const a  = new Promise()
// a.then()

// promise 타입
// 성공, 실패 매개변수로 가지는 함수 넣기 !

const a = new Promise((success, fail) => {
  setTimeout(() => {
    success("피자");
  }, 10000);
});

// state : 성공, 실패, 진행중
// state : fulfilled / rejected / pending, result :피자

console.log(a);

//a.then((x) => console.log(x));

const b = new Promise((success, fail) => {
  setTimeout(() => {
    success("치킨");
  }, 3000);
});

b.then((x) => console.log(x)); // then : 성공일 경우 옆에 있는 함수 실행
b.catch((x) => console.log(x)); // catch : 실패한다면

const c = new Promise((success, fail) => {
  setTimeout(() => {
    success("토마토 꿀맛!");
  }, 2000);
});

c.then((x) => alert(x));
