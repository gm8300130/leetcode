/*
題目

Given an integer, write a function to determine if it is a power of three.
Follow up: Could you do it without using any loop / recursion?
翻譯

判斷一個整數是否是3的次方數。
進階： 不使用迴圈，遞迴解題?

 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {

	while (n > 2) {
		if (n % 3 !== 0) {
			return false;
		}
		n = n / 3 ;
	}
	return n === 1;
};