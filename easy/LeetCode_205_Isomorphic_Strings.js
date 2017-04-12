/**
 *
## 題目

Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

For example,
Given "egg", "add", return true.

Given "foo", "bar", return false.

Given "paper", "title", return true.

Note:
You may assume both s and t have the same length.

## 翻譯

給兩個字串s跟t，判斷他們是否是同構字。
如果他們是同構字，表示s裡面毎個字元都可以拿來對應t的特定字元。
全部的字元都要依順序被取代，而且`s一種字元只會對應t一種字元`，也可能對應到與自己相同的字元。

備註：
你可以假設 s 跟 t 有相同長度

同購字： s一種字元只會對應t一種字元, 也就是 e:a, g:d 不能有e:w的情況發生

 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
	//不符合條件先跳出
	if (!s || !t || s.length != t.length) {
		return false;
	}
	//建立map, 輸入字串轉陣列
	var s_map = {};
	var t_map = {};
	var input_s_array = s.split('');
	var input_t_array = t.split('');

	for (let i = 0; i < input_s_array.length; i++) {
		var s_char = input_s_array[i];
		var t_char = input_t_array[i];
		//只要沒有就寫入map
		if (!s_map[s_char] && !t_map[t_char]) {
			s_map[s_char] = t_char;
			t_map[t_char] = s_char;
		}
		//比較是否符合, 跟原本第一次寫入的不一樣就return fale
		if (s_map[s_char] != t_char || t_map[t_char] != s_char) {
			return false;
		}
	}
	return true;
};