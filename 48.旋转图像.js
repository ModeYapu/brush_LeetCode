/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let len = matrix.length;
  let n = Math.ceil(len / 2);
  // 上下翻转
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < len; k++) {
      [matrix[i][k], matrix[len - 1 - i][k]] = [
        matrix[len - 1 - i][k],
        matrix[i][k],
      ];
    }
  }
  // 对角线翻转
  for (let i = 0; i < len; i++) {
    for (let k = i + 1; k < len; k++) {
      [matrix[i][k], matrix[k][i]] = [matrix[k][i], matrix[i][k]];
    }
  }
};
// @lc code=end
