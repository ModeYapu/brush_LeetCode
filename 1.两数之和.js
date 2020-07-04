/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let a = target - nums[i];
    let j = nums.indexOf(a);
    if (j > -1 && i !== j) {
      return [i, j];
    }
  }
};
// @lc code=end
