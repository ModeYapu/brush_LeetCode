/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // function factorial(i, a) {
  //   a = a || 1;
  //   if (i < 2) {
  //     return a;
  //   }
  //   // return factorial(i-1,a*i);
  //   return factorial(i - 1, a * i);
  // }
  // let num = factorial(m + n - 2) / (factorial(m - 1) * factorial(n - 1));
  // return num;
  let j = n + m - 2;
  let k = m - 1;
  let arr = [...Array(k + 1).keys()];
  arr.shift();
  let result = arr.reduce((cur, pre) => {
    return (cur * (j - k + pre)) / pre;
  }, 1);
  return result;
};
// @lc code=end
