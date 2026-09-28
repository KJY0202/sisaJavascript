/* #000000 ~ #ffffff */

const hexColor = [..."0123456789abcdef"];

const randomInt = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getHexColor = () => {
  return `#${hexColor[randomInt(15, 0)]}${hexColor[randomInt(15, 0)]}${hexColor[randomInt(15, 0)]}${hexColor[randomInt(15, 0)]}${hexColor[randomInt(15, 0)]}${hexColor[randomInt(15, 0)]}`;
};

const section = document.createElement("section");

section.style.cssText = `
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const user_counts = +prompt("박스 몇개?");

Array(user_counts)
  .fill(undefined)
  .forEach((x) => {
    const newBox = document.createElement("div");

    newBox.style.cssText = `
      height: 100px;
      background-color: ${getHexColor()};
    `;

    section.append(newBox);
  });

document.body.append(section);
