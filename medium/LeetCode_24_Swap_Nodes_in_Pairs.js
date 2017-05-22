/*

## 題目

Given a linked list, swap every two adjacent nodes and return its head.
For example, Given 1->2->3->4, you should return the list as 2->1->4->3.
Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.

## 翻譯

給一個連結陣列，交換兩兩相鄰的節點並且回傳。
範例： 1->2->3->4, return 2->1->4->3。
你的演算法不能改變節點裡面的值，只能把節點搬來搬去。

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
 * 改變值得作法
 */
var swapPairs = function (head) {

    if (head === null || head.next === null) {
        return head;
    }

    let prev = head;
    let cur = head.next;

    while (prev !== null && cur !== null) {
        // 一般交換
        let temp = prev.val;
        prev.val = cur.val;
        cur.val = temp;
        // 沒值就跳出
        if (cur.next === null || cur.next.next === null) {
            break;
        }
        // 處理下一對
        prev = cur.next;
        cur = cur.next.next;
    }
    return head;
};


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {

    if (head === null || head.next === null) {
        return head;
    }

    let firstNode = new ListNode(0);

    firstNode.next = head;

    let cur = head;
    let prev = firstNode;

    //預備存後面未處理的節點
    let next_keep;

    while (cur !== null && cur.next !== null) {
        // 把後面節點先存起來
        next_keep = cur.next.next;
        // [1,2] [3,4]斷開, [2]的next 變成[1]
        cur.next.next = cur;
        // 把 prev 指向[2]
        prev.next = cur.next;
        // 將[3,4]接回[1]
        cur.next = next_keep;
        // 處理下一組
        prev = cur;
        cur = cur.next;
    }    
    return firstNode.next;
}
