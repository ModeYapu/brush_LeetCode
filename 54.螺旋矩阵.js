/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  var res = [];
  var i = 0;
  var j = 0;
  var n = matrix.length - 1;
  if (n < 0) return [];
  var m = matrix[0].length - 1;
  var turn = m == 0 ? "d" : "r";
  var boundl = 0;
  var boundr = m;
  var boundu = 0;
  var boundd = n;

  for (var a = 0; a < (m + 1) * (n + 1); a++) {
    res.push(matrix[i][j]);
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
  return res;
};
// @lc code=end
