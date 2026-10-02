const work = (food, time) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(`${food} 완성`);
    }, time);
  });
};
work("피자", 3000)
  .then((x) => {
    console.log(x);
    return work("소스", 2000);
  })
  .then((x) => {
    console.log(x);
    return work("토핑", 2000);
  })
  .then((x) => {
    console.log(x);
    return work("치즈", 1000);
  })
  .then((x) => {
    console.log(x);
    return work("굽기", 3000);
  })
  .then((x) => {
    console.log(x);
    return work("마무리", 2000);
  })
  .then((x) => console.log(x));
