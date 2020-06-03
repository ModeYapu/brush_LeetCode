/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head) return head;
    if(head && !head.next) return head;
    let currentNode = head; 
    deleteDuplicates(currentNode.next)
    if(currentNode.val === currentNode.next.val){
        currentNode.next = currentNode.next.next;
    }
    return currentNode;
};
