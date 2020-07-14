/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root) {
  let getDepth = (root, leftSubDepth, rightSubDepth) => {
    if (root) {
      leftSubDepth = getDepth(root.left);
      rightSubDepth = getDepth(root.right);
      return root.left && root.right
        ? Math.min(leftSubDepth, rightSubDepth) + 1
        : leftSubDepth + rightSubDepth + 1;
    }
    return 0;
  };
  return getDepth(root);
};
// @lc code=end
