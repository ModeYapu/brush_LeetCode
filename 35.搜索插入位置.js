/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let t,l = nums.length;
  if (target > nums[l-1]) return nums.length;
  for (let i = 0; i < l; i++) {
    if (nums[i]>= target) {
      t = i;
      break;
    }  
  }
  return t
};
// searchInsert([1,3,5,6],2)
