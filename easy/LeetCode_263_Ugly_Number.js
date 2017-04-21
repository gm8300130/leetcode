/*
# LeetCode 263. Ugly Number

## 題目

Write a program to check whether a given number is an ugly number.
Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.
Note that 1 is typically treated as an ugly number.

## 翻譯

判斷一個數字是否為ugly number
ugly number是說一個數字因式分解後只含有2,3,5這些因子，例如說6[2,3],8[2,2,2]都是ugly的，14[2,7]因為含有7，所以不是ugly。
注意: 1 是一個ugly number (LeetCode 202. Happy Number這題可以看到，1也是一個happy number，可知道1是一個醜但是樂觀的數字 XD)
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {

	if ( num <= 0 ) {
		return false;
	}
	//小於7 一定是
	if ( num <= 6 ) {
		return true;
	}

	while ( num >= 2 && num % 2 == 0 ) {
		num = num / 2;
	}
	while ( num >= 3 && num % 3 == 0 ) {
		num = num / 3;
	}
	while ( num >= 5 && num % 5 == 0 ) {
		num = num / 5;
	}

	return num === 1;
};