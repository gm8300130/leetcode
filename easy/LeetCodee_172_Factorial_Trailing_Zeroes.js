/*
## 題目

Given an integer n, return the number of trailing zeroes in n!.
Note: Your solution should be in logarithmic time complexity.

## 翻譯

給一個正整數n，回傳n!中有幾個0
注意：你的解法應該是log(n)的時間複雜度。
範例： n = 5 ; n! = 120 回傳 1

`n!`: 代表一直連續不斷往下乘直到1為止
 */

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {

    let count = 0;

    if ( n < 5 ) {
    	return count;
    }

    while ( n >= 5 ) {
    	count += Math.floor( n / 5 );
    	n = n / 5;
    }
    return count;
};