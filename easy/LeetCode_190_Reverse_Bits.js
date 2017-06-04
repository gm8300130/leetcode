/*
## 題目

Reverse bits of a given 32 bits unsigned integer.

For example, given input 43261596 (represented in binary as **00000010100101000001111010011100**), return 964176192 (represented in binary as **00111001011110000010100101000000**).

Follow up:
If this function is called many times, how would you optimize it?

Related problem: [Reverse Integer](https://leetcode.com/problems/reverse-integer/)

## 翻譯

給一個32 bits的int整數，反轉整數的bits。
範例： 整數43261596 轉換成bits = 00000010100101000001111010011100，將bit反轉00111001011110000010100101000000再轉成整數964176192回傳
進階：
如果這個function會被呼叫很多次，要怎麼做最佳化?
*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    if (n === 0) {
        return 0;
    }
    // 儲存n 轉2進位的bits array
    let list = [];

    for (let i = 0; i < 32; i++) {
        if (n > 0) {
            // 從低位數開始轉換, 放進list就已經完成反轉
            list.push(parseInt(n % 2));
            n = parseInt(n / 2);
        } else {
            list.push(0);
        }
    }
    // 將 bits array 轉換成整數
    return parseInt(list.join(''), 2);
};

var reverseBits = function (n) {
    let binput = (n.toString('2', n)).split('').reverse();
    while (binput.length < 32) {
        binput.push('0');
    }
    return (parseInt(binput.join(''), '2'));
};