/*
題目

Given two binary strings, return their sum (also a binary string).
For example, a = "11" b = "1" Return "100".
翻譯

給兩個字元字串，回傳他們的總和(以字元字串回傳)。
範例：
a = '11'
b = '1' return '100'

二進位相加
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

    var result = "";
    var i = a.length - 1;
    var j = b.length - 1;
    var carry = 0;

    while (i >= 0 || j >= 0 || carry > 0) {
        //從最後位數開始計算
        carry += i >= 0 ? parseInt(a[i--]) : 0;
        carry += j >= 0 ? parseInt(b[j--]) : 0;
        //用餘數方式看是0, 1
        result = carry % 2 + result;
        //carry=2 ,需要進位
        carry = parseInt(carry / 2);
    }

    return result;

};