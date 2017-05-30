/*
## 題目

Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).
For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.

## 翻譯

給一個整數，找出這個整數有幾個'1'，例如11用32-bit表示 '00000000000000000000000000001011'，總共有3個1，return 3

*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {

    let count = 0;
    // 轉二進位
    let bunary = n.toString(2).split('');

    for (let i in bunary) {
        // 有1, count就累加
        if (bunary[i] % 2 == 1) {
            count++;
        }
    }

    return count;
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    // 把0替換掉剩下的長度就代表有多少個1
    return (n).toString(2).replace(/[0]/g, '').length;
};
