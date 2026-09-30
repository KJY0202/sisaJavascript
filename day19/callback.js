/* 비동기 컨트롤 문법 */
/* 카페 주문 순서 */
/* 주문 → 결제  → 제조 → 수령 */

const orderCoffee = (menu, step) => {
  setTimeout(() => {
    console.log(`${menu} 주문 완료 !`);
    step(menu);
  }, 1000);
};

const payCoffee = (step) => {
  setTimeout(() => {
    console.log(`결제 완료!`);
    step();
  }, 2000);
};

const makeCoffee = (step) => {
  setTimeout(() => {
    console.log(`제조 완료!`);
    step();
  }, 5000);
};

const takeoutCoffee = () => {
  setTimeout(() => {
    console.log(`수령 완료!`);
  }, 2000);
};

orderCoffee("라떼", () => {
  payCoffee(() => {
    makeCoffee(() => {
      takeoutCoffee();
    });
  });
});
