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
	//把數字轉成三進位制的字串, 只要是開頭1 + 1個以上的0, ex:10 100 1000 ...就代表是三的次方
	return /^10*$/.test( n.toString(3) );
};