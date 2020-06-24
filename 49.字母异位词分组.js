/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i];
    let arr = str.split("");
    arr.sort();
    let istr = arr.join("");
    if (map.has(istr)) {
      let a = map.get(istr);
      a.push(str);
    } else {
      map.set(istr, [str]);
    }
  }
  return Array.from(map.values());
};
// @lc code=end
