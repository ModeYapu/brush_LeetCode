/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let l = nums.length
    for (let i = l - 1; i >= 0; i--) {
        if (nums[i] == val) {
            nums.splice(i, 1)
        }
    }
    return nums.length
};

