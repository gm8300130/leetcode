/*
## 題目

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

## 翻譯

有兩個連結陣列分別代表兩個非負整數，他們的位數是反向儲存(越前面的節點位數越低)，毎一個節點代表一個位數，將這兩個連結陣列加總後以連結陣列形式回傳。
範例：
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 個位數為2與5，相加為7 ； 十位數為4+6 = 10，需要進位 ； 百位數為3 + 4 + 1(進位) = 8，結果為 7->0->8

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  
    let list = new ListNode(0);
    let result = list;

    let sum, carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        sum = 0;

        // l1, l2 有可能長度不一樣
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        // 如果之前有進位要加上去
        sum += carry;
        // list 只能放個位數, 超過9要進位
        list.next = new ListNode(sum % 10);
        carry = parseInt(sum / 10);
       
        list = list.next;
    }    

    return result.next;
};