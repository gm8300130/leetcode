/*
## 題目

Given a singly linked list, determine if it is a palindrome.
Follow up: Could you do it in O(n) time and O(1) space?

## 翻譯

給一個單向的連結陣列，判斷他是不是一個回文連結陣列。
進階：你能使用O(n)的時間與O(1)的空間來處理這個題目嗎?

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
var isPalindrome = function (head) {
    // 反向字串
    let rec_string = '';
    // 正向字串
    let seq_string = '';

    while (head !== null) {
        seq_string += head.val;
        rec_string = head.val + rec_string;
        head = head.next;
    }

    return seq_string == rec_string;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    // 找中間點
    let middle = findMiddle(head);
    // 反轉list
    let reNode = reverseNode(middle); 

    while (reNode !== null) {
        if (head.val !== reNode.val) {
            return false;
        }
        head = head.next;
        reNode = reNode.next;
    }
    return true;

    
    // 找中心點
    function findMiddle(node) {
        let slow = node;
        let fast = node;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    // 反轉list
    function reverseNode(node)
    {
        if (node === null || node.next === null) {
            return node;
        }

        let prev = null;
        let cur = node;
        while (cur !== null) {
            let temp = cur;
            cur = cur.next;
            temp.next = prev;
            prev = temp;
        }
        return prev;
    }
};