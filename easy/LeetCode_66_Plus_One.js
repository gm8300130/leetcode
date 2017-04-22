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

	let carry = 0;

	for ( let i = digits.length - 1; i >= 0; i-- ) {

		digits[i] = digits[i] + carry;
		//個位數＋1
		if ( i == digits.length - 1 ) {
			digits[i] = digits[i] + 1;
		}
		//10 就進位
		if ( digits[i] == 10 ) {
			digits[i] = 0;
			carry = 1;
		} else {
			carry = 0;
		}
	}
	//最後如需要補進位時
	if ( carry == 1 ) {
		digits.unshift(carry);
	}

	return digits;
};