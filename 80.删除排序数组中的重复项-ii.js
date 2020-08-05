/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 0;
  let n = nums.length;
  if (n < 3) return n;
  let j = 1;
  for (let i = 2; i < n; i++) {
    if (nums[i] != nums[j - 1]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};
// @lc code=end
