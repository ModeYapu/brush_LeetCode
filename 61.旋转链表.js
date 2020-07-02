/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) return null;
  let curr = head,
    tmp = null,
    n = 0;
  while (curr) {
    n++;
    if (!curr.next) {
      curr.next = head;
      break;
    }
    curr = curr.next;
  }
  k = k % n;
  while (k++ < n) {
    k === n && (tmp = head);
    head = head.next;
  }
  tmp.next = null;
  return head;
};
// @lc code=end
