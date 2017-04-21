/*
# LeetCode 342. Power of Four

## 題目

Given an integer (signed 32 bits), write a function to check whether it is a power of 4.+

Example: Given num = 16, return true. Given num = 5, return false.
Follow up: Could you solve it without loops/recursion?

## 翻譯

判斷一個32bits的int整數是否為4的倍數。
進階：不用迴圈，遞迴解題。

 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {

	if ( num <= 0 || num == 2 ) {
		return false;
	}
	if ( num === 1 ) {
	    return true;
	}

	while ( num >= 4 && num % 4 === 0 ) {
		num = num / 4;
	}

	return num === 1;
};