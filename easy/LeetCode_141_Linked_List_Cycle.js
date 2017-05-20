/*
## 題目

Given a linked list, determine if it has a cycle in it.
Follow up: Can you solve it without using extra space?

## 翻譯

給一個連結陣列，判斷裡面是不是包含一個循環連結。
進階： 你能不使用額外的空間來解這題嗎?

```
範例:
[1,2,3,2,3,2.....]，[1]的next是[2]
[2]的next是[3]
[3]的next是[2]，從上一步我們知道2的next是[3]，所以這是一個循環連結
假如[1,2,3,2,3]，那就不是一個連結陣列迴圈，因為最後的[3]next並不是[2]，所以循環連結不成立。
```
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
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head === null || head.next === null) {
        return false;
    }

    let node = head;
    
    while (node.next != null) {
        // 已經被標記過
        if (node.flag) {
            return true;
        }
        // 打上標記
        node.flag = true;
        node = node.next;
    }
    return false;
};
/** 快慢指針
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head === null || head.next === null) {
        return false;
    }

    let slow = head.next;
    let fast = head.next.next;
 
    if (fast === null) {
        return false;
    }

    while (slow != fast) {
        if (fast.next === null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
   
        if (slow === null || fast === null) {
            return false;
        }
    }
    return true;
}
