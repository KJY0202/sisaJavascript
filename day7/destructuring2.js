// const std = {
//   name: "윤정은",
//   age: 29,
//   mbti: "enfp",
//   parttime: ["코인노래방", "옷가게", "도토루"],
// };

// const { name, mbti, parttime } = std;

// const [two] = parttime;

// console.log(two);

const std = [
  {
    name: "최선호",
    parttime: [
      { name: "맥도날드", locatioin: "스기나미구" },
      { name: "it아르바이트", locatioin: "시나가와구" },
    ],
  },
  {
    name: "황다현",
    parttime: [{ name: "엑셀시오스", locatioin: "추오구" }],
  },
  {
    name: "유희찬",
    parttime: [{ name: "호텔서빙", locatioin: "포항" }],
  },
  {
    name: "전수효",
    parttime: [
      { name: "방탈출카페 알바", locatioin: "서울" },
      { name: "cgv", locatioin: "김포" },
    ],
  },
];

const [one, two] = std;
const [first, second] = one.parttime;
const { location } = first;
