/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;
  if (nums.length == 0) return null;
  let cen = Math.floor(nums.length / 2);
  let node = new TreeNode(nums[cen]);
  node.left = sortedArrayToBST(nums.slice(0, cen));
  node.right = sortedArrayToBST(nums.slice(cen + 1));
  return node;
};
// @lc code=end
