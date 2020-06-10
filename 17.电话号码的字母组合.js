/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits || digits.trim() === "") return [];
  let myMap = new Map();
  myMap
    .set("2", ["a", "b", "c"])
    .set("3", ["d", "e", "f"])
    .set("4", ["g", "h", "i"])
    .set("5", ["j", "k", "l"])
    .set("6", ["m", "n", "o"])
    .set("7", ["p", "q", "r", "s"])
    .set("8", ["t", "u", "v"])
    .set("9", ["w", "x", "y", "z"]);
  let allArr = [];
  for (let i = 0; i < digits.length; i++) {
    let arr = myMap.get(digits[i]);
    allArr.push(arr);
  }

  let results = [];
  let result = [];
  //   js 排列组合
  let res = doExchange(allArr, 0, result, results);

  return res;
};
function doExchange(arr, index, result, results) {
  for (var i = 0; i < arr[index].length; i++) {
    result[index] = arr[index][i];
    if (index != arr.length - 1) {
      doExchange(arr, index + 1, result, results);
    } else {
      results.push(result.join(""));
    }
  }
  return results;
}
// @lc code=end
