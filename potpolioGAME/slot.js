const machine = document.querySelector(".machine");
const coin = document.querySelector(".coin");
const roulette = document.querySelector(".roulette");
const random = document.querySelectorAll(".random");
const lever = document.querySelector(".lever");

const spin = (x) => {
  return setInterval(() => {
    const num = Math.floor(Math.random() * item.length);

    x.innerHTML = item[num];
  }, 100);
};

const item = ["🍋", "⭐", "🍓", "7️⃣", "💩"];

//const getCoin = +window.prompt("코인을 넣어주세요");

const count = 10;

coin.innerHTML = `코인 ${count}`;

lever.addEventListener("click", () => {
  lever.disabled = true;
  const coinCount = Number(coin.innerHTML.replace("코인 ", ""));

  if (coinCount <= 0) {
    return alert("코인이 부족합니다!");
  }

  coin.innerHTML = `코인 ${coinCount - 3}`;
  const timer1 = spin(random[0]);

  setTimeout(() => {
    clearInterval(timer1);
  }, 1000);
  const timer2 = spin(random[1]);

  setTimeout(() => {
    clearInterval(timer2);
  }, 2000);
  const timer3 = spin(random[2]);

  setTimeout(() => {
    clearInterval(timer3);
    if (random[0].innerHTML === random[1].innerHTML) {
      `${(coin.innerHTML = `코인 ${coinCount + 5}`)}`;
    } else if (random[1].innerHTML === random[2].innerHTML) {
      `${(coin.innerHTML = `코인 ${coinCount + 5}`)}`;
    } else if (
      (random[0].innerHTML === random[1].innerHTML) ===
      random[2].innerHTML
    ) {
      `${(coin.innerHTML = `코인 ${coinCount + 50}`)}`;
    }
    lever.disabled = false;
  }, 3000);
});
