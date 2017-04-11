/**
 * LeetCode 13. Roman to Integer
題目
Given a roman numeral, convert it to an integer.
Input is guaranteed to be within the range from 1 to 3999.
翻譯
給一個羅馬數字符號，將之轉為整數，這個數字一定落在1 到 3999 之間。
範例：
I = 1, IX = 9

wiki : https://zh.wikipedia.org/wiki/%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97
羅馬數字共有7個，即Ⅰ（1）、Ⅴ（5）、Ⅹ（10）、Ⅼ（50）、Ⅽ（100）、Ⅾ（500）和Ⅿ（1000）
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	//建立羅馬數字對應
	var map = {
		'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
	}
	//宣告變數 int
	var ans = 0;
	var prev = 0;
	var num = 0;

	for (let i  of s) {
		//轉換數字
		num = map[i];

		/**
		*羅馬數字特性: 左減右加, 所以當num 比較大時,
		*需要減掉 prev*2, 不是 *1 是因為左邊數值已先加總
		*ex: IX -> 1 + 10 - 2*1 = 9;
		*/
		if (prev >= num) {
			ans += num;
		} else {
			ans += num - (prev * 2);
			prev = 0;
		}
		//紀錄此次數字
		prev = num;
	}
	return ans;
};

romanToInt('CDXXXIII');