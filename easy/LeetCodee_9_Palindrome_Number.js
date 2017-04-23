/*
## 題目

Determine whether an integer is a palindrome. Do this without extra space.
Some hints: Could negative integers be palindromes? (ie, -1)
If you are thinking of converting the integer to string, note the restriction of using extra space.
You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?
There is a more generic way of solving this problem.

## 翻譯

判斷一個int整數是否是自己的迴文數，不能使用額外的空間來操作。
提示：
負整數會是自己的迴文數嗎(ex. -1)
如果你想用字串來解是不行的，因為不能使用額外的空間。
你也可以反轉整數，如果你之前已經做過LeetCode 7. Reverse Integer，你會知道反轉後的數可能會超過integer的最大值。
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //因為int 有正負最大值
    if ( x < 0 || x > Math.pow(2, 32) - 1 ) {
    	return false;
    }
    if ( x < 9 ) {
    	return true;
    }
    //把原本的x暫存起來
    let original_num = x;
    //取x的個位數, 將會是倒轉過來reverse_num的最高位數
    let reverse_num = x % 10;
    x = parseInt(x / 10);

    //開始倒轉, 直到x = 0為止, 每跑一次都幫reverse_num進位(*10), 然後把x的餘數加上去
    while ( x != 0 ) {
    	reverse_num = reverse_num * 10  + x % 10;
    	x = parseInt(x / 10);
    }

    return reverse_num === original_num;
};

