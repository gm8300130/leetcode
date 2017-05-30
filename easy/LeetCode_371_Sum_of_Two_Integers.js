/*
## 題目

Calculate the sum of two integers a and b, but you are **not allowed** to use the operator `+` and `-`.

Example:
Given a = 1 and b = 2, return 3.

## 翻譯

計算a,b的加總，但是不能用+-符號。
*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    if (a == 0) {
        return b;
    }
    if (b == 0) {
        return a;
    }

    while (b != 0) {
        // 進位值
        let carry = a & b; 
        // 相加
        a = a ^ b;
        // 進位
        b = carry << 1;
    }
    
    return a;
};

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    // bit manipulation 
    let tmp = a & b;
    return tmp == 0 ? a ^ b : (getSum(tmp << 1, a ^ b));
};