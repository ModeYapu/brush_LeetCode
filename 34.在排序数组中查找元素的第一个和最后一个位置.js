/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!nums) return [-1, -1];
  let firstIndex = nums.indexOf(target);
  let lastIndex = nums.lastIndexOf(target);
  return [firstIndex, lastIndex];
};
// @lc code=end
8