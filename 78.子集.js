/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    return nums.reduce((total,num)=>total.concat(total.map(item=>item.concat(num))),[[]])
};
// @lc code=end

