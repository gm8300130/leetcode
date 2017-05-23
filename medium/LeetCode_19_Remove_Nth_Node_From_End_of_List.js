/*
## 題目

Given a linked list, remove the nth node from the end of list and return its head.

For example,
```
   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
```

Note:
Given n will always be valid.
Try to do this in one pass.

## 翻譯

給一個連結串列，從清單的末尾刪除 第n個節點並返回

例如：

```
1->2->3->4->5, and n = 2.

重後面數刪除第二個, 移除4後連結陣列為1->2->3->5
```

注意：

n不會比連結陣列長，試著跑一次迴圈解題
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    
    if (head === null) {
        return head;
    }
    // 用假節點當首節點
    let node = new ListNode(0);
    node.next = head;

    let slow = node;
    let fast = head;

    // 快指針先跑n個節點
    while (n > 0){
        fast = fast.next;
        n--;
    } 
    // 因為快指針已先跑n點, 所以fast跑完, slow 會停在要移除的前一個點上
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    if (slow.next === null) {
        slow.next = null;
    } else {
        slow.next = slow.next.next;
    }

    return node.next;

};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    
    if (head === null) {
        return head;
    }

    let len = 0;
    let temp_head = head;
    // 先取長度
    while (temp_head != null) {
        len++;
        temp_head = temp_head.next;
    }

    if (n == len) {
        return head.next;
    }

    let split = len - n;
    let new_head = head;
    // 把指標移到要刪除的前一個位置上 
    for (let i = 1; i < split; i++) {
        new_head = new_head.next;
    }
    // 跳過要刪除的那一位, 連接到下一位
    new_head.next = new_head.next.next;

    return head;
};