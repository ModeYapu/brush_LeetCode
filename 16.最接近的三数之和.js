/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let re_min = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length-2; i++) {
    let l = i + 1,
      r = nums.length - 1;
    while (l < r) {
      let threeSum = nums[i] + nums[l] + nums[r];
      if (Math.abs(threeSum - target) < Math.abs(re_min - target)) {
        re_min = threeSum;
      }
      if (threeSum > target) {
        r--;
      } else if (threeSum < target) {
        l++;
      } else {
        return target;
      }
    }
  }
  return re_min;
};
// @lc code=end
