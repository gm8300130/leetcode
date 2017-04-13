/*
題目

Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
If the last word does not exist, return 0.
Note: A word is defined as a character sequence consists of non-space characters only.
For example, Given s = "Hello World", return 5.
翻譯

給一個字串s，其中包含大小寫字母與空白' '，回傳最後一個單字的長度，如果沒有最後一個單字，回傳0。
注意：單字的定義是由一串連續中間沒空白的字元所組成。
範例： Given s = "Hello World"，最後一個單字為world，長度為5。
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    if (s.trim().length === 0) {
        return 0;
    }
    //先左右去空白
    var str = s.trim();
    //slice 取得最後一個字元
    var last_word = str.slice(-1);
    //lastIndexOf 最後字元的位置
    var last_word_key = str.lastIndexOf(last_word);
    var lest_key = str.lastIndexOf(' ');
    //代表只有一個單字
    if(lest_key < 0) {
        lest_key = 0
        last_word_key++;
    }

	return last_word_key - lest_key;
};
