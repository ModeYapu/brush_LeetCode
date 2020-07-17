/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) return [];
  let res = [],
    i = 0;
  while (i < numRows) {
    let temp = [1];
    for (let j = 1; j < i; j++) {
      const row = res[i - 1];
      temp.push(row[j - 1] + row[j]);
    }
    if (i > 0) temp.push(1);
    res.push(temp);
    i++;
  }
  return res;
};
// @lc code=end
