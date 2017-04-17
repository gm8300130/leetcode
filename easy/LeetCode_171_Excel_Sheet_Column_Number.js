/*
# LeetCode 171. Excel Sheet Column Number

## 題目

Related to question Excel Sheet Column Title
Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:
```
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
```
*/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let letter_count = 26;
    let base_charcode = 'A'.charCodeAt(0) - 1;

    return s.split('').reduce(
        (acc, cur) =>
            acc * letter_count + cur.charCodeAt(0) - base_charcode
            , 0);
};
