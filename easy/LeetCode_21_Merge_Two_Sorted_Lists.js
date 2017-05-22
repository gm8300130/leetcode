/*
## 題目

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

## 翻譯

融合兩個排序過的連結串列為一個新的連結串列後回傳。
```
範例：
[1,2,2,3] + [1,3] = [1,1,2,2,3,3]
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {

    let result = new ListNode(0);
    let node = result;

    while (l1 !== null && l2 !== null) {
        if (l1.val > l2.val) {
            node.next = l2;
            l2 = l2.next;
        } else {
            node.next = l1;
            l1 = l1.next;
        }

        node = node.next;
    }

    if (l1 === null) {
        node.next = l2;
    }
    if (l2 === null) {
        node.next = l1;
    }
    return result.next;
};
