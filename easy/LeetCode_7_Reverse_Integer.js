/*
## 題目

Reverse digits of an integer.
Example1: x = 123, return 321 Example2: x = -123, return -321
Have you thought about this? Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!
If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.
Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

## 翻譯

反轉一個int整數。
x = 123 , return 321 x = -123 , return -321
提示：
假如10，100反轉後會長怎樣。
你有注意到反轉後的數可能會超過Integer的範圍嗎，例如說1000000003反轉後就超過了32-bit的integer。這種情況要怎麼處理?
在這個問題中，超過integer只要回傳0就可以。

 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let number = 0;
    //倒轉數字
    while ( x != 0 ) {
    	number = number * 10 + x % 10;
    	x = parseInt( x / 10 );
    }
    //int 有最大最小值
    if ( number < Math.pow(2, 31) - 1 && number > Math.pow(-2, 31) ) {
    	return number;
    }
    return 0;
};