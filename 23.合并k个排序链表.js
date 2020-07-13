/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let len = lists.length;
  if (len == 0) return null;
  if (len == 1) return lists[0];
  let arr = new Array();
  for (let i = 0; i < len; i++) {
    let temp = lists[i];
    while (temp) {
      arr.push(temp.val);
      temp = temp.next;
    }
  }
  arr.sort((a, b) => a - b);
  let heap = new ListNode();
  let cur = heap;
  for (let i = 0, len = arr.length; i < len; i++) {
    let node = new ListNode(arr[i]);
    cur.next = node;
    cur = cur.next;
  }
  return heap.next;
};
// @lc code=end
