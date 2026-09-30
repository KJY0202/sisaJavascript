const sayHello = () => {
  console.log("안녕하세요!");
};

const run = (callback) => {
  callback();
};

run(sayHello);
