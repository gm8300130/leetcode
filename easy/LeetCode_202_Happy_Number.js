/**
 *
## 題目

Write an algorithm to determine if a number is "happy".
A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is a happy number
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

## 翻譯

判斷一個數字是否為happy number。
happy number 定義如下：當一個數的每位數平方後相加，大於1則重複每位數開平方相加的動作，如果最後得到1的話，這個數就是happy number，如果進入無窮迴圈，這個數就不是happy number。

 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

	if ( n < 0 ) {
		return false;
	}

	let map = [];

	while ( n != 1 ) {
		map.push(n);

		n.toString().split('').forEach(function(value, key){
			if ( key == 0 ) {
				n = 0;
			}
			n += Math.pow(value, 2);
		});

		if ( map.indexOf(n) > -1 ) {
			return false;
		}
	}
	return true;
};