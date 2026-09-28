// const recipe = (x) => {
//   console.log("물끓이기");
//   x();
//   console.log("맛있게 먹기");
// };

// const Ramen = () => {
//   console.log("스프넣기");
//   console.log("라면넣기");
//   console.log("보글보글 끓이기");
// };

// const buldak = () => {
//   console.log("면넣기");
//   console.log("물버리기");
//   console.log("스프 넣고 비비기");
// };

// const Rice = () => {
//   console.log("쌀넣기");
//   console.log("뿔리기");
//   console.log("기다리기");
// };

// recipe(Ramen);

const activateSkill = (skill) => {
  console.log("스킬 시전 준비");
  skill();
  console.log("시전 완료");
};

const fire = () => {
  console.log("불의기운");
};
const light = () => {
  console.log("번개의기운");
};
const ice = () => {
  console.log("얼음의기운");
};

activateSkill(ice);
