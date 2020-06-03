/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maximum = Number.MIN_SAFE_INTEGER
  let valueSoFar = 0
  nums.forEach(a => {
    if (valueSoFar > 0) {
      valueSoFar += a
    } else {
      valueSoFar = a
    }

    if (valueSoFar  > maximum) {
      maximum = valueSoFar
    }
  })
  return maximum 
};

