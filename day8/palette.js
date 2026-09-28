const container = document.createElement("div");

container.style.width = "100vw";
container.style.height = "100vh";
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(5, 1fr)";
document.body.append(container);

const bg = [
  "#1abc9c",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#34495e",
  "#16a085",
  "#27ae60",
  "#2980b9",
  "#8e44ad",
  "#2c3e50",
  "#f1c40f",
  "#e67e22",
  "#e74c3c",
  "#ecf0f1",
  "#95a5a6",
  "#f39c12",
  "#d35400",
  "#c0392b",
  "#bdc3c7",
  "#7f8c8d",
];

const text = [
  "TURQUOISE",
  "EMERALD",
  "PETER RIVER",
  "AMETHYST",
  "WET ASF",
  "GREEN SEA",
  "NEPHRITIS",
  "BELIZE HOLE",
  "WISTERIA",
  "MIDNIGHT",
  "SUN FLOWER",
  "CARROT",
  "ALIZARIN",
  "CLOUDS",
  "CONC",
  "ORANGE",
  "PUMPKIN",
  "POMEGRANATE",
  "SILVER",
  "ASBE",
];

bg.forEach((v, i) => {
  const div = document.createElement("div");
  div.style.backgroundColor = v;
  const txt = document.createElement("span");
  txt.style.display = "flex";
  txt.style.justifyContent = "end";
  txt.style.marginTop = "225px";
  txt.style.marginRight = "10px";
  txt.innerHTML = text[i];
  txt.style.fontSize = "15px";
  txt.style.color = "white";
  txt.style.fontWeight = "bolder";
  div.append(txt);
  container.append(div);
});
