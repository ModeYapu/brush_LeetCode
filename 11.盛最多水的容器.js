/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // 暴力穷举
  //   if (height.length < 2) return 0;
  //   let Maxarea = 0;
  //   let len = height.length;
  //   for (let i = 0; i < len; i++) {
  //     for (let j = 0; j < len; j++) {
  //       let height_str = height[i] < height[j] ? height[i] : height[j];
  //       let area = (j - i) * height_str;
  //       Maxarea = area > Maxarea ? area : Maxarea;
  //     }
  //   }
  //   return Maxarea;
  //   双指针法
  let [i, j, res] = [0, height.length - 1, 0];
  while (i < j) {
    res =
      height[i] < height[j]
        ? Math.max(res, (j - i) * height[i++])
        : Math.max(res, (j - i) * height[j--]);
  }
  return res;
};
// @lc code=end
