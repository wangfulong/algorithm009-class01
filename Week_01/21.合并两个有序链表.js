/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 递归 ｜ 暴力迭代
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var mergeTwoLists = function(l1, l2) {
//     if (l1 == null) return l2;
//     if (l2 == null) return l1;
//     if (l1.val < l2.val) {
//         l1.next = mergeTwoLists(l1.next, l2);
//         return l1;
//     } else {
//         l2.next = mergeTwoLists(l2.next, l1);
//         return l2;
//     }
// };

var mergeTwoLists = function(l1, l2) { 
    let head = new ListNode(-1);
    //一个临时的指针，他第一次next的时候，已经把头节next挂载上了
    let pre = head;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            pre.next = l1;
            l1 = l1.next;
        } else {
            pre.next = l2;
            l2 = l2.next;
        }
        //移动指针
        pre = pre.next;
    }
    pre.next = l1 ? l1 : l2;
    return head.next;
}
// @lc code=end

