/*
## 題目

Write a program to find the node at which the intersection of two singly linked lists begins.
For example, the following two linked lists:
```
A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3
```
begin to intersect at node c1.

Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.

## 翻譯

寫一支程式找出兩個連結陣列的第一個交集的節點。
注意：

如果兩個連結陣列沒有交集，回傳null
連結陣列必須保持他們的原始結構
可以假設不會出現迴圈連結陣列
程式只能在O(n)的時間跑完而且只能使用O(1)的空間

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

    let diff = getdiff(headA, headB);
    // A 比較長, 跳過A多出來的部分
    if (diff > 0) {
        while (diff > 0) {
            headA = headA.next;
            diff--;
        }
    } else {
        // B 比較長, 跳過B多出來的部分
        while (diff < 0) {
            headB = headB.next;
            diff++;
        }
    }

    while (headA !== null) {
        if (headA === headB) {
            return headA;
        }
        headA = headA.next;
        headB = headB.next;
    }
    return null;

    // 取得兩list長度差異
    function getdiff(headA, headB)
    { 
        let A_lenght = 0;
        let B_lenght = 0;

        while (headA !== null) {
            A_lenght++;
            headA = headA.next;
        }
        while (headB !== null) {
            B_lenght++;
            headB = headB.next;
        }

        return A_lenght - B_lenght;
    }
};