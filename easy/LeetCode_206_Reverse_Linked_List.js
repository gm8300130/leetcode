/*

Reverse a singly linked list.

Hint:
A linked list can be reversed either iteratively or recursively. Could you implement both?


## 翻譯

反轉一個連結串列。

提示：

可以反覆運算或是遞回，你可以兩個都實現嗎？

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
var reverseList = function (head) {
    if (!head || !head.next) {
        return head;
    }
    // 反轉尾巴
    let tail = reverseList(head.next);
    // 第二個listnode 將指向 head
    head.next.next = head;
    // 斷開head
    head.next = null;

    return tail;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let next = null,
        curr = head,
        prev = null;
        
    while (curr != null) {
        // 記錄下一個指標所有node, 扣除第一個node
        next = curr.next;
        // 清空 or 置換上一個迴圈的所有node往後放
        curr.next = prev;
        //第一個位置
        prev = curr;
        // 一開始存起來的 node
        curr = next;
    }
    return prev;
};