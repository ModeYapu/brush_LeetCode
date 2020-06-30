/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  var a = new Array();
  for (var i = 0; i < n; i++) a[i] = new Array();
  var boundl = 0;
  var boundr = n - 1;
  var boundu = 0;
  var boundd = n - 1;
  for (var k = 1, i = 0, j = 0, turn = "r"; k <= n * n; k++) {
    a[i][j] = k;
    if (turn == "r") {
      j++;
      if (j == boundr) {
        boundu++;
        turn = "d";
      }
    } else if (turn == "d") {
      i++;
      if (i == boundd) {
        boundr--;
        turn = "l";
      }
    } else if (turn == "l") {
      j--;
      if (j == boundl) {
        boundd--;
        turn = "u";
      }
    } else if (turn == "u") {
      i--;
      if (i == boundu) {
        boundl++;
        turn = "r";
      }
    }
  }
  return a;
};
// @lc code=end
