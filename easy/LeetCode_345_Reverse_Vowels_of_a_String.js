/**
 * 題目
Write a function that takes a string as input and reverse only the vowels of a string.
Example 1: Given s = "hello", return "holle".
Example 2: Given s = "leetcode", return "leotcede".
Note: The vowels does not include the letter "y".

翻譯
給一個英文字串，將裡面的母音字母反轉。
範例1:
Given s = "hello", return "holle".
範例2：
Given s = "leetcode", return "leotcede".
注意： y不算在母音字母中。

http://www.gotoabc.url.tw/kk/kklesson/kklesson1.htm
1. 英文有 26 個字母，其中 a e i o u 是字母的母音，其他是子音

正規化表示法
http://syunguo.blogspot.tw/2013/04/jsregular-expressions.html
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

	if (s.length < 2) {
		return s;
	}
	//儲存找到的母音
    var vowels = [];

    for (let get_vowels of s) {
    	//正規化搜尋, test() 方法用於檢測一個字符串是否匹配某個模式.
    	if ( (/^[aeiou]$/i).test(get_vowels) ) {
    		//儲存找到的母音, 加入陣列
    		vowels.push(get_vowels);
    	}
    }

    //轉換輸入字串為陣列
    var input_s_array = s.split('');
    //vowels 最大key值
    var vowels_max_key = vowels.length-1;

    for (let i =0; i < input_s_array.length; i++) {
    	if ( (/^[aeiou]$/i).test(input_s_array[i]) ) {
    		//互換母音
    		input_s_array[i] = vowels[vowels_max_key--];
    	}
    }

    return input_s_array.join('');
};

reverseVowels('leetcode');
