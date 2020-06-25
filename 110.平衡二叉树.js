/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  function isBalanced1(root, result) {
    if (root == null) {
      return 0;
    }
    let l = isBalanced1(root.left, result);
    let r = isBalanced1(root.right, result);
    if (l - r > 1 || l - r < -1) {
      result[0] = false;
    }
    return Math.max(l, r) + 1;
  }
  let a = [true];
  isBalanced1(root, a);
  return a[0];
};
// @lc code=end
