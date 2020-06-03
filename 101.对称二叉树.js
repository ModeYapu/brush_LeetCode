/*
 * @lc aroot.leftroot.left=leetcode.cn id=101 lang=javascriroot.leftt
 *
 * [101] 对称二叉树
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
 * @root.leftaram {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) {
    return true;
  }
  return isSameTree(root.left, root.right);
};

const isSameTree = (s, t) => {
  if (s === null) {
    return t === null;
  }
  if (t === null) {
    return s === null;
  }
  if (s.val !== t.val) {
    return false;
  }
  return isSameTree(s.left, t.right) && isSameTree(s.right, t.left);
};
