/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0], //记录最小值
    max = 0; //记录最大利润
  prices.forEach((item) => {
    if (item < min) min = item;
    if (item - min > max) max = item - min;
  });
  return max;
};
// @lc code=end
