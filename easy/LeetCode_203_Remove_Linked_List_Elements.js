/*
## 題目

Remove all elements from a linked list of integers that have value val.

Example Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6 Return: 1 --> 2 --> 3 --> 4 --> 5

## 翻譯

給一個值val，移除連結陣列中所有值為val的節點。
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

    if (head === null) {
        return null;
    }
  
    const node = new ListNode(0);
    let prev = node;
    node.next = head;

    while (head !== null) {
        if (head.val !== val) {
            prev = head;
            head = head.next;
        } else {
            prev.next = head.next;
            head = head.next;
        }
    }
    return node.next;
};
