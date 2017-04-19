/*
# LeetCode 231. Power of Two

## 題目

Given an integer, write a function to determine if it is a power of two. +

## 翻譯

判斷一個整數是否是2的次方數。

## 想法

跑迴圈一直除2, 只要餘數不是0就不是2的次方
也可以用二進位方式
Math.log10() 也可以
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return ( Math.log10(n) / Math.log10(2) ) % 1 == 0;
};