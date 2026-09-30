const makeDough = (dough, step) => {
  setTimeout(() => {
    console.log(`${dough}도우 완성!`);
    step(dough);
  }, 3000);
};

const sauce = (sauce, step) => {
  setTimeout(() => {
    console.log(`${sauce}소스바르기 완료!`);
    step(sauce);
  }, 2000);
};

const topping = (topping, step) => {
  setTimeout(() => {
    console.log(`${topping}토핑 올리기 완료!`);
    step(topping);
  }, 1000);
};

const cheese = (cheese, step) => {
  setTimeout(() => {
    console.log(`${cheese}치즈 뿌리기 완료!`);
    step(cheese);
  }, 1000);
};

const bake = (step) => {
  setTimeout(() => {
    console.log(`굽기 끝!`);
    step();
  }, 5000);
};

const finish = () => {
  setTimeout(() => {
    console.log(`피자 완성!`);
  }, 1000);
};

makeDough("크러스트", () => {
  sauce("토마토", () => {
    topping("새우", () => {
      cheese("파마산", () => {
        bake(() => {
          finish();
        });
      });
    });
  });
});
