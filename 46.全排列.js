/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let arr = Array.from(nums),
    result = [],
    len = 0;

  function run(index) {
    if (index == arr.length - 1) {
      result.push(Array.from(arr));
      len++;
      return;
    }
    for (let i = index; i < arr.length; i++) {
      [arr[index], arr[i]] = [arr[i], arr[index]];
      run(index + 1);
      [arr[index], arr[i]] = [arr[i], arr[index]];
    }
  }
  run(0);
  return result;
};
// @lc code=end
