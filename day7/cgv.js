/* 영화 : 오디세이, 코난, 스파이더맨, 귀멸의 칼날 */
/* 좌석 : 스탠다드(15000), 리클라이너(18000), IMAX(20000), 라이트(10000) */
// 성인 : 정가, 미성년자 or 시니어 : 80%
/* 팝콘 : 솔트(8000), 캬라멜(8500), 치즈(9000) */
/* 스낵 : 나쵸(4000), 오징어(7000), 핫도그(5000) */
/* 음료 : 탄산(2500), 커피류(4000), 에이드류(5000), 주류(7000) */

// 결과 : 영화 ?? 좌석 ?? 팝콘 ??[없음] 스낵??[없음] 음료??[없음]
// 총 금액 : ??

const cgv = {
  name: ["오디세이", "코난", "스파이더맨", "귀멸의 칼날"],
  seat: {
    스탠다드: 15000,
    리클라이너: 18000,
    IMAX: 20000,
    라이트: 10000,
  },
  popcorn: { 없음: 0, 솔트: 8000, 캬라멜: 8500, 치즈: 9000 },
  beverage: { 없음: 0, 탄산: 2500, 커피: 4000, 에이드: 5000, 주류: 7000 },
  snack: { 없음: 0, 나쵸: 4000, 핫도그: 5000, 오징어: 7000 },

  user_name: window.prompt("보고 싶은 영화는?"),
  user_seat: window.prompt("무슨 좌석? (스탠다드/리클라이너/IMAX/라이트)"),
  user_age: Number(window.prompt("몇 살이세요?")),
  user_popcorn: window.prompt("팝콘 뭐먹어요? (없음/솔트/캬라멜/치즈)"),
  user_beverage: window.prompt("음료 뭐마셔요? (없음/탄산/커피/에이드/주류)"),
  user_snack: window.prompt("추가 뭐먹어요? (없음/나쵸/오징어/핫도그)"),

  adult: false,
  adultPrice: 0,
  price: 0,

  isAdult() {
    this.adult = this.user_age >= 20 && this.user_age <= 65;
    this.adultPrice = this.adult ? 1 : 0.8;
  },

  getPrice() {
    this.price =
      (this.seat[this.user_seat] ?? 0) * this.adultPrice +
      (this.popcorn[this.user_popcorn] ?? 0) +
      (this.beverage[this.user_beverage] ?? 0) +
      (this.snack[this.user_snack] ?? 0);
  },

  show() {
    console.log(
      `영화: ${this.user_name}, 좌석: ${this.user_seat}, 팝콘: ${this.user_popcorn}, 음료: ${this.user_beverage}, 스낵: ${this.user_snack}, 총 금액: ${this.price}원 입니다.`,
    );
  },
};

cgv.isAdult();
cgv.getPrice();
cgv.show();
