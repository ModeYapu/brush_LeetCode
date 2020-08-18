/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let minLen = Infinity,
    resL; // minLen初始尽量大，保证第一次就能被赋值
  let map = {}; // 存储目标字符和对应的缺失个数
  let missingType = 0; // 当前缺失的字符种类数
  for (const char of t) {
    // t为baac的话，map为{a:2,b:1,c:1}
    if (!map[char]) {
      missingType++; // 需要找齐的种类数 +1
      map[char] = 1;
    } else {
      map[char]++;
    }
  }
  let left = 0,
    right = 0; // 左右指针
  for (; right < s.length; right++) {
    // 主旋律是扩张窗口，超出s串就结束循环
    let rightChar = s[right]; // 获取right指向的新字符
    if (map[rightChar] !== undefined) map[rightChar]--; // 是目标字符，它的缺失个数-1
    if (map[rightChar] == 0) missingType--; // 它的缺失个数变0，缺失的种类就-1
    while (missingType == 0) {
      // 当前窗口包含所有字符的前提下尽量收缩窗口
      if (right - left + 1 < minLen) {
        // 求窗口宽度，如果比minLen小就更新minLen
        minLen = right - left + 1;
        resL = left; // 并更新最小窗口的起点
      }
      let leftChar = s[left]; // 获取左指针指向的字符
      if (map[leftChar] !== undefined) map[leftChar]++; // 目标字符被舍弃，缺失个数+1
      if (map[leftChar] > 0) missingType++; // 如果缺失个数变>0，缺失的种类+1
      left++; // 收缩窗口
    }
  }
  return s.substring(resL, resL + minLen); // 根据起点和minLen截取子串
};
// @lc code=end
