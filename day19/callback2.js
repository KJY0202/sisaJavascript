//🥚🐣🐤🐔🍗

const btn = document.querySelector(".make");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn.addEventListener("click", () => {
  const egg = (step) => {
    setTimeout(
      () => {
        const div = document.createElement("div");
        div.innerHTML = "🥚";
        document.body.append(div);

        step();
      },
      getRandomInt((1, 3) * 1000),
    );
  };

  const hatch = (step) => {
    setTimeout(
      () => {
        const div = document.createElement("div");
        div.innerHTML = "🐣";
        document.body.append(div);

        step();
      },
      getRandomInt((1, 3) * 1000),
    );
  };

  const chicks = (step) => {
    setTimeout(
      () => {
        const div = document.createElement("div");
        div.innerHTML = "🐤";
        document.body.append(div);

        step();
      },
      getRandomInt((1, 3) * 1000),
    );
  };

  const chiken = (step) => {
    setTimeout(
      () => {
        const div = document.createElement("div");
        div.innerHTML = "🐔";
        document.body.append(div);

        step();
      },
      getRandomInt((1, 3) * 1000),
    );
  };

  const leg = () => {
    setTimeout(
      () => {
        const div = document.createElement("div");
        div.innerHTML = "🍗";
        document.body.append(div);
      },
      getRandomInt((1, 3) * 1000),
    );
  };

  egg(() => {
    hatch(() => {
      chicks(() => {
        chiken(() => {
          leg();
        });
      });
    });
  });
});
