/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let str = x.toString();
  let arr = str.split("");
  if (arr[0] === "-") {
    arr.shift();
    arr.reverse();
    if (arr[0] === "0") {
      arr.shift();
    }

    let num = Number(arr.join(""));
    if (num > Math.pow(2, -31) && num < Math.pow(2, 31) - 1) {
      return -num;
    }
    return 0;
  } else {
    arr.reverse();
    if (arr[0] === "0") {
      arr.shift();
    }
    console.log(arr.join(""));
    let num = Number(arr.join(""));
    if (num > Math.pow(2, -31) && num < Math.pow(2, 31) - 1) {
      return num;
    }
    return 0;
  }
};
// @lc code=end
