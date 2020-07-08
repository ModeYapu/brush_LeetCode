/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let left = 0,
    right = nums.length - 1,
    curr = 0;
  while (curr <= right) {
    if (nums[curr] === 0) {
      [nums[curr], nums[left]] = [nums[left], nums[curr]];
      //这里为什么可以自信的直接加1而不检测被调换过来的数字呢？我们可以假设被换过来的数字可能为1，2；但是如果这个数字是2，那么在之前的循环中已经被移动末尾了，所以这个数组只可能是1.
      left++;
      curr++;
      continue;
    }
    if (nums[curr] === 2) {
      [nums[curr], nums[right]] = [nums[right], nums[curr]];
      right--;
      continue;
    }
    if (nums[curr] === 1) {
      curr++;
      continue;
    }
  }
  return nums;
};
// @lc code=end
