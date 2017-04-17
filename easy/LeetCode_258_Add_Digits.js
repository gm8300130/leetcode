/*
# LeetCode 258. Add Digits

## 題目

Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:
Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?

## 翻譯

將一個數字每個位數相加，直到剩個位數為止。

範例：
num = 38，則 3+8 = 11，1+1 = 2, 2是個為數，回傳2。

345 => 3+4+5 = 12 => 1+2 = 3 return 3;

進階：
不用迴圈，遞迴解這個問題
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

    if (num > 9) {
        num = addDigits( parseInt(num / 10) + num % 10 );
    }
    return num;
};