/*

## 題目

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example, "A man, a plan, a canal: Panama" is a palindrome. "race a car" is not a palindrome.
Note: Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.

## 翻譯

給一個字串，不考慮大小寫與非字母數字的情況下，判斷這個字串是不是迴文。
範例：
"A man, a plan, a canal: Panama" --> true
"race a car" --> false (raceacar != racaecar)

注意：
你有考慮過空字串的情況嗎，在這邊我們定義空字串是一個迴文。


迴文: 正反念都是一樣
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	//全部轉小寫, 去除非字母與數字
	s = s.toLowerCase().replace(/[^a-z0-9]/ig, '');
	//reverse_str =  s 倒轉
	var reverse_str =  s.split('').reverse().join('');

	return s === reverse_str;
};

isPalindrome('AQWE EWQA');//true
isPalindrome('ZXC_CXZ');//true
isPalindrome('ASD2FG');//false
