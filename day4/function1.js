/*  function add(a, b) {
  return a + b;
}

const a = add(3, 4); // 7*/

function square(x, y) {
  return x ** y;
}

const a = square(2, 4);
console.log(a);

function object(menu, price) {
  return { menu, price };
}

const b = object("Pizza", 15000);
console.log(b);

function bigger(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
/* return x > y ? x : y */

const c = bigger(10, 20);
console.log(c);

function circle(r) {
  return `${3.14 * r * r}, ${2 * 3.14 * r}`;
}

const d = circle(5);
console.log(d);
