/* CGV */
/* 좌석선택 : 일반(15000), 라이트(13000), 프리미엄*(18000) */
/* 팝콘 선택 : 일반(8000), 캬라멜(9000), 치즈(9000) */
/* 음료 선택 : 탄산(3000), 아이스티(2000), 커피(4500) */
/* 멤버쉽 선택 : 브론즈(0%), 실버(10%), 골드(20%) */

/* 고르신 좌석 : ?, 팝콘 : ?, 음료 : ?, 총 금액 : ?  */

const selectseat = {
  일반: {
    name: "일반",
    price: 15000,
  },
  라이트: {
    name: "라이트",
    price: 13000,
  },
  프리미엄: {
    name: "프리미엄",
    price: 18000,
  },
};

const selectpopcorn = {
  일반: {
    name: "일반",
    price: 8000,
  },
  캬라멜: {
    name: "캬라멜",
    price: 9000,
  },
  치즈: {
    name: "치즈",
    price: 9000,
  },
};

const selectdrink = {
  탄산: {
    name: "탄산",
    price: 3000,
  },
  아이스티: {
    name: "아이스티",
    price: 2000,
  },
  커피: {
    name: "커피",
    price: 4500,
  },
};

const rateSystem = {
  membership: {
    브론즈: 1,
    실버: 0.9,
    골드: 0.8,
  },
};

const selectedSeat = prompt("좌석을 선택하세요: 일반, 라이트, 프리미엄");

const selectedPopcorn = prompt("팝콘을 선택하세요: 일반, 캬라멜, 치즈");

const selectedDrink = prompt("음료를 선택하세요: 탄산, 아이스티, 커피");

const selectedMembership = prompt("멤버쉽을 선택하세요: 브론즈, 실버, 골드");

const finalPrice =
  (selectseat[selectedSeat].price +
    selectpopcorn[selectedPopcorn].price +
    selectdrink[selectedDrink].price) *
  rateSystem.membership[selectedMembership];

console.log(
  `고르신 좌석: ${selectseat[selectedSeat].name}, 팝콘: ${selectpopcorn[selectedPopcorn].name}, 음료: ${selectdrink[selectedDrink].name}, 총 금액: ${finalPrice}`,
);
