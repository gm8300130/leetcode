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
    let sum = 0;
 	let i = 0;
 	let len = s.length - 1;

 	while (len >= 0) {
 		//A的ANIS CODE = 65, 從最後一位數開始
 		value = s.charCodeAt(len) - 64;
 		// 英文字母有26位,0 次方= 1
 		value = value * Math.pow( 26, i++);
 		sum += value;
 		len--;
 	}
 	return sum;
}
