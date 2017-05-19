/**
 ## 題目

Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.

## 翻譯

改一個排序過的連結陣列，刪除重複的節點。

範例：
[1,1,2] -> return [1,2]
[1,1,2,3,3] -> return [1,2,3]
 
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
var deleteDuplicates = function (head) {

    if (head === null || head.next === null) {
        return head;
    }
    let cur = head;

    while (cur.next !== null) {
        
        if (cur.val != cur.next.val) {
            cur = cur.next;
            continue;
        }
        cur.next = cur.next.next;
    }
    return head;
};