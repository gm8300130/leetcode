/*

## 題目

Implement strStr().
Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.


## 翻譯

實做strStr()。
給一個指針needle跟字串堆疊haystack，回傳指針第一次在堆疊中出現的位置index。

範例：
haystack = "abcdede"
needle = "de"，"de"第一次出現的位置為3

 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

