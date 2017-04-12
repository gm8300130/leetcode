/*
題目

Given a pattern and a string str, find if str follows the same pattern.
Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.

Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

Credits:
Special thanks to @minglotus6 for adding this problem and creating all test cases.

翻譯

給一個樣版跟一個字串，判斷字串是否有遵循樣版的格式。
這邊的遵循是說字串中的每一個詞都與樣版有一致的對應。

範例：
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.

可以假設樣版中只有小寫字母，字串中毎個詞用空白隔開。
 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 * 同LeetCode.205
 */
var wordPattern = function(pattern, str) {

	var pattern_array = pattern.split('');
	var str_array = str.split(/\s/);

	if (pattern_array.length != str_array.length) {
		return false;
	}

	var pattern_map = {};
	var str_map = {};

	for (let i = 0; i < pattern_array.length; i++) {
		var pattern_char = pattern_array[i];
		var str_char = str_array[i];

		if ( !pattern_map[pattern_char] && !str_map[str_char]) {
			pattern_map[pattern_char] = str_array[i];
			str_map[str_char] = pattern_array[i];
		}

		if (pattern_map[pattern_char] != str_array[i] || str_map[str_char] != pattern_array[i]) {
			return false;
		}
	}
	return true;
};

wordPattern('abba', 'dog cat cat dog');
