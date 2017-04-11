/**
 *LeetCode 242. Valid Anagram

題目

Given two strings s and t, write a function to determine if t is an anagram of s.
For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

翻譯

給兩個字串s與t，回傳t是否為s的重組字
範例：
s = "anagram", t = "nagaram" 回傳true
s = "rat", t = "car" 回傳false

備註：
你可以假設字串只有小寫

追問：

如果輸入包含 unicode 字符該怎麼辦？你如何改寫方案來解決這種情況？

 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

	if (s.length != t.length) {
		return false;
	}

	var s = s.split('').sort().join('');
	var t = t.split('').sort().join('');

	return s == t;
};

isAnagram('owdr' , 'word'); //true
isAnagram('owdree' , 'word'); // false
isAnagram('owdr' , 'wordee'); //false
isAnagram('owedr' , 'weord'); //true
