/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let reps = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let res='';
  for (let i = 0; i < 13; i++) {
    while (num >= values[i]) {
      num -= values[i];
      res += reps[i];
    }
  }
  return res;
};
// var intToRoman = function (num) {
//   let map = {
//     1: { m1: "I", m2: "V" },
//     2: { m1: "X", m2: "L" },
//     3: { m1: "C", m2: "D" },
//     4: { m1: "M", m2: "V" },
//   };
//   let arrs = [];
//   let str = num.toString();
//   for (let i = 0; i < str.length; i++) {
//     let j = Number(str[i]),
//       s = "",
//       index = str.length - i;
//     let m = map[index];
//     if (j < 4) {
//       var arr = new Array(Number(j) + 1);

//       s = arr.join(m.m1);
//     } else if (j < 5) {
//       s = m.m1 + m.m2;
//     } else if (j < 9) {
//       var arr = new Array((j % 5) + 1);
//       s = m.m2 + arr.join(m.m1);
//     } else {
//       let ms = map[index + 1];
//       s = m.m1 + ms.m1;
//     }
//     arrs.push(s);
//   }
// //   console.log(arrs);
//   return arrs.join("");
// };
// @lc code=end
