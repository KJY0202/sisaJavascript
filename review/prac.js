const order = (food) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (food === "품절") {
        reject(food);
      } else {
        resolve(food);
      }
    }, 2000);
  });
};
order("치킨")
  .then((x) => console.log(x))
  .catch((x) => console.log(x));
