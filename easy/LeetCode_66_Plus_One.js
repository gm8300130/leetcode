/*
## 題目

Given a non-negative number represented as an array of digits, plus one to the number.
The digits are stored such that the most significant digit is at the head of the list.

## 翻譯

給一包含非數整數的陣列，其中每一個值代表該位數的值，對這個陣列加1。
範例：
19 = [1,9] ， 19+1 = 20 = [2,0]。

 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

	for ( let i = digits.length - 1; i >= 0; i-- ) {
		if ( digits[i] < 9 ) {
			digits[i]++;
			return digits;
		} else {
			digits[i] = 0;
		}
	}
	digits.unshift(1)

	return digits;
};
