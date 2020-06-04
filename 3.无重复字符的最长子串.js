/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 1) return 1;
  let stack = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (!stack.includes(s[i])) {
      stack.push(s[i]);
      if (stack.length > max) max = stack.length;
    } else {
      let index = stack.indexOf(s[i]);
      stack.splice(0, index + 1);
      stack.push(s[i]);
    }
  }
  return max;
};
// @lc code=end
